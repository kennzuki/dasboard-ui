import Link from 'next/link';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import Image from 'next/image';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from '@/components/ui/dropdown-menu';

const Navbar = () => {
  return (
    <div className='bg-primary dark:bg-slate-700 py-2 px-5 text-white flex justify-between'>
      <Link href='/'>
        <h1 className='text-3xl font-bold'>Ken Dash-ui</h1>
      </Link>
      <Avatar>
        <AvatarImage src='https://github.com/kennzuki' alt-='@shadcn image' />
        <AvatarFallback className=' text-black'>BT</AvatarFallback>
      </Avatar>
      <DropdownMenu>
          <DropdownMenuTrigger className='focus:outline-none'>
            <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
              <AvatarFallback className='text-black'>BT</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href='/profile'>Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href='/auth'>Logout</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
    </div>
  );
};

export default Navbar;
