// src/app/layout/RootLayout.tsx
import { Outlet, Link } from '@tanstack/react-router';

export function RootLayout() {
  return (
    <div className="p-6">
      <nav className="flex gap-4 mb-4 border-b pb-2">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/test/supabase">supabase-test</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
