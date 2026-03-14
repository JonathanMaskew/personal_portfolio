'use client';

import { createContext, useContext } from 'react';
import { ChatSession, useChatSession } from '@/hooks/useChatSession';

const ChatSessionContext = createContext<ChatSession | null>(null);

export function ChatSessionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = useChatSession();
  return (
    <ChatSessionContext.Provider value={session}>
      {children}
    </ChatSessionContext.Provider>
  );
}

export function useSharedChatSession(): ChatSession {
  const ctx = useContext(ChatSessionContext);
  if (!ctx) {
    throw new Error(
      'useSharedChatSession must be used within a ChatSessionProvider'
    );
  }
  return ctx;
}
