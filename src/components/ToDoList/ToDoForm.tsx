import { useState } from 'react';

import Button from '../common/Button';

interface IProps {
  onSubmit: (todo: string) => void;
}

export default function ToDoForm({ onSubmit }: IProps) {
  const [text, setText] = useState('');

  const onEnter = () => {
    if (text.length === 0) return;
    onSubmit(text);
  };

  return (
    <>
      <h1 className="text-2xl">Add Todo</h1>
      <form className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Enter your todo..."
          className="input-text"
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setText(e.target.value)
          }
        />
        <Button className="ml-auto" onClick={onEnter}>
          Add
        </Button>
      </form>
    </>
  );
}
