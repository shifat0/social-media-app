"use client";

import React from "react";

export default function LeftSidebar() {
  // Functions for handle scrolling
  const onMouseEnter = (e: React.MouseEvent) =>
    e.currentTarget.classList.add("overflow-y-scroll");
  const onMouseLeave = (e: React.MouseEvent) =>
    e.currentTarget.classList.remove("overflow-y-scroll");

  return (
    <div
      className="w-[22%] h-[calc(100vh-45px)] p-2 bg-primary-foreground fixed overflow-y-hidden scrollbar"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      Left Sidebar
    </div>
  );
}
