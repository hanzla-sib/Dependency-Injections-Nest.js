import { Injectable } from '@nestjs/common';
import { UsersService } from './users.service';
import { createCipheriv, randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}
  async signUp(email: string, password: string) {
    const isEmailAvalible =await this.usersService.find(email);
    if (isEmailAvalible) {
      throw new Error('Email is already in use');
    } else {
      const hasingPass = 'hanzla is good';
      const iv = randomBytes(16);
      const key = (await promisify(scrypt)(password, 'salt', 32)) as Buffer;
      const cipher = createCipheriv('aes-256-ctr', key, iv);
     
      const encryptedText = Buffer.concat([
        cipher.update(password),
        cipher.final(),
      ]);
    //   this.usersService.create(email, encryptedText.);
    }
  }
  signIn() {}
}
