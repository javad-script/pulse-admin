import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '../ui/chart';
import { Area, CartesianGrid, XAxis, AreaChart } from 'recharts';

const Config = {
  desktop: {
    label: 'revenue',
    color: 'var(--chart-1)',
  },
} satisfies ChartConfig;

interface Props<T> {
  data: T[];
}

export default function RevenueAreaChart<T>({ data }: Props<T>) {
  return (
    <ChartContainer config={Config} className='h-72'>
      <AreaChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false}></CartesianGrid>
        <XAxis
          dataKey='month'
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />

        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator='line' />}
        />
        <Area
          dataKey='revenue'
          type='natural'
          fill='var(--color-desktop)'
          fillOpacity={0.4}
          stroke='var(--color-desktop)'
        />
      </AreaChart>
    </ChartContainer>
  );
}
