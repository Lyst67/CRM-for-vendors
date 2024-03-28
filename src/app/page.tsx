import Button from '@/app/components/button';
import Link from 'next/link';
import Image from 'next/image';
export default function Page() {
  return (
    <main>
      <div className="flex items-center h-20 bg-[#111827]">
        <Image
          className="mx-auto"
          src="/logo/logo.svg"
          alt="logo"
          width={0}
          height={0}
          style={{ width: '180px', height: 'auto' }}
          priority={true}
        />
      </div>
      <section className=" pt-10 text-center">
        <h1 className="text-3xl font-bold mb-4">Home page</h1>
        <Link className="mr-4" href="/companies">
          <Button>Companies</Button>
        </Link>
        <Link href="/dashboard">
          <Button>Dashboard</Button>
        </Link>
      </section>
    </main>
  );
}
