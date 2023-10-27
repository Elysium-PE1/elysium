import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 z-30 flex justify-between items-center px-[20px] w-full h-[60px] text-[#cbb144] bg-[#010101] border-b-2 border-[#cbb144]">
            <h3 className="text-2xl font-bold tracking-wide">
                <Link href={"/"}>Elysium</Link>
            </h3>

            <UserButton />
        </nav>
    )
}