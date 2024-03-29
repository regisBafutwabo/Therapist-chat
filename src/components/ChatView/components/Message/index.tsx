import { MessageProps } from './Message.types';

export const Message = (props: MessageProps) => {
  const { content, authorName, createdAt } = props;
  return (
    <div
      className={`w-full flex ${
        authorName === 'assistant' ? 'justify-start' : 'justify-end'
      }`}
    >
      <div
        className={`${
          authorName === 'assistant' ? 'bg-purple-600' : 'bg-gray-500'
        } p-4 rounded-3xl flex flex-wrap max-w-sm`}
      >
        {content}
      </div>
    </div>
  );
};
