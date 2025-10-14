import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { access } from 'fs';

@Injectable()
export class AuthService {
    @Inject() userService: UserService;
    @Inject() jwtService: JwtService;

    signIn(email: string, password: string) {
        const user = this.userService.findOne(email);
        if (user && user.password === password) {
            return {
                access_token : this.jwtService.sign({sub: user.id, email: user.email})
            };
        } else {
            throw new UnauthorizedException();
        }
    }
}
