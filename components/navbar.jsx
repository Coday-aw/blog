import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { PiGoogleDriveLogo } from "react-icons/pi";

const Navbar = () => {
  return (
    <nav className="flex justify-between border-b p-5">
      <div>
        <PiGoogleDriveLogo className="text-5xl" />
      </div>
      <div className="flex gap-5 items-center justify-center">
        <Link href="/">Home</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/create">Create post</Link>
        <UserButton />
      </div>
    </nav>
  );
};
export default Navbar;
