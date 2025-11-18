
'use client';

import { useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';

export const Chat = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [input, setInput] = useState('');
    const socketRef = useRef<Socket | null>(null);

    useEffect(() => {
        socketRef.current = io('http://localhost:3000/chats');
        
        socketRef.current.on('chats', (data: string) => {
            setMessages((prev) => [...prev, data]);
        });

        return () => {
            socketRef.current?.disconnect();
        };
    }, []);

    const send = () => {
        if (input.trim()) {
            socketRef.current?.emit('chats', input);
            setInput('');
        }
    };

    return (
        <div>
            <h1>Chat</h1>
            <textarea value={messages.join('\n')} readOnly rows={10} cols={50} />
            <br />
            <input 
                value={input} 
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && send()}
            />
            <button onClick={send}>Send</button>
        </div>
    );
};