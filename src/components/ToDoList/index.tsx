import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store, { AppDispatch } from '../../store';
import { addTodo } from './todoActions';
import { selectTodos } from './todoReducer';

const ToDoList = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="flex flex-col flex-wrap gap-2 rounded bg-stone-700 px-4 py-2 pb-4">
      <h1 className="text-2xl">TODO</h1>
      {todos.length === 0 && <div>Add things to do ...</div>}
      {todos.map(({ text }, index) => (
        <div className="flex items-center gap-2" key={index}>
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="h-4 w-4 rounded border-gray-300 bg-stone-700 text-blue-600 focus:ring-2 focus:ring-blue-500 "
          />
          <label htmlFor="default-checkbox" className="text-sm">
            {text}
          </label>
        </div>
      ))}
      <button
        className="ml-auto w-fit rounded bg-stone-500 px-4 py-2"
        onClick={() => dispatch(addTodo('another todo'))}
      >
        Add todo
      </button>
    </div>
  );
};

export default ToDoList;
