"use client";
import { usePathname } from "next/navigation"
import Header from ".";

export const HeaderWrapper = () => {
    const pathname = usePathname();

    return (
        <>
            {!pathname.startsWith("/admin") && !pathname.startsWith("/user") && (
				<Header />
			)}

        </>
    );
}