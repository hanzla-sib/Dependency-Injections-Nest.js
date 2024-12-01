import {
  Body,
  Controller,
  Patch,
  Delete,
  Get,
  Param,
  Post,
  Query,
  NotFoundException,
  Session,
} from '@nestjs/common';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/UpdateUserDto';
import { UsersService } from './users.service';
import { UserDto } from './dtos/user.dto';
import { AuthService } from './auth.service';
import { CurrentUser } from './decorators/current-user.decorator';
@Controller('auth')
@Serialize(UserDto)
export class UsersController {
  constructor(
    private userService: UsersService,
    private authService: AuthService,
  ) {}
  @Post('/signup')
  async createUser(@Body() body: CreateUserDto, @Session() session: any) {
    // this.userService.create(body.email, body.password);
    session.userId = body.email;
    const user = await this.authService.signUp(body.email, body.password);
    if (user) {
      session.userId = user.id;
      return user;
    }
  }

  @Post('/signin')
  async signIn(
    @Body() body: CreateUserDto,
    @Session() session: any,
    @CurrentUser() currentuser: any,
  ) {
    const user = await this.authService.signIn(body.email, body.password);
    if (user) {
      session.userId = user.id;
      return user;
    }
  }

  // @Get('/whoami')
  // whoAmI(@Session() session: any) {
  //   return this.userService.findOne(session.userId);
  // }

  @Get('/whoami')
  whoAmI(@CurrentUser() currentuser: any) {
    return currentuser;
  }

  @Get('/signout')
  signOut(@Session() session: any) {
    session.userId = null;
    return 'you are signed out';
  }

  @Get()
  findAllUsers(@Query('email') email: string) {
    return this.userService.find(email);
  }

  // @UseInterceptors(new SerializeInterceptor(UserDto))

  @Get('/:id')
  async getById(@Param('id') id: string) {
    const userF = await this.userService.findOne(parseInt(id));
    if (!userF) {
      throw new NotFoundException('user not found');
    }
    return userF;
  }

  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.userService.remove(parseInt(id));
  }
  @Patch('/:id')
  UpdateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.userService.update(parseInt(id), body);
  }
}
