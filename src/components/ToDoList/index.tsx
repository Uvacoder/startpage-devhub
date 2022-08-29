import { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useAutoAnimate } from '@formkit/auto-animate/react';

import { RootState } from '@store';
import { addTodo, removeTodo } from './todoActions';
import { todoType } from './todoReducer';

import Button from '../common/Button';
import Modal from '../Layout/Modal';
import ToDoForm from './ToDoForm';

import { ReactComponent as CheckMarkIcon } from '@assets/check.svg';
import { ReactComponent as PlusIcon } from '@assets/plus.svg';

const ToDoList = ({ todos, addTodo, removeTodo }: ToDoListProps) => {
  const [animationParent] = useAutoAnimate<HTMLUListElement>();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col flex-wrap gap-2 rounded bg-stone-700 px-4 py-2 pb-4">
      <h1 className="text-2xl">Todos</h1>
      <ul ref={animationParent} className="flex flex-col gap-2">
        {todos.length === 0 && <div>Add things to do ...</div>}
        {todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            handleClick={(id: string) => removeTodo(id)}
          />
        ))}
        <Button
          onClick={() => setShowModal(true)}
          className="ml-auto"
          style="SIMPLE"
        >
          <PlusIcon />
          Add todo
        </Button>
        <Modal handleClose={() => setShowModal(false)} isOpen={showModal}>
          <ToDoForm
            onSubmit={(todo) => {
              addTodo(todo);
              setShowModal(false);
            }}
          />
        </Modal>
      </ul>
    </div>
  );
};

const connector = connect((state: RootState) => ({ todos: state.todos }), {
  addTodo,
  removeTodo
});
type ToDoListProps = ConnectedProps<typeof connector>;
export default connector(ToDoList);

const ToDoItem = ({
  handleClick,
  todo
}: {
  handleClick: (id: string) => void;
  todo: todoType;
}) => {
  const { id, completed, text, isImportant } = todo;
  return (
    <li
      className="flex cursor-pointer items-center gap-2 [&_span]:hover:border-stone-400 
      [&_.remove-btn]:hover:visible"
      onClick={() => handleClick(id)}
    >
      <span
        className={`flex h-4 w-4 rounded-[3px] ${
          completed ? 'bg-blue-500' : 'bg-stone-500'
        } transition hover:border-stone-400`}
      >
        {completed && <CheckMarkIcon width={16} height={16} />}
      </span>
      <div className="w-fit">{text}</div>
      {isImportant && <div className="badge bg-slate-500">Important</div>}
    </li>
  );
};
