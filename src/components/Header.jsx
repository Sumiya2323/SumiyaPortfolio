"use client";
import { useRouter } from "next/navigation";
const Header = () => {
  const router = useRouter();
  return (
    <div className="flex md:justify-end justify-center py-2 px-10">
      <button
        className="text-fuchsia-500 border border-fuchsia-500 px-6 py-3 rounded-md hover:bg-fuchsia-900 transition cursor-pointer"
        onClick={() => router.push("/contact")}
      >
        Contact Me
      </button>
    </div>
  );
};
export default Header;
