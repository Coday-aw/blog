"use client";

import { useEffect, useState } from "react";
import { db } from "@/firebaseConfig";
import { doc, deleteDoc, getDoc } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function PostDetail({ params }) {
  const [blog, setBlog] = useState({});
  const router = useRouter();

  useEffect(() => {
    const getPostById = async () => {
      const res = await getDoc(doc(db, "blogs", params.id));
      setBlog(res.data());
    };
    getPostById();
  }, []);

  // const handleDelete = async () => {
  //   await deleteDoc(doc(db, "blogs", params.id));

  //   router.push("/posts");
  // };

  return (
    <div className="text-center max-w-[800px] p-3 ">
      <h1 className="text-4xl font-bold capitalize mb-6 ">{blog.title}</h1>
      <p className="">{blog.content}</p>
      <div className="mt-10 flex gap-3 justify-center">
        {/* <Button onClick={handleDelete} variant="destructive">
          Delete Post
        </Button>
        <Button asChild>
          <Link href={`/posts/${params.id}/edit`}>Edit Post</Link>
        </Button> */}
      </div>
    </div>
  );
}
