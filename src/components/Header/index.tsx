"use client";

import logoLight from "@/../public/images/logo/logo-light.svg";

import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <>
            <header>
                <div>
                    <div>
                        <Link href={"/"}>
                            <Image src={logoLight} alt="Logo" className="hidden w-full" />
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;