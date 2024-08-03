import React from 'react';
import { Outlet } from 'react-router-dom';

export default function HeaderLayout() {
  return (
    <div className='flex flex-col h-full'>
      <div>some header...</div>
      <div className='bg-base-200 grow p-4'>
        <Outlet />
      </div>
    </div>
  );
}
