import { z } from 'zod';
import { h, renderSSR } from 'nano-jsx';
import { todos } from './index.tsx';
import { TodoList } from '../components/index.tsx';

const todoCreateSchema = z.object({
  todo: z.string().min(1).max(100),
})

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  
  try {
    const parsed = todoCreateSchema.parse(body);
    todos.unshift(parsed.todo);
    return renderSSR(() => <TodoList todos={todos} />)
  } catch(e) {
    console.log(e)
    throw createError({
      status: 500,
      message: 'Invalid input, todos must be less than 100 characters'
    })
  }
});