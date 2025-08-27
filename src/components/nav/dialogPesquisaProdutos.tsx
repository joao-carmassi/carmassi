'use client';

import { Search } from 'lucide-react';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import { Input } from '../ui/input';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const DialogPesquisaProdutos = () => {
  const [isOpen, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const route = useRouter();

  const handleClick = () => {
    if (inputValue.trim() !== '') {
      setOpen(false);
      route.push(`/pesquisa?q=${inputValue.trim()}`);
    }
  };

  useEffect(() => {
    const openModalShortcut = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener('keydown', openModalShortcut);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleClick();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', openModalShortcut);
      document.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue, route]);

  return (
    <Dialog onOpenChange={setOpen} open={isOpen}>
      <Button
        aria-label='Botão abrir campo pesquisa'
        onClick={() => setOpen(true)}
        variant='outline'
        size='icon'
        className='rounded-full'
      >
        <Search className='h-4 w-4' />
      </Button>
      <DialogContent
        className='!w-full !max-w-full top-0 translate-y-0 h-16 p-3 border-0'
        showCloseButton={false}
      >
        <DialogHeader>
          <DialogTitle hidden>Pesquisar produto</DialogTitle>
          <DialogDescription className='flex items-center h-full w-full max-w-xl mx-auto'>
            <Input
              id='search'
              placeholder='Digite o nome do produto...'
              className='flex-1 h-10'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Button onClick={handleClick} size='sm' className='h-10'>
              <Search className='h-4 w-4' />
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DialogPesquisaProdutos;
