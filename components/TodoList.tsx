import {h} from 'nano-jsx';
import {Todo} from './Todo.tsx';

export type TodoListInput = {
  todos: string[];
}

export const TodoList = (input: TodoListInput) => {
  return (
    <ol className="todo-list">
      { input.todos.map(todo => <Todo>{todo}</Todo>) }
    </ol>
  )
}