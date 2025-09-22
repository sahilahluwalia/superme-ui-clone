import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <Link href="/" className="mt-5 underline text-blue-500">
        Go back to home
      </Link>
    </div>
  );
}
