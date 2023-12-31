import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Pen } from "lucide-react";
import { UserButton, SignInButton, SignUpButton, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();
  if (userId) {
    redirect("/documents");
  }

  return (
    <main className="flex min-2-screen flex-col items-center justify-between p-24 gap-4">
      <h3 className="">Welcome to Archive</h3>
      <h1 className="text-4xl font-bold p-3">
        Your Collaborative Document Platform
      </h1>
      <div className="flex gap-x-2">
        <SignUpButton afterSignInUrl="/documents" afterSignUpUrl="/documents">
          <Button>
            <Pen className="mr-2 h-4 w-4" />
            Get Started
          </Button>
        </SignUpButton>

        <SignInButton>
          <Button variant="outline">Sign In</Button>
        </SignInButton>
      </div>
    </main>
  );
}
