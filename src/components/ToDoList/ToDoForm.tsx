import { useState } from 'react';

import Button from '../common/Button';

interface IProps {
  onSubmit: (todo: { text: string; isImportant: boolean }) => void;
}

export default function ToDoForm({ onSubmit }: IProps) {
  const [text, setText] = useState('');
  const [isImportant, setIsImportant] = useState(false);

  const onEnter = () => {
    if (text.length === 0) return;
    onSubmit({ text, isImportant });
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
        <div className="flex gap-1">
          <input
            type="checkbox"
            placeholder="Enter your todo..."
            className="input-text"
            checked={isImportant}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setIsImportant(e.target.checked)
            }
            name="isImportant"
            id="isImportant"
          />
          <label htmlFor="isImportant">Important</label>
        </div>
        <Button className="ml-auto" onClick={onEnter}>
          Add
        </Button>
      </form>
    </>
  );
}
