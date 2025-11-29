import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '../ui/chart';
import { Pie, PieChart } from 'recharts';

const config = {
  visitors: {
    label: 'Visitors',
  },
} satisfies ChartConfig;

interface Props {
  data: {
    category: string;
    sales: number;
    fill: string;
  }[];
}

export default function CategoryPieChart({ data }: Props) {
  return (
    <ChartContainer config={config} className='h-72'>
      <PieChart>
        <Pie data={data} nameKey={'category'} dataKey={'sales'}></Pie>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        ></ChartTooltip>
      </PieChart>
    </ChartContainer>
  );
}
