import { Controller, Get, Param } from "@nestjs/common";


@Controller('user')
export class UserController {

    @Get()
    findAll() {
        return [{
            name: 'John Doe',
            status: 'VITE HOT RELOAD WORKING! 🚀'
        },
        {
            name: 'Jane Doe',
            status: 'Updated via Vite'
        }];
    }

    @Get('byName/:name')
    findByName(@Param('name') name: string) {
        return { name };
    }
}