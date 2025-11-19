import { Link, useLocation } from 'react-router';
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '../ui/breadcrumb';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '../ui/input-group';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { Fragment } from 'react/jsx-runtime';
import { useEffect, useState } from 'react';
import normalizePath from '../../lib/normalize-path';

export default function Header() {
  const location = useLocation();
  const [breadcrumbItems, setBreadcrumbItems] = useState<string[]>([]);
  useEffect(() => {
    setBreadcrumbItems(normalizePath(location.pathname));
  }, [location.pathname]);

  if (breadcrumbItems.length <= 0) {
    return null;
  }
  return (
    <header className='top-0 left-0 sticky justify-between items-center grid grid-cols-3 grid-rows-1 bg-background w-full h-16'>
      <div className='flex flex-col justify-center items-start'>
        <h2 className='font-medium text-foreground/80 text-lg capitalize leading-relaxed'>
          {breadcrumbItems[1] || 'dashboard'}
        </h2>

        <HeaderBreadcrumb items={breadcrumbItems} />
      </div>
      <div>
        <InputGroup className='mx-auto min-w-xs max-w-sm'>
          <InputGroupInput placeholder='Search...' />
          <InputGroupAddon>
            <HiMagnifyingGlass />
          </InputGroupAddon>
          <InputGroupAddon align={'inline-end'}>12 results</InputGroupAddon>
        </InputGroup>
      </div>
    </header>
  );
}

function HeaderBreadcrumb({ items }: { items: string[] }) {
  return (
    <Breadcrumb>
      <BreadcrumbList className='flex items-start h-6 capitalize'>
        {items.length <= 3 ? (
          items.map((item, index) => (
            <Fragment key={`${item}-${index}`}>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link
                    to={`/${items
                      .slice(0, index + 1)
                      .join('/')
                      .replace('dashboard', 'admin')}`}
                  >
                    {item}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>

              {index < items.length - 1 && <BreadcrumbSeparator />}
            </Fragment>
          ))
        ) : (
          <>
            {/* first item */}
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to={`/${items[0] === 'dashboard' ? 'admin' : items[0]}`}>
                  {items[0]}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            {/* ellipsis */}
            <BreadcrumbEllipsis className='h-6' />

            <BreadcrumbSeparator />

            {/* last item */}
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to={`/${items.join('/').replace('dashboard', 'admin')}`}>
                  {items[items.length - 1]}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
