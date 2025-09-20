import React, { useState } from "react";
import { Bell, Grid, LayoutGrid, Plus, Search } from "lucide-react";

// ✅ SignIn component (named export)
export function SignIn() {
  return (
    <div>
      <h1>this is signIn page</h1>
     
    </div>
  );
}

// ✅ Button component
function Button({ children, variant = "default", size = "default", className = "", ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    ghost: "hover:bg-gray-100 text-gray-700",
  };
  const sizes = {
    default: "px-4 py-2",
    icon: "p-2",
  };
  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

// ✅ Input component
function Input({ className = "", ...props }) {
  return (
    <input
      className={`w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200 ${className}`}
      {...props}
    />
  );
}

// ✅ Tabs component
function Tabs({ tabs, defaultValue }) {
  const [active, setActive] = useState(defaultValue || tabs[0].value);
  return (
    <div>
      <div className="flex gap-2 border-b">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActive(tab.value)}
            className={`px-4 py-2 text-sm ${
              active === tab.value
                ? "border-b-2 border-blue-600 text-blue-600 font-medium"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}

// ✅ NavItem
function NavItem({ href, icon, children, active }) {
  return (
    <a
      href={href}
      className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${
        active ? "bg-gray-100 text-gray-900" : "text-gray-700 hover:bg-gray-50"
      }`}
    >
      {icon}
      <span>{children}</span>
    </a>
  );
}

// ✅ FolderItem
function FolderItem({ href, children }) {
  return (
    <a
      href={href}
      className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
    >
      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
        />
      </svg>
      <span>{children}</span>
    </a>
  );
}

// ✅ FileCard
function FileCard({ title, metadata, thumbnail }) {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-white">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={thumbnail || "/placeholder.svg"}
          alt={title}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{metadata}</p>
      </div>
    </div>
  );
}

// ✅ Main Component (default export)
export default function FileManager() {
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 border-r bg-white">
        <div className="p-4">
          <h1 className="text-xl font-bold">Showpad</h1>
        </div>
        <nav className="space-y-1 px-2">
          <NavItem href="#" icon={<LayoutGrid className="h-4 w-4" />} active>
            All content
          </NavItem>
          <NavItem
            href="#"
            icon={
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  d="M15 3v18M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            }
          >
            Presentations
          </NavItem>
          <NavItem
            href="#"
            icon={
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2M9 5h6m-3 4v6m-3-3h6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          >
            Analytics
          </NavItem>
          <div className="py-3">
            <div className="px-3 text-xs font-medium uppercase text-gray-500">Collections</div>
            <div className="mt-2">
              <FolderItem href="#">Product Demos</FolderItem>
              <FolderItem href="#">Case Studies</FolderItem>
              <FolderItem href="#">Sales Collateral</FolderItem>
              <FolderItem href="#">Training Materials</FolderItem>
            </div>
          </div>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1">
        <header className="flex items-center justify-between border-b px-6 py-4">
          <div className="w-96">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input type="search" placeholder="Search files..." className="pl-9" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Grid className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <div className="h-8 w-8 overflow-hidden rounded-full">
              <img src="/placeholder.svg" alt="Avatar" className="h-full w-full object-cover" />
            </div>
          </div>
        </header>

        <div className="p-6">
          {/* Action buttons */}
          <div className="mb-6 flex items-center gap-4">
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Create
            </Button>
            <Button variant="outline" className="gap-2">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Upload
            </Button>
            <Button variant="outline" className="gap-2">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Create folder
            </Button>
            <Button variant="outline" className="gap-2">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  d="M12 18.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13zM12 14a2 2 0 100-4 2 2 0 000 4z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Record
            </Button>
            
          </div>

          {/* Tabs */}
          <div className="mb-6">
            <Tabs
              defaultValue="recent"
              tabs={[
                { value: "recent", label: "Recent" },
                { value: "starred", label: "Starred" },
                { value: "shared", label: "Shared" },
              ]}
            />
          </div>

          {/* File cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FileCard
              title="Q4 Sales Deck"
              metadata="Shared folder • 8 presentations"
              thumbnail="/placeholder.svg"
            />
            <FileCard
              title="Product Videos"
              metadata="Shared folder • 5 videos"
              thumbnail="/placeholder.svg"
            />
            <FileCard
              title="ROI Calculator"
              metadata="Shared file • 1 Excel"
              thumbnail="/placeholder.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
