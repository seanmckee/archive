import Tiptap from "@/components/Tiptap";
import { UserButton } from "@clerk/nextjs";

export default function Page() {
  return (
    <div>
      <h1>Documents Page</h1>
      <UserButton />
      <Tiptap />
    </div>
  );
}
