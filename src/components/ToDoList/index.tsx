import { useDispatch, useSelector } from 'react-redux';
import { useAutoAnimate } from '@formkit/auto-animate/react';

import { AppDispatch } from '../../store';
import { addTodo, removeTodo } from './todoActions';
import { selectTodos } from './todoReducer';

import Button from '../common/Button';
import { ReactComponent as CheckMarkIcon } from '../../assets/check.svg';

const ToDoList = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch<AppDispatch>();
  const [animationParent] = useAutoAnimate<HTMLUListElement>();

  return (
    <div className="flex flex-col flex-wrap gap-2 rounded bg-stone-700 px-4 py-2 pb-4">
      <h1 className="text-2xl">TODO</h1>
      <ul ref={animationParent} className="flex flex-col gap-2">
        {todos.length === 0 && <div>Add things to do ...</div>}
        {todos.map(({ text, completed, id }) => (
          <li
            className="flex cursor-pointer items-center gap-2 [&_span]:hover:border-stone-400 
            [&_.remove-btn]:hover:visible"
            key={id}
            onClick={() => dispatch(removeTodo(id))}
          >
            <span
              className={`flex h-4 w-4 rounded-[3px]
            ${
              completed ? 'bg-blue-500' : 'bg-stone-500'
            } transition hover:border-stone-400`}
            >
              {completed && <CheckMarkIcon width={16} height={16} />}
            </span>
            <div className="w-fit">{text}</div>
          </li>
        ))}
      </ul>
      <Button handleClick={() => dispatch(addTodo('Another todo🐱'))}>
        Add todo
      </Button>
    </div>
  );
};

export default ToDoList;
