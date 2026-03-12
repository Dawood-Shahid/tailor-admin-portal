"use client";
import { LogOutIcon } from "lucide-react";
import React from "react";
import { inter } from "@/fonts";

const onLogout = () => {
  console.log("logout");
  alert("Logged out");
};

export const LogoutButton = () => {
  return (
    <div className="separator-top">
      <div className="h-full flex background-secondary">
        <button
          onClick={onLogout}
          className={`h-12 w-full flex flex-row items-center justify-start mx-2 px-4 gap-3 text-sm font-medium rounded-md transition-colors duration-200 hover:bg-[var(--app-background-hover)] text-secondary ${inter.className}`}
        >
          <LogOutIcon className="w-5 h-5" />
          <p>Logout</p>
        </button>
      </div>
    </div>
  );
};

export default LogoutButton;
