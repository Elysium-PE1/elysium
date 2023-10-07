export const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 z-30 flex justify-between items-center px-[20px] w-full h-[60px] text-[#cbb144] bg-[#010101] border-b-2 border-[#cbb144]">
            <h3 className="text-2xl font-bold tracking-wide">Elysium</h3>

            <ul className="flex gap-[24px]">
                <li className="hover:font-semibold hover:cursor-pointer">Home</li>
                <li className="hover:font-semibold hover:cursor-pointer">About Us</li>
                <li className="hover:font-semibold hover:cursor-pointer">Menu</li>
                <li className="hover:font-semibold hover:cursor-pointer">Our Chefs</li>
                <li className="hover:font-semibold hover:cursor-pointer">Contact Us</li>
            </ul>
        </nav>
    )
}