"use client";
import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const Logo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

const navItem = [
  {
    href: "/table",
    label: "Table",
  },
  {
    href: "/list",
    label: "List",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <HeroNavbar className="max-w-[1100px] mx-auto mb-10">
      <NavbarBrand className="px-0">
        <Link className="flex  items-center" href="/table">
          <Logo />
          <p className="font-bold text-inherit items-center">MEMES</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="gap-4" justify="end">
        {navItem.map((item) => (
          <NavbarItem key={item.label}>
            <Link
              className={`text-2xl font-bold ${pathname === item.href ? "text-blue-500 underline" : ""}`}
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </HeroNavbar>
  );
}
