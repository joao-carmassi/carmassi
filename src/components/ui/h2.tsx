import { ClassValue } from 'clsx';
import { AuroraText } from '../magicui/aurora-text';

export function H2({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: ClassValue;
}) {
  return (
    <h2
      className={`scroll-m-20 text-primary text-3xl md:text-4xl font-semibold tracking-tight first:mt-0 ${className}`}
    >
      <AuroraText
        speed={0.25}
        colors={[
          'oklch(0.55 0.25 300)',
          'oklch(0.55 0.25 280)',
          'oklch(0.55 0.25 320)',
          'oklch(0.60 0.20 310)',
        ]}
      >
        {children}
      </AuroraText>
    </h2>
  );
}
