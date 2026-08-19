import LogoutButton from "@/components/LogoutButton";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Image from "next/image";

const page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  console.log(session)
  const memberSince = new Date(session.user.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className=" mt-22  py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-sm p-8">

        {/* Top: image + name + email */}
        <div className="flex items-center gap-5 mb-8">
          <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-gray-200 flex shrink-0">
            {session.user.image ? (
              <Image
                src={session.user.image}
                alt={session.user.name}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-2xl font-semibold text-gray-500">
                {session.user.name?.charAt(0).toUpperCase()}
              </div>
            )}
            <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white"></span>
          </div>

          <div>
            <h1 className="text-2xl font-serif font-bold text-gray-900">
              {session.user.name}
            </h1>
            <p className="text-gray-500">{session.user.email}</p>
          </div>
        </div>

        {/* Info grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="border border-gray-200 rounded-xl p-4">
            <p className="text-xs font-semibold tracking-wide text-gray-500 mb-1">
              👤 FULL NAME
            </p>
            <p className="font-medium text-gray-900">{session.user.name}</p>
          </div>

          <div className="border border-gray-200 rounded-xl p-4">
            <p className="text-xs font-semibold tracking-wide text-gray-500 mb-1">
              📧 EMAIL ADDRESS
            </p>
            <p className="font-medium text-gray-900">{session.user.email}</p>
          </div>

          <div className="border border-gray-200 rounded-xl p-4">
            <p className="text-xs font-semibold tracking-wide text-gray-500 mb-1">
              📅 MEMBER SINCE
            </p>
            <p className="font-medium text-orange-500">{memberSince}</p>
          </div>

          <div className="border border-gray-200 rounded-xl p-4">
            <p className="text-xs font-semibold tracking-wide text-gray-500 mb-1">
              🔒 ACCOUNT STATUS
            </p>
            <p className="font-medium text-emerald-500">Active</p>
          </div>
        </div>

        {/* Profile photo URL */}
        {session.user.image && (
          <div className="border border-gray-200 rounded-xl p-4 mb-6">
            <p className="text-xs font-semibold tracking-wide text-gray-500 mb-1">
              🖼️ PROFILE PHOTO URL
            </p>
            <p className="font-medium text-gray-700 truncate">
              {session.user.image}
            </p>
          </div>
        )}

        <LogoutButton />
      </div>
    </div>
  );
};

export default page;