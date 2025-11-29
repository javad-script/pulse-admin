import { memo, type ReactNode } from 'react';
import {
  HiArrowTopRightOnSquare,
  HiChevronUpDown,
  HiOutlineChatBubbleLeftRight,
  HiOutlineClipboardDocumentCheck,
  HiOutlineCog,
  HiOutlineCreditCard,
  HiOutlineHome,
  HiOutlineQuestionMarkCircle,
  HiOutlineShoppingBag,
  HiOutlineUserGroup,
  HiXMark,
} from 'react-icons/hi2';
import { Link, NavLink } from 'react-router';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Separator } from '../ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface SidebarLinksType {
  top: SidebarLinkProps[];
  second: SidebarLinkProps[];
  bottom: SidebarLinkProps[];
}

const sidebarLinks: SidebarLinksType = {
  top: [
    {
      path: '/admin',
      icon: <HiOutlineHome className='size-5' />,
      text: 'home',
    },
    {
      path: '/admin/products',
      icon: <HiOutlineShoppingBag className='size-5' />,
      text: 'products',
    },
    {
      path: '/admin/orders',
      icon: <HiOutlineClipboardDocumentCheck className='size-5' />,
      text: 'orders',
    },
    {
      path: '/admin/users',
      icon: <HiOutlineUserGroup className='size-5' />,
      text: 'users',
    },
  ],
  second: [
    {
      path: '/admin/payments',
      icon: <HiOutlineCreditCard className='size-6' />,
      text: 'payments',
    },
    {
      path: '/admin/feedbacks',
      icon: <HiOutlineChatBubbleLeftRight className='size-6' />,
      text: 'feedbacks',
    },
  ],
  bottom: [
    {
      path: '/admin/settings',
      icon: <HiOutlineCog className='size-6' />,
      text: 'settings',
    },
    {
      path: '/admin/help-center',
      icon: <HiOutlineQuestionMarkCircle className='size-6' />,
      text: 'help center',
    },
  ],
};

function Sidebar() {
  return (
    <aside className='flex flex-col gap-4 px-4 py-4 w-80 h-svh'>
      <div className='flex gap-4 w-full h-16'>
        <Avatar className='size-14'>
          <AvatarImage
            className='object-cover aspect-square'
            src='https://upload.wikimedia.org/wikipedia/en/d/d6/Superman_Man_of_Steel.jpg'
            alt='image profile'
          />
          <AvatarFallback>YP</AvatarFallback>
        </Avatar>
        <div className='flex flex-col'>
          <Link to={'/profile'}>
            <span className='text-lg capitalize'>Javad Mousavian</span>
          </Link>
          <span className='font-medium text-muted-foreground text-xs'>
            {'dev.javad.mousavian@gmail.com'.replace(/@.+$/, '@...')}
          </span>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild className='outline-none'>
            <button className='my-auto ml-auto size-7 cursor-pointer'>
              <HiChevronUpDown className='size-5' />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-full'>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Separator />
      <ul className='space-y-2'>
        {sidebarLinks.top.map((link) => (
          <SidebarLink key={link.path} {...link} />
        ))}
      </ul>
      <Separator />
      <ul className='space-y-2'>
        {sidebarLinks.second.map((link) => (
          <SidebarLink
            key={link.path}
            path={link.path}
            icon={link.icon}
            text={link.text}
          />
        ))}
      </ul>
      <div className='flex flex-col flex-1 justify-end space-y-4'>
        <div className='flex flex-col gap-3 p-4 border border-border rounded-2xl w-full min-h-44'>
          <div className='flex justify-between items-center w-full'>
            <div className='bg-green-600/30 px-2 py-0.5 rounded-md font-semibold text-green-400 capitalize'>
              new
            </div>
            <button className='p-1'>
              <HiXMark className='size-4' />
            </button>
          </div>
          <div className='space-y-3'>
            <strong>Partners affiliate program </strong>
            <p className='text-muted-foreground text-sm leading-relaxed'>
              Run your own affiliate program with zero overhead
            </p>
            <Button variant={'outline'} className='flex items-center'>
              <span className='h-lh text-sm capitalize'>try it out </span>
              <HiArrowTopRightOnSquare />
            </Button>
          </div>
        </div>
        <ul className='space-y-2 w-full'>
          {sidebarLinks.bottom.map((link) => (
            <SidebarLink
              key={link.path}
              path={link.path}
              icon={link.icon}
              text={link.text}
            />
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default memo(Sidebar);

interface SidebarLinkProps {
  path: string;
  icon: ReactNode;
  text: string;
}

function SidebarLink({ path, icon, text }: SidebarLinkProps) {
  const isEnd = path === '/admin';
  return (
    <li>
      <NavLink
        end={isEnd}
        to={path}
        className={({ isActive }) =>
          `w-full flex gap-3 px-2 rounded-md py-2 items-center ${
            isActive
              ? 'bg-active'
              : 'hover:bg-active/50 transition-colors duration-150'
          }`
        }
      >
        {icon}
        <span className='h-lh capitalize'>{text}</span>
      </NavLink>
    </li>
  );
}
