import {h} from 'nano-jsx';

export const Todo = ({children, ...props}: {children: string}) => {
  return (
    <li className="todo-list--item">
      <p>{children}</p>
    </li>
  )
}