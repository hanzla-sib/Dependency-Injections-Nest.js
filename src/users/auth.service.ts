import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(_scrypt);
@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}
  async signUp(email: string, password: string) {
    const isEmailAvalible = await this.usersService.find(email);
    if (isEmailAvalible) {
      throw new Error('Email is already in use');
    } else {
      const salt = randomBytes(8).toString('hex');
      const hash = (await scrypt(password, salt, 32)) as Buffer;

      const encryptedText = `${salt}.${hash.toString('hex')}`;
      //   this.usersService.create(email, encryptedText.);
      const user = await this.usersService.create(email, encryptedText);
      return user;
    }
  }
  async signIn(email: string, password: string) {
    const [user] = await this.usersService.find(email);
    if (!user) {
      throw new NotFoundException('Email not found');
    }

    const [salt, storedHash] = user.password.split('.');

    const hash = (await scrypt(password, salt, 32)) as Buffer;
    if (storedHash !== hash.toString('hex')) {
      throw new BadRequestException(' bad username or password');
    }

    return user;
  }
}
