import { Test, TestingModule } from '@nestjs/testing';
import { ChatGateway } from './chat.gateway';

describe('ChatGateway', () => {
  let gateway: ChatGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatGateway],
    }).compile();

    gateway = module.get<ChatGateway>(ChatGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });

  describe('handleChat', () => {
    it('should return the same data that was sent', () => {
      const testMessage = 'Hello WebSocket!';
      const result = gateway.handleChat(testMessage);
      
      expect(result).toBe(testMessage);
    });

    it('should handle different message types', () => {
      const messages = [
        'Simple text',
        'Message with émojis 🚀',
        '12345',
      ];

      messages.forEach(msg => {
        expect(gateway.handleChat(msg)).toBe(msg);
      });
    });
  });
});
