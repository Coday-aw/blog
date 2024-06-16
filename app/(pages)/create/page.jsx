"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { addDoc, collection, setDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "@/firebaseConfig";

function CreatePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blogTitle = title.trim();
    const blogContent = content.trim();
    if (!blogTitle || !blogContent) {
      setFormError("Title and content are required");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "blogs"), {
        title,
        content,
      });
      setTitle("");
      setContent("");
      setFormError("");
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Create a new post</h1>
      <form
        onSubmit={handleSubmit}
        className="w-[500px] mt-20 flex flex-col gap-5"
      >
        <div>
          <label htmlFor="title">Title</label>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <p>{formError}</p>
        <Button type="submit">Create</Button>
      </form>
    </div>
  );
}
export default CreatePage;
