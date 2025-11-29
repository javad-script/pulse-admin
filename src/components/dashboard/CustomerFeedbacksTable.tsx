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
    id: string;
    customer: string;
    product: string;
    message: string;
    rate: number;
    date: Date;
  }[];
}
export default function CustomerFeedbacksTable({ data }: Props) {
  return (
    <Table>
      <TableHeader className='hover:bg-background'>
        <TableRow className='hover:bg-background'>
          <TableHead>Feedback ID</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Product</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Rate</TableHead>
          <TableHead>Message</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.customer}</TableCell>
            <TableCell>{item.product}</TableCell>
            <TableCell>{item.date.toLocaleString('en-US')}</TableCell>
            <TableCell>{item.rate}</TableCell>
            <TableCell>{item.message}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
