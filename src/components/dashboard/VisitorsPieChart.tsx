import { useMemo } from 'react';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '../ui/chart';
import { Label, Pie, PieChart } from 'recharts';

const chartConfig = {
  visitors: {
    label: 'Visitors',
  },
} satisfies ChartConfig;

interface Props {
  data: { browser: string; visitors: number; fill: string }[];
}

export default function VisitorsPieChart({ data }: Props) {
  const totalVisitors = useMemo(() => {
    return data.reduce((acc, curr) => acc + curr.visitors, 0);
  }, [data]);
  return (
    <ChartContainer config={chartConfig} className='mx-auto h-72 aspect-square'>
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent className='capitalize' hideLabel />}
        />
        <Pie
          data={data}
          dataKey='visitors'
          nameKey='browser'
          innerRadius={60}
          strokeWidth={5}
        >
          <Label
            content={({ viewBox }) => {
              if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor='middle'
                    dominantBaseline='middle'
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className='fill-foreground font-bold text-3xl'
                    >
                      {totalVisitors.toLocaleString()}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 24}
                      className='fill-muted-foreground'
                    >
                      Visitors
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </Pie>
      </PieChart>
    </ChartContainer>
  );
}
