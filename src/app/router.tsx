// src/app/router.tsx
import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router';

import { RootLayout } from './layout/RootLayout';

// pages import
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import PostsIndex from '../pages/posts/Index';
import PostDetail from '../pages/posts/PostDetail';
import SupabaseTestPage from '../pages/supabase/page';

// 루트 라우트
const rootRoute = createRootRoute({
  component: RootLayout,
});

// 개별 라우트
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: Dashboard,
});

const postsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/posts',
  component: PostsIndex,
});

const postDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/posts/$postId',
  component: PostDetail,
});

const supabaseRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/test/supabase',
  component: SupabaseTestPage,
});

// 트리 구성
const routeTree = rootRoute.addChildren([
  indexRoute,
  dashboardRoute,
  postsRoute,
  postDetailRoute,
  supabaseRoute,
]);

const router = createRouter({ routeTree });

export function AppRouter() {
  return <RouterProvider router={router} />;
}
