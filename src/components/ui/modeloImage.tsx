import { Image } from 'lucide-react';
import { ClassNameValue } from 'tailwind-merge';

interface Props {
  className?: ClassNameValue;
}

const ModeloImage = ({ className }: Props) => {
  return (
    <div
      className={`bg-foreground text-card w-full grid place-items-center ${className}`}
    >
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image className='group-hover:opacity-0 duration-150' />
    </div>
  );
};

export default ModeloImage;
