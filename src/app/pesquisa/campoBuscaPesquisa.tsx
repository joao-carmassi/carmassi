'use client';

import InputBuscaProduto from '@/components/ui/inputBuscaProduto';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const CampoBuscaPesquisa = ({ q }: { q: string | undefined | null }) => {
  const [inputValue, setInputValue] = useState(q || '');
  const route = useRouter();

  const handleClick = () => {
    if (inputValue.trim() !== '') {
      route.push(`/pesquisa?q=${inputValue.trim()}`);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleClick();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue, route]);

  return (
    <InputBuscaProduto
      className='my-3'
      handleClick={handleClick}
      inputValue={inputValue}
      setInputValue={setInputValue}
    />
  );
};

export default CampoBuscaPesquisa;
