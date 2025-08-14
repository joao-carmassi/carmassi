import { Image } from 'lucide-react';

const ModeloImage = () => {
  return (
    <div className='bg-gray-800 text-white w-full aspect-square grid place-items-center'>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image className='group-hover:opacity-0 duration-150' />
    </div>
  );
};

export default ModeloImage;
