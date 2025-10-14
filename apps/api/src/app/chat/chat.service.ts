import { Injectable } from "@nestjs/common";



@Injectable()
export class ChatService {

    chat = { 'message' : 'test'};

    getChat() {
        return this.chat;
    }

}