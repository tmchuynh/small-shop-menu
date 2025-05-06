"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaBars, FaChevronDown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function NavBar() {
  const pathname = usePathname();

  const navigation = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Team", href: "/team" },
    { name: "Projects", href: "/projects" },
    { name: "Calendar", href: "/calendar" },
  ];

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <Disclosure
      as="nav"
      className="bg-background shadow-sm font-[AlegreyaSansSC]"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex items-center shrink-0">
              <Image
                alt="Your Company"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="w-auto h-8"
                width={32}
                height={32}
              />
            </div>
            <div className="sm:flex items-center sm:space-x-8 hidden sm:ml-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 font-medium text-sm ${
                    isActive(item.href)
                      ? "border-indigo-500 text-gray-900"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <Menu as="a" className="inline-block relative text-left">
                <div>
                  <MenuButton className="inline-flex items-center gap-2 px-1 pt-1 hover:border-gray-300 border-transparent border-b-2 font-medium text-gray-500 text-sm hover:text-gray-700">
                    Options
                    <FaChevronDown
                      aria-hidden="true"
                      className="-mr-1 text-gray-400 size-5"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="right-0 z-10 absolute focus:outline-hidden bg-white data-closed:opacity-0 shadow-lg mt-2 rounded-md ring-1 ring-black/5 w-56 data-closed:transform origin-top-right transition data-enter:duration-100 data-leave:duration-75 data-closed:scale-95 data-enter:ease-out data-leave:ease-in"
                >
                  <div className="py-1">
                    <MenuItem>
                      <a
                        href="#"
                        className="block data-focus:outline-hidden data-focus:bg-gray-100 px-4 py-2 text-gray-700 text-sm data-focus:text-gray-900"
                      >
                        Account settings
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block data-focus:outline-hidden data-focus:bg-gray-100 px-4 py-2 text-gray-700 text-sm data-focus:text-gray-900"
                      >
                        Support
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block data-focus:outline-hidden data-focus:bg-gray-100 px-4 py-2 text-gray-700 text-sm data-focus:text-gray-900"
                      >
                        License
                      </a>
                    </MenuItem>
                    <form action="#" method="POST">
                      <MenuItem>
                        <button
                          type="submit"
                          className="block data-focus:outline-hidden data-focus:bg-gray-100 px-4 py-2 w-full text-gray-700 text-left text-sm data-focus:text-gray-900"
                        >
                          Sign out
                        </button>
                      </MenuItem>
                    </form>
                  </div>
                </MenuItems>
              </Menu>
            </div>
          </div>

          <div className="flex items-center sm:hidden -mr-2">
            {/* Mobile menu button */}
            <DisclosureButton className="group inline-flex relative justify-center items-center focus:outline-hidden hover:bg-gray-100 p-2 rounded-md focus:ring-2 focus:ring-indigo-500 focus:ring-inset text-gray-400 hover:text-gray-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <FaBars
                aria-hidden="true"
                className="block group-data-open:hidden size-6"
              />
              <IoMdClose
                aria-hidden="true"
                className="group-data-open:block hidden size-6"
              />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className={`block py-2 pr-4 pl-3 border-l-4 font-medium text-base ${
                isActive(item.href)
                  ? "bg-indigo-50 border-indigo-500 text-indigo-700"
                  : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
