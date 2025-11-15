import { Suspense } from 'react';
import { Outlet } from 'react-router';

export default function AdminLayout() {
  return (
    <div className='flex bg-[#101011] h-svh'>
      <aside className='w-72 h-full'></aside>
      <div className='box-border flex flex-col flex-1 bg-background [&::-webkit-scrollbar-thumb]:bg-muted [&::-webkit-scrollbar-track]:bg-muted-foreground/70 mt-4 px-4 border-border border-in border-t border-l [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:rounded-full rounded-tl-2xl [&::-webkit-scrollbar]:w-2 h-[100svh-10px] overflow-y-auto'>
        {/* header */}
        <main className=''>
          <Suspense fallback={'loading'}>
            <Outlet />
          </Suspense>
        </main>
        {/* footer */}
      </div>
    </div>
  );
}
