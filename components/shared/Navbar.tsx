import Link from "next/link"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"

const Navbar = () => {
    return (
        <header className="w-full border-b fixed top-0 z-[99] bg-white">
            <div className="wrapper flex items-center justify-between">
                <Link href="/" className="w-36">
                    <span className="text-4xl font-bold text-black">Blog</span>
                </Link>
                <div className="flex w-32 justify-end gap-3">
                    <nav className="hidden md:flex md:flex-between">
                        <NavItems closeSheet=""/>
                    </nav>
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}

export default Navbar