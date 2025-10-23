import { useState, useEffect } from 'react';
import supabase from '../../shared/supabase';

type Todo = {
  id: number;
  title: string;
  is_complete: boolean;
};

function SupabaseTestPage() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    async function getTodos() {
      const { data, error } = await supabase
        .from('todos')
        .select('*');

      if (error) {
        console.error('❌ Supabase error:', error.message);
        return;
      }

      if (data) {
        console.log(data);
        setTodos(data);
      }
    }

    getTodos();
  }, []);

  return (
    <div>
      <h1 className="text-xl font-semibold">
        ✅ Supabase Todos
      </h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} {todo.is_complete ? '✅' : '🕓'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SupabaseTestPage;
