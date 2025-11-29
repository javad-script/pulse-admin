import { Link } from 'react-router';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';

interface Props {
  data: {
    orderId: string;
    customerName: string;
    customerId: string;
    products: { name: string; id: string }[];
    price: number;
    date: Date;
    status: 'paid' | 'canceled';
  }[];
}

export default function LastOrdersTable({ data }: Props) {
  return (
    <Table>
      <TableHeader className='hover:bg-background'>
        <TableRow className='hover:bg-background'>
          <TableHead>Order ID</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Products</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.orderId}>
            <TableCell>{item.orderId}</TableCell>
            <TableCell>
              <Link to={`/profile/${item.customerId}`}>
                <span className='underline'>{item.customerName}</span>
              </Link>
            </TableCell>
            <TableCell>
              {item.products.map((product) => (
                <span className='underline'>
                  <Link to={`/product/${product.id}`}>{product.name}</Link>
                </span>
              ))}
            </TableCell>
            <TableCell>{item.price}</TableCell>
            <TableCell>{item.date.toLocaleString('en-US')}</TableCell>
            <TableCell>{item.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
