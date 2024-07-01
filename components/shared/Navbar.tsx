import Link from "next/link"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"

const Navbar = () => {
    return (
        <header className="w-full border-b">
            <div className="wrapper flex items-center justify-between">
                <Link href="/" className="w-36">
                    <span className="text-4xl font-bold text-black">Blog</span>
                </Link>
                <div className="flex w-32 justify-end gap-3">
                    <nav className="hidden md:flex md:flex-between">
                        <NavItems />
                    </nav>
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}

export default Navbar