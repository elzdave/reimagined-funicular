import React, { Fragment } from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import { Dialog, Transition, Disclosure } from "@headlessui/react";
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { classNames } from "../../utils";

const Sidebar = (props) => {
  /** props and states area */
  const open = props.open;
  const onChange = props.onChange;
  const handleSidebarState = (sidebarState) => onChange(sidebarState);

  const isActiveMenu = (current, target) => current === target;

  /** Navigation area. Put your menu here */
  const navigation = [
    {
      name: "Dashboard",
      icon: HomeIcon,
      current: isActiveMenu(props.currentMenu, "Dashboard"),
      href: route("dashboard"),
    },
    {
      name: "Team",
      icon: UsersIcon,
      current: isActiveMenu(props.currentMenu, "Team"),
      children: [
        { name: "Overview", href: "#" },
        { name: "Members", href: "#" },
        { name: "Calendar", href: "#" },
        { name: "Settings", href: "#" },
      ],
    },
    {
      name: "Projects",
      icon: FolderIcon,
      current: isActiveMenu(props.currentMenu, "Projects"),
      children: [
        { name: "Overview", href: route("project.index") },
        { name: "Members", href: "#" },
        { name: "Calendar", href: "#" },
        { name: "Settings", href: "#" },
      ],
    },
    {
      name: "Calendar",
      icon: CalendarIcon,
      current: isActiveMenu(props.currentMenu, "Calendar"),
      children: [
        { name: "Overview", href: "#" },
        { name: "Members", href: "#" },
        { name: "Calendar", href: "#" },
        { name: "Settings", href: "#" },
      ],
    },
    {
      name: "Documents",
      icon: InboxIcon,
      current: isActiveMenu(props.currentMenu, "Documents"),
      children: [
        { name: "Overview", href: "#" },
        { name: "Members", href: "#" },
        { name: "Calendar", href: "#" },
        { name: "Settings", href: "#" },
      ],
    },
    {
      name: "Reports",
      icon: ChartBarIcon,
      current: isActiveMenu(props.currentMenu, "Reports"),
      children: [
        { name: "Overview", href: "#" },
        { name: "Members", href: "#" },
        { name: "Calendar", href: "#" },
        { name: "Settings", href: "#" },
      ],
    },
  ];

  /** Internal sidebar components */
  const CompanyLogo = (props) => {
    return (
      <img
        className="h-8 w-auto"
        src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
        alt="Workflow"
      />
    );
  };

  const SidebarItem = (props) => {
    const Icon = props.icon;

    return (
      <InertiaLink
        href={props.href}
        method="get"
        className={classNames(
          props.current
            ? "bg-gradient-to-tr from-purple-500 to-purple-700 text-white"
            : "bg-white text-gray-600 hover:bg-purple-50 hover:text-gray-900",
          "group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md"
        )}
      >
        <Icon
          className={classNames(
            props.current
              ? "text-white"
              : "text-gray-400 group-hover:text-gray-500",
            "mr-3 flex-shrink-0 h-6 w-6"
          )}
          aria-hidden="true"
        />
        {props.name}
      </InertiaLink>
    );
  };

  const SidebarItemDisclosure = (props) => {
    const Icon = props.icon;

    return (
      /** We use Disclosure to control the open state of the children's panel */
      <Disclosure as="div" className="space-y-1">
        {({ open }) => (
          <>
            <Disclosure.Button
              className={classNames(
                props.current
                  ? "bg-gradient-to-tr from-purple-500 to-purple-700 text-white"
                  : "bg-white text-gray-600 hover:bg-purple-50 hover:text-gray-900",
                "group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              )}
            >
              <Icon
                className={classNames(
                  props.current
                    ? "text-white"
                    : "text-gray-400 group-hover:text-gray-500",
                  "mr-3 flex-shrink-0 h-6 w-6"
                )}
                aria-hidden="true"
              />
              <span className="flex-1">{props.name}</span>
              <ChevronRightIcon
                className={classNames(
                  open ? "text-gray-400 rotate-90" : "text-gray-300",
                  "ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150"
                )}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="space-y-1">
              {props.children.map((subItem) => (
                <InertiaLink
                  key={subItem.name}
                  href={subItem.href}
                  method="get"
                  className="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-purple-50"
                >
                  {subItem.name}
                </InertiaLink>
              ))}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    );
  };

  const SidebarMenu = (props) => {
    return (
      <nav {...props} aria-label="Sidebar">
        {navigation.map((item) =>
          !item.children ? (
            <SidebarItem key={item.name} {...item} />
          ) : (
            <SidebarItemDisclosure key={item.name} {...item} />
          )
        )}
      </nav>
    );
  };
  /** Internal sidebar components */

  return (
    <>
      {/* Navigation drawer for mobile screen */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 flex z-40 md:hidden"
          open={open}
          onClose={handleSidebarState}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => handleSidebarState(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-shrink-0 flex items-center px-4">
                <CompanyLogo />
              </div>
              <div className="mt-5 flex-1 h-0 overflow-y-auto">
                <SidebarMenu className="px-2 space-y-1" />
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <CompanyLogo />
            </div>
            <div className="mt-5 flex-grow flex flex-col">
              <SidebarMenu className="flex-1 px-2 bg-white space-y-1" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
