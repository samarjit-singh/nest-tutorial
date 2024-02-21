import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common';

@Controller('users') // /users
export class UsersController {
  @Get() // GET /users
  findAll() {
    return [];
  }

  @Get(':id') //GET /user/:id
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post()
  create(@Body() user: object) {
    return user;
  }

  @Patch(':id') //PATCH /user/:id
  update(@Param('id') id: string, @Body() userUpdate: object) {
    return { id, ...userUpdate };
  }

  @Delete(':id') //DELETE /user/:id
  delete(@Param('id') id: string) {
    return { id };
  }
}
