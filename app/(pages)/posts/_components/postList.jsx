"use client";

import { getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "@/firebaseConfig";
import { collection } from "firebase/firestore";
import Link from "next/link.js";

const PostList = async () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      const res = await getDocs(collection(db, "blogs"));
      const blogsArray = [];
      res.forEach((doc) => {
        console.log(doc.data());
        blogsArray.push({ id: doc.id, ...doc.data() });
      });
      setBlogs(blogsArray);
    };
    getBlogs();
  }, []);
  return (
    <div>
      {blogs.map((blog) => (
        <div
          className="p-2 border w-[500px] mb-2 rounded-md font-bold text-xl cursor-pointer hover:bg-gray-200"
          key={blog.id}
        >
          <Link href={`/posts/${blog.id}`}>{blog.title}</Link>
        </div>
      ))}
    </div>
  );
};
export default PostList;
