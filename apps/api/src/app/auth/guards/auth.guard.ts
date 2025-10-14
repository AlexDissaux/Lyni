import { CanActivate, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";
import { Request } from 'express';
import { jwtConstants } from "../auth.constants";

export class AuthGuard implements CanActivate {

    constructor(private jwtService: JwtService) {}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(context.switchToHttp().getRequest())
        if (!token) {
            throw new UnauthorizedException();
        }
        try {
        const payload = this.jwtService.verify(
            token,
            {
            secret: jwtConstants.secret
            }
        );
        // 💡 We're assigning the payload to the request object here
        // so that we can access it in our route handlers
        request['user'] = payload;
        } catch {
            throw new UnauthorizedException();
        }
        return true;
    }
    
    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
}