// src/pages/posts/PostDetail.tsx
import { useParams } from '@tanstack/react-router';

export default function PostDetail() {
  const { postId } = useParams({ strict: false });
  return (
    <div>
      <h1>Post Detail: {postId}</h1>
    </div>
  );
}
