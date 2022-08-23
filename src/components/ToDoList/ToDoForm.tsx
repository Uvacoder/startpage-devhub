import { useState } from 'react';

import Button from '../common/Button';

export default function ToDoForm({
  onSubmit
}: {
  onSubmit: (todo: string) => void;
}) {
  const [text, setText] = useState('');
  return (
    <>
      <h1 className="text-2xl">Add Todo</h1>
      <form className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Enter your todo..."
          className="rounded bg-stone-600 px-4 py-2"
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setText(e.target.value)
          }
        />
        <Button className="ml-auto" onClick={() => onSubmit(text)}>
          Add
        </Button>
      </form>
    </>
  );
}
