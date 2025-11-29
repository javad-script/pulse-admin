import type { ReactNode } from 'react';

interface Props {
  icon: ReactNode;
  title: string;
  value: string;
}

export default function FeatureCard({ icon, title, value }: Props) {
  return (
    <div className='flex flex-1 items-center gap-4 p-4 border border-border rounded-lg min-w-44 h-20'>
      <div className='flex justify-center items-center bg-muted-foreground/20 rounded-full size-12 aspect-square'>
        {icon}
      </div>
      <div className=''>
        <span className='block h-lh font-semibold text-muted-foreground text-xs capitalize'>
          {title}
        </span>
        <strong className='font-black tabular-nums text-lg'>{value}</strong>
      </div>
    </div>
  );
}
