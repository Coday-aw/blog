import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen text-center">
      <div>
        <h1 className="text-5xl p-4">Welcome to my blog</h1>
        <p className=" max-w-[800px] text-center tracking-wider mb-5">
          Here, you'll find a collection of thoughts, insights, and stories that
          span a wide range of topics. Whether you're passionate about travel,
          intrigued by technology, or simply looking for inspiration in everyday
          life, there's something here for everyone. Join me on this journey as
          we explore new ideas, share experiences, and engage in meaningful
          conversations. If you're interested in contributing your own thoughts
          and stories, simply log in to create a post.
        </p>
      </div>
    </main>
  );
}
