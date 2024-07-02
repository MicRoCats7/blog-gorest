'use client'

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import { Separator } from "../ui/separator"
import NavItems from "./NavItems"
import { useState } from "react"


const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const closeSheet = () => setIsOpen(false);

    return (
        <nav className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger className="align-middle">
                    <Image
                        src="/assets/menu.svg"
                        alt="Menu"
                        width={24}
                        height={24}
                        className="cursor-pointer"
                    />
                </SheetTrigger>
                <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
                    <span className="text-4xl font-bold text-[#2D2D2D]">Blog</span>
                    <Separator className="border border-gray-50" />
                    <NavItems closeSheet={closeSheet} />
                </SheetContent>
            </Sheet>
        </nav>
    )
}

export default MobileNav