import LogoutButton from "@/components/LogoutButton";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import ProfileCard, { InfoItem } from "@/components/ProfileCard";

const formatMemberSince = (date: string | Date) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const ProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  const { user } = session;
  const memberSince = formatMemberSince(user.createdAt);

  const infoItems: InfoItem[] = [
    { label: "👤 FULL NAME", value: user.name },
    { label: "📧 EMAIL ADDRESS", value: user.email },
    {
      label: "📅 MEMBER SINCE",
      value: memberSince,
      valueClassName: "text-orange-500",
    },
    {
      label: "🔒 ACCOUNT STATUS",
      value: "Active",
      valueClassName: "text-emerald-500",
    },
  ];

  return (
    <div className="mt-22 py-12 px-4">
      <ProfileCard
        name={user.name}
        email={user.email}
        image={user.image}
        infoItems={infoItems}
      >
        <LogoutButton />
      </ProfileCard>
    </div>
  );
};

export default ProfilePage;