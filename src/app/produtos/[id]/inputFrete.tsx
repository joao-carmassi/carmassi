'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const InputFrete = () => {
  const [cep, setCep] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [resultado, setResultado] = useState<any>(null);

  const calcularFrete = () => {
    setResultado({
      valor: Math.floor(Math.random() * 20) + 10,
      prazo: Math.floor(Math.random() * 10) + 1,
    });
  };

  return (
    <div>
      {!resultado ? (
        <>
          <label htmlFor='frete'>Calcular frete e prazo</label>
          <div className='flex gap-2'>
            <Input
              id='frete'
              placeholder='Digite seu CEP'
              value={cep}
              onChange={(e) => setCep(e.target.value)}
            />
            <Button onClick={calcularFrete} className='h-9'>
              Calcular
            </Button>
          </div>
        </>
      ) : (
        <p className='text-primary'>
          Valor: {resultado.valor} reais | Prazo: {resultado.prazo} dias
        </p>
      )}
    </div>
  );
};

export default InputFrete;
