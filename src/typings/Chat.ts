export type ChatDto = {
  messages: ChatMessageDto[];
};

export type ChatMessageDto = {
  id: string;
  createdAt: number;
  content: string;
  authorName: 'user' | 'assistant';
};

export type User = { firstName: string; id: string };
