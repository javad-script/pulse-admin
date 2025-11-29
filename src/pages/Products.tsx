import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';

import { Link } from 'react-router';
import { Checkbox } from '../components/ui/checkbox';
import { Button } from '../components/ui/button';
import { HiEye, HiPencil, HiTrash } from 'react-icons/hi2';
import { HiFilter, HiOutlineTrendingUp } from 'react-icons/hi';

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from '../components/ui/dialog';
import { Badge } from '../components/ui/badge';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogCancel,
} from '../components/ui/alert-dialog';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '../components/ui/hover-card';
import { Separator } from '../components/ui/separator';
import { Input } from '../components/ui/input';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '../components/ui/input-group';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';

export type Payment = {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
};

export type ProductStatusType =
  | 'active'
  | 'draft'
  | 'out_of_stock'
  | 'archived';

interface ProductType {
  id: string;
  name: string;
  stock: number;
  images: string[];
  desc: string;
  status: ProductStatusType;
  category: string;
  details: string;
  price: number;
  createdDate: Date;
  discountPercent: number;
  lastUpdate: Date;
}

const data: ProductType[] = [
  {
    id: 'p-001',
    name: 'Nike Air Max 270',
    stock: 42,
    images: ['https://placehold.co/600x400', 'https://placehold.co/600x400'],
    desc: 'Lightweight running shoes with breathable mesh and Air cushioning.',
    status: 'active',
    category: 'shoes',
    details: 'Color: Black/White | Size range: 40-45 | Material: Mesh + Rubber',
    price: 129.99,
    createdDate: new Date('2024-10-12'),
    discountPercent: 10,
    lastUpdate: new Date('2025-01-05'),
  },

  {
    id: 'p-002',
    name: 'Apple AirPods Pro 2',
    stock: 15,
    images: ['https://placehold.co/600x400', 'https://placehold.co/600x400'],
    desc: 'Noise-cancelling wireless earbuds with improved transparency mode.',
    status: 'active',
    category: 'electronics',
    details: 'Battery: 6 hours | Chip: H2 | Waterproof: IPX4',
    price: 249.0,
    createdDate: new Date('2024-12-01'),
    discountPercent: 0,
    lastUpdate: new Date('2025-01-10'),
  },

  {
    id: 'p-003',
    name: 'Minimalist Office Chair',
    stock: 0,
    images: ['https://placehold.co/600x400', 'https://placehold.co/600x400'],
    desc: 'Ergonomic office chair with lumbar support and adjustable height.',
    status: 'out_of_stock',
    category: 'furniture',
    details: 'Material: Fabric | Weight limit: 120kg | Adjustable armrests',
    price: 189.99,
    createdDate: new Date('2023-08-24'),
    discountPercent: 15,
    lastUpdate: new Date('2024-12-20'),
  },

  {
    id: 'p-004',
    name: 'Hoodie Classic Black',
    stock: 80,
    images: ['https://placehold.co/600x400', 'https://placehold.co/600x400'],
    desc: 'Soft cotton hoodie, perfect for daily casual wear.',
    status: 'draft',
    category: 'clothing',
    details: 'Material: 100% Cotton | Sizes: S-M-L-XL | Color: Black',
    price: 39.99,
    createdDate: new Date('2024-11-15'),
    discountPercent: 5,
    lastUpdate: new Date('2024-11-30'),
  },
];

const STATUS_COLOR: Record<ProductStatusType, string> = {
  out_of_stock: 'bg-red-500',
  draft: 'bg-gray-500',
  active: 'bg-green-500',
  archived: 'bg-yellow-500',
};

export default function Products() {
  return (
    <>
      <div className='flex justify-between items-center'>
        <InputGroup className='w-sm'>
          <InputGroupInput placeholder='Search in Products' />
          <InputGroupAddon>
            <HiFilter />
          </InputGroupAddon>
          <InputGroupAddon align={'inline-end'}>
            <Select defaultValue={'name'}>
              <SelectTrigger className='bg-transparent! border-none! focus:outline-none! focus:ring-transparent! text-muted/70!'>
                <SelectValue placeholder='Filter By'></SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Filters</SelectLabel>
                  <SelectItem value='name'>Name</SelectItem>
                  <SelectItem value='category'>Category</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </InputGroupAddon>
        </InputGroup>
      </div>
      <div className='border border-input rounded-lg overflow-hidden'>
        <Table>
          <TableHeader>
            <TableRow className='hover:bg-background capitalize'>
              <TableHead>
                <Checkbox />
              </TableHead>
              <TableHead>image</TableHead>
              <TableHead>name</TableHead>
              <TableHead>category</TableHead>
              <TableHead>price</TableHead>
              <TableHead>stock</TableHead>
              <TableHead>status</TableHead>
              <TableHead>sales</TableHead>
              <TableHead>action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className='*:hover:bg-active'>
            {data.map((pro) => (
              <TableRow>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <a href={pro.images[0]} target='_blank'>
                    <img
                      src={pro.images[0]}
                      alt={pro.images[0]}
                      className='size-20'
                    />
                  </a>
                </TableCell>
                <TableCell>{pro.name}</TableCell>
                <TableCell>{pro.category}</TableCell>
                <TableCell className='font-bold tabular-nums text-base'>
                  ${pro.price}
                </TableCell>
                <TableCell>
                  <span className='slashed-zero text-bold'>{pro.stock}</span>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={'default'}
                    className={STATUS_COLOR[pro.status]}
                  >
                    {pro.status.replaceAll('_', ' ')}
                  </Badge>
                </TableCell>
                <TableCell className='space-x-1'>
                  <span className=''>500 </span>
                  <HiOutlineTrendingUp className='inline-block my-auto size-5 text-green-500' />
                </TableCell>
                <TableCell>
                  <div className='flex items-center gap-1 my-auto'>
                    <Link to={'/'}>
                      <Button className='size-8' variant={'outline'}>
                        <HiEye />
                      </Button>
                    </Link>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className='size-8' variant={'outline'}>
                          <HiPencil />
                        </Button>
                      </DialogTrigger>
                      <DialogContent></DialogContent>
                      <DialogFooter></DialogFooter>
                    </Dialog>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button className='size-8' variant={'destructive'}>
                          <HiTrash />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                        </AlertDialogHeader>
                        <AlertDialogDescription className='capitalize'>
                          this product will be delete permanently
                        </AlertDialogDescription>
                        <AlertDialogFooter>
                          <AlertDialogCancel asChild>
                            <Button variant={'secondary'}>No</Button>
                          </AlertDialogCancel>
                          <AlertDialogAction asChild>
                            <Button
                              variant={'destructive'}
                              className='text-white'
                            >
                              Sure ,Delete
                            </Button>
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
