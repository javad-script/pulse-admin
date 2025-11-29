import { HiChartBar } from 'react-icons/hi2';

import RevenueAreaChart from '../components/dashboard/RevenueAreaChart';
import VisitorsPieChart from '../components/dashboard/VisitorsPieChart';
import CategoryPieChart from '../components/dashboard/CategoryPieChart';
import LastOrdersTable from '../components/dashboard/LastOrdersTable';
import CustomerFeedbacksTable from '../components/dashboard/CustomerFeedbacksTable';
import FeatureCard from '../components/dashboard/FeatureCard';
import OverViewRadarChart from '../components/dashboard/OverviewRadarChart';

const revenueData = [
  { month: 'jan', revenue: 620 },
  { month: 'agu', revenue: 122 },
  { month: 'may', revenue: 182 },
  { month: 'jun', revenue: 512 },
  { month: 'feb', revenue: 220 },
  { month: 'jul', revenue: 55 },
];
const visitorsData = [
  { browser: 'chrome', visitors: 275, fill: 'var(--color-chart-1)' },
  { browser: 'safari', visitors: 200, fill: 'var(--color-chart-2)' },
  { browser: 'firefox', visitors: 287, fill: 'var(--color-chart-3)' },
  { browser: 'edge', visitors: 173, fill: 'var(--color-chart-4)' },
  { browser: 'brave', visitors: 365, fill: '#AF659F' },
  { browser: 'other', visitors: 190, fill: 'var(--color-chart-5)' },
];

const categoryData = [
  { category: 'monitor', sales: 275, fill: 'var(--color-chart-1)' },
  { category: 'laptop', sales: 200, fill: 'var(--color-chart-2)' },
  { category: 'mobile', sales: 287, fill: 'var(--color-chart-3)' },
  { category: 'watch', sales: 173, fill: 'var(--color-chart-4)' },
  { category: 'pc', sales: 190, fill: 'var(--color-chart-5)' },
];

interface OrderType {
  orderId: string;
  customerName: string;
  customerId: string;
  products: { name: string; id: string }[];
  price: number;
  date: Date;
  status: 'paid' | 'canceled';
}

const lastOrdersData: OrderType[] = [
  {
    orderId: 'ORD-221235',
    customerName: 'Djawad',
    customerId: 'xncv6b9a213',
    products: [{ name: 'smart watch', id: 'asdfi264dgfh465' }],
    price: 9250000,
    date: new Date('2025/03/05'),
    status: 'paid',
  },
  {
    orderId: 'ORD-221235',
    customerName: 'Djawad',
    customerId: 'xncv6b9a213',
    products: [{ name: 'smart watch', id: 'asdfi264dgfh465' }],
    price: 9250000,
    date: new Date('2025/03/05'),
    status: 'paid',
  },
  {
    orderId: 'ORD-221235',
    customerName: 'Djawad',
    customerId: 'xncv6b9a213',
    products: [{ name: 'smart watch', id: 'asdfi264dgfh465' }],
    price: 9250000,
    date: new Date('2025/03/05'),
    status: 'paid',
  },
  {
    orderId: 'ORD-221235',
    customerName: 'Djawad',
    customerId: 'xncv6b9a213',
    products: [{ name: 'smart watch', id: 'asdfi264dgfh465' }],
    price: 9250000,
    date: new Date('2025/03/05'),
    status: 'paid',
  },
];

const OverviewData = [
  {
    metric: 'Sales Performance',
    value: 78,
  },
  {
    metric: 'Website Traffic',
    value: 65,
  },
  {
    metric: 'Customer Satisfaction',
    value: 84,
  },
  {
    metric: 'Support Quality',
    value: 72,
  },
  {
    metric: 'Delivery Speed',
    value: 90,
  },
  {
    metric: 'Inventory Health',
    value: 55,
  },
];

const customerFeedBackData = [
  {
    id: 'FID-jh25hj234',
    customer: 'Djawad',
    product: 'Smart Watch',
    message: 'this is amazing',
    rate: 4.2,
    date: new Date('2025/2/3'),
  },
  {
    id: 'FID-jh25hj234',
    customer: 'Djawad',
    product: 'Smart Watch',
    message: 'this is amazing',
    rate: 4.2,
    date: new Date('2025/2/3'),
  },
  {
    id: 'FID-jh25hj234',
    customer: 'Djawad',
    product: 'Smart Watch',
    message: 'this is amazing',
    rate: 4.2,
    date: new Date('2025/2/3'),
  },
  {
    id: 'FID-jh25hj234',
    customer: 'Djawad',
    product: 'Smart Watch',
    message: 'this is amazing',
    rate: 4.2,
    date: new Date('2025/2/3'),
  },
  {
    id: 'FID-jh25hj234',
    customer: 'Djawad',
    product: 'Smart Watch',
    message: 'this is amazing',
    rate: 4.2,
    date: new Date('2025/2/3'),
  },
];

export default function Dashboard() {
  return (
    <div className='gap-4 grid grid-cols-6'>
      {Array.from({ length: 6 }).map((_, index) => (
        <FeatureCard
          key={index}
          icon={<HiChartBar />}
          title='earning'
          value='$350'
        />
      ))}

      <div className='flex flex-col gap-4 col-span-4 p-4 border border-border rounded-lg'>
        <span className='font-bold text-lg'>Revenue</span>
        <RevenueAreaChart data={revenueData} />
      </div>
      <div className='box-border flex flex-col justify-between items-center col-span-2 col-start-5 p-4 border border-border rounded-lg'>
        <div className='w-full'>
          <span className='font-bold text-lg'>Visitors</span>
        </div>
        <VisitorsPieChart data={visitorsData} />
        <span className='text-muted-foreground'>visitors (last 30 days)</span>
      </div>
      <div className='flex flex-col justify-between items-center col-span-2 col-start-1 row-start-3 p-4 border border-border rounded-lg'>
        <div className='w-full'>
          <span className='font-bold text-lg'>Categories</span>
        </div>
        <CategoryPieChart data={categoryData} />
        <span className='text-muted-foreground'>Categories (last 30 days)</span>
      </div>
      <div className='col-span-4 col-start-3 row-start-3 p-4 border border-border rounded-lg'>
        <span className='font-bold text-lg'>Last Orders</span>
        <LastOrdersTable data={lastOrdersData} />
      </div>
      <div className='col-span-4 row-start-4 p-4 border border-border rounded-lg'>
        <span className='font-bold text-lg'>Customer Feedbacks</span>
        <CustomerFeedbacksTable data={customerFeedBackData} />
      </div>
      <div className='col-span-2 col-start-5 row-start-4 p-4 border border-border rounded-lg'>
        <span className='font-bold text-lg'>Overview</span>
        <OverViewRadarChart data={OverviewData} />
      </div>
    </div>
  );
}
