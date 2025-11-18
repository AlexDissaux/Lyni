import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { APP_GUARD } from '@nestjs/core';
import { ChatGateway } from './chat.gateway';


@Module({
    providers: [
        ChatService,
        ChatGateway
        // {
        //     provide: APP_GUARD,
        //     useClass: JwtAuthGuard,
        // }
    ],
    controllers: [
        ChatController
    ]
})
export class ChatModule {
    
}
