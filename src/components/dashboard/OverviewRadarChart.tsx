import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '../ui/chart';
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from 'recharts';

interface Props {
  data: { metric: string; value: number }[];
}

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'var(--chart-5)',
  },
} satisfies ChartConfig;
export default function OverviewRadarChart({ data }: Props) {
  return (
    <ChartContainer
      config={chartConfig}
      className='mx-auto w-full max-h-[250px] aspect-square'
    >
      <RadarChart data={data}>
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <PolarAngleAxis dataKey='metric' />
        <PolarGrid />
        <Radar dataKey='value' fill='var(--color-desktop)' fillOpacity={0.6} />
      </RadarChart>
    </ChartContainer>
  );
}
