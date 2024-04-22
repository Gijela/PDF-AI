import Link from 'next/link';
import { UserButton, currentUser } from '@clerk/nextjs';
import { User } from '@clerk/nextjs/server';

export default async function Header() {
  const user: User | null = await currentUser();
  const isLoggedIn = !!user;

  return (
    <header className="sticky top-0 z-40 bg-white w-full border-b border-b-slate-200 shadow-sm">
      <div className="h-16 py-4 container mx-auto">
        <nav className="flex justify-between mx-10">
          <Link
            href="/"
            className="hover:text-slate-600 cursor-pointer flex items-center"
          >
            {/* <Logo /> */}
            <span className="text-2xl mb-2 font-medium">PDF AI</span>
          </Link>
          <div className="flex items-center gap-5">
            {isLoggedIn ? (
              <>
                <Link href="/dashboard">PDFs 列表</Link>
                <UserButton afterSignOutUrl="/" />
              </>
            ) : (
              <Link href="/sign-in">登录/注册</Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
