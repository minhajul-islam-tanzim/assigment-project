import AllBooksClient from "@/components/AllBooksClient";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-2xl">Loading...</div>}>
      <AllBooksClient />
    </Suspense>
  );
}