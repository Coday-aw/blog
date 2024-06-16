import { Suspense } from "react";
import PostList from "./_components/postList.jsx";

function PostsPage() {
  return (
    <div className="text-center">
      <p className=" font-bold text-4xl p-5 ">All Blogs</p>
      <Suspense fallback="Loading...">
        <PostList />
      </Suspense>
    </div>
  );
}
export default PostsPage;
