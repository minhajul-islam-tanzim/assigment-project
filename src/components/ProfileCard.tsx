"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ReactNode } from "react";

export type InfoItem = {
  label: string;
  value: string;
  valueClassName?: string;
};

type ProfileCardProps = {
  name: string;
  email: string;
  image?: string | null;
  infoItems: InfoItem[];
  children: ReactNode; // LogoutButton
};

const ProfileCard = ({ name, email, image, infoItems, children }: ProfileCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto bg-white rounded-3xl shadow-sm p-8"
    >
      <ProfileHeader name={name} email={email} image={image} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {infoItems.map((item, index) => (
          <InfoCard key={item.label} {...item} delay={0.2 + index * 0.1} />
        ))}
      </div>

      {image && <ProfilePhotoUrl url={image} delay={0.6} />}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.7 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const ProfileHeader = ({
  name,
  email,
  image,
}: {
  name: string;
  email: string;
  image?: string | null;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, delay: 0.1 }}
    className="flex items-center gap-5 mb-8"
  >
    <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-gray-200 flex shrink-0">
      {image ? (
        <Image src={image} alt={name} fill className="object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-2xl font-semibold text-gray-500">
          {name?.charAt(0).toUpperCase()}
        </div>
      )}
      <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white" />
    </div>

    <div>
      <h1 className="text-2xl font-serif font-bold text-gray-900">{name}</h1>
      <p className="text-gray-500">{email}</p>
    </div>
  </motion.div>
);

const InfoCard = ({
  label,
  value,
  valueClassName = "text-gray-900",
  delay = 0,
}: InfoItem & { delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay }}
    className="border border-gray-200 rounded-xl p-4"
  >
    <p className="text-xs font-semibold tracking-wide text-gray-500 mb-1">
      {label}
    </p>
    <p className={`font-medium ${valueClassName}`}>{value}</p>
  </motion.div>
);

const ProfilePhotoUrl = ({ url, delay = 0 }: { url: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay }}
    className="border border-gray-200 rounded-xl p-4 mb-6"
  >
    <p className="text-xs font-semibold tracking-wide text-gray-500 mb-1">
      🖼️ PROFILE PHOTO URL
    </p>
    <p className="font-medium text-gray-700 truncate">{url}</p>
  </motion.div>
);

export default ProfileCard;