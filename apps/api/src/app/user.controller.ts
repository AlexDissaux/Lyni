import { Body, Controller, Get, Inject, Param, Post, Query } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./user.entity";

@Controller('user')
export class UserController {

    @Inject()
    private readonly userService: UserService


    @Get()
    findAll() {
        return this.userService.findAll()
    }

    @Post('createOne')
    createOne(@Body() body: User) {
        this.userService.create(body)
        return body;
    }

    @Get('byName/:name')
    findByName(@Param('name') name: string) {
        return { name };
    }
}




// Full exemple here :


// import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
// import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto';

// @Controller('cats')
// export class CatsController {
//   @Post()
//   create(@Body() createCatDto: CreateCatDto) {
//     return 'This action adds a new cat';
//   }

//   @Get()
//   findAll(@Query() query: ListAllEntities) {
//     return `This action returns all cats (limit: ${query.limit} items)`;
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return `This action returns a #${id} cat`;
//   }

//   @Put(':id')
//   update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
//     return `This action updates a #${id} cat`;
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return `This action removes a #${id} cat`;
//   }
// }
