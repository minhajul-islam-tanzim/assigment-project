"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();

  const handleOut = async () => {
    await authClient.signOut();
    router.push("/login");
  };

  return (
    <div>
      <button onClick={handleOut} className="btn btn-primary mt-7">
        Log Out
      </button>
    </div>
  );
};

export default LogoutButton;
