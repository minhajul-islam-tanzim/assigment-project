import Link from "next/link";
import { usePathname } from "next/navigation";

interface navlinks {
  url: string;
  title: string;
}

interface navProps {
  link: navlinks;
}

const NavLinks = ({ link }: navProps) => {
  const pathName = usePathname();

  return (
    <div>
      <Link
        href={link.url}
        className={`flex  rounded px-2 py-1 hover:border-b transition-all duration-300 ${
          pathName === link.url ? "bg-black text-white" : "font-semibold"
        }`}
      >
        {link.title}
      </Link>
    </div>
  );
};

export default NavLinks;
