import { 
    MessageBody, 
    SubscribeMessage, 
    WebSocketGateway, 
    OnGatewayConnection,
    OnGatewayDisconnect,
    ConnectedSocket
} from "@nestjs/websockets";
import { Socket } from "socket.io";
import { Logger } from "@nestjs/common";


@WebSocketGateway({ 
    namespace: 'chats', 
    cors: { origin: '*' } 
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
    
    private logger: Logger = new Logger('ChatGateway');

    handleConnection(client: Socket) {
        this.logger.log(`🔌 Client connecté: ${client.id}`);
    }

    handleDisconnect(client: Socket) {
        this.logger.log(`🔌 Client déconnecté: ${client.id}`);
    }

    @SubscribeMessage('chats')
    handleChat(
        @MessageBody() data: string,
        @ConnectedSocket() client: Socket
    ) {
        this.logger.log(`Message reçu de ${client.id}: ${data}`);
        
        // Réponse simple au client - NestJS gère automatiquement l'émission
        // return data;
        
        // Alternative: broadcast à tous les clients
        // client.broadcast.emit('chats', data);
        // return data;
        // Renvoyer à tous les clients (y compris l'émetteur)
        client.emit('chats', data);
        client.broadcast.emit('chats', data);
    }
    
} 

// https://socket.io/docs/v4/rooms/