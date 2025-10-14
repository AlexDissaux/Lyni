import { Controller, Get, Inject } from "@nestjs/common";
import { ChatEntity } from "./chat.entity";
import { ChatService } from "./chat.service";


@Controller('chat')
export class ChatController {
    @Inject() chatService: ChatService;

    @Get()
    getChat(): ChatEntity {
        return this.chatService.chat;
    }
}