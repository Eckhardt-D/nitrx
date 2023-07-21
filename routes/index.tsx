import { h, renderSSR } from "nano-jsx";
import { Base, TodoList } from '../components/index.tsx';

export const todos = ['Walk dog', 'abolish JS', 'Get Rekt'];

export default defineEventHandler(() => {
  return renderSSR(() =>
    <Base>
      <main>
        <header>
          <h1>Nitrx 🔥</h1>
          <form hx-post="/todos" hx-target=".todo-list" _="on submit target.reset()">
            <input type="text" name="todo" placeholder="Car wash 🫧"  />
          </form>
        </header>

        <section className="todo-list--container">
          <h2>Todos</h2>

          <TodoList todos={todos} />
        </section>

        <footer>
          view on <a href="https://github.com/Eckhardt-D/nitrx.git">GitHub</a>
        </footer>
      </main>
    </Base>
  )
});
