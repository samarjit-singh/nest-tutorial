import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query
} from '@nestjs/common';

import { UsersService } from './users.service';

@Controller('users') // /users
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get() // GET /users or // users?role=value
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.usersService.findAll(role);
  }

  @Get(':id') //GET /user/:id
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Post()
  create(
    @Body()
    user: {
      name: string;
      email: string;
      role: 'INTERN' | 'ENIGNEER' | 'ADMIN';
    }
  ) {
    return this.usersService.create(user);
  }

  @Patch(':id') //PATCH /user/:id
  update(
    @Param('id') id: string,
    @Body()
    userUpdate: {
      name?: string;
      email?: string;
      role?: 'INTERN' | 'ENIGNEER' | 'ADMIN';
    }
  ) {
    return this.usersService.update(+id, userUpdate);
  }

  @Delete(':id') //DELETE /user/:id
  delete(@Param('id') id: string) {
    return this.usersService.delete(+id);
  }
}
