import React, { useState } from "react";
import { BellIcon, MenuAlt2Icon } from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/solid";
import Footer from "../Components/Dashboard/Footer";
import Sidebar from "../Components/Dashboard/Sidebar";
import UserMenu from "../Components/Dashboard/UserMenu";

const Authenticated = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarStateChange = (sidebarState) =>
    setSidebarOpen(sidebarState);

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar
        open={sidebarOpen}
        onChange={handleSidebarStateChange}
        {...props}
      />

      {/* Main area */}
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        {/* Header */}
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
          {/* Mobile phone navigation drawer open button */}
          <button
            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* Search, notification, user profile, etc */}
          <div className="flex-1 px-4 flex justify-between">
            {/* Search bar */}
            <div className="flex-1 flex">
              <form className="w-full flex md:ml-0" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                  <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <input
                    id="search-field"
                    className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                    placeholder="Search"
                    type="search"
                    name="search"
                  />
                </div>
              </form>
            </div>

            {/* Notification icon */}
            <div className="ml-4 flex items-center md:ml-6">
              <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Profile dropdown */}
              <UserMenu user={props.auth.user} />
            </div>
          </div>
        </div>

        {/* Main content */}
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          {props.children}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Authenticated;
