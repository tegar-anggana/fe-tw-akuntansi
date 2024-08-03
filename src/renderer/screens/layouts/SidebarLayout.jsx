import React from 'react';
import { Outlet } from 'react-router-dom';

export default function SidebarLayout() {
  return (
    <div className="flex flex-col h-full">
      <p>some header...</p>
      <div className="flex bg-base-200 grow">
        <p>some sidebar...</p>
        <div className="pt-2 px-4 w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
