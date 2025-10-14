import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { APP_GUARD } from '@nestjs/core';

@Module({
    providers: [
        ChatService,
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
