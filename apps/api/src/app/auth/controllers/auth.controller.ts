import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { AuthGuard } from '../guards/auth.guard';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    login(@Body('email') email: string, @Body('password') password: string) {
        try {
            return this.authService.signIn(email, password)
        } catch (error) {
            throw error;
        }

    }

    @UseGuards(AuthGuard)
    @Get("profile")
    getProfile(@Request() req) {
        console.log(req)
        return req.user
    }
}
