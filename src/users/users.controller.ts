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
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/UpdateUserDto';
import { UsersService } from './users.service';
@Controller('auth')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    this.userService.create(body.email, body.password);
  }

  @Get()
  findAllUsers(@Query('email') email: string) {
    return this.userService.find(email);
  }

  @UseInterceptors(ClassSerializerInterceptor)
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
