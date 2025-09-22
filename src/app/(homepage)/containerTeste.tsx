import { Button } from '@/components/ui/button';
import { H2 } from '@/components/ui/h2';
import SectionAnimation from '@/components/ui/sectionAnimation';
import { Variants } from 'motion/react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 20 },
  },
};

const ContainerTeste = () => {
  return (
    <div className='bg-foreground text-card '>
      <SectionAnimation
        variants={fadeUp}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.5 }}
        className='max-w-7xl mx-auto p-6 md:p-12 text-center flex flex-col gap-3 md:gap-6 items-center'
      >
        <H2>Lorem</H2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
          soluta qui provident temporibus officia odit perferendis fugit ratione
          commodi in numquam eligendi id magni veniam aliquam, totam itaque
          voluptatem iste.
        </p>
        <Button className='w-fit ring-offset-foreground' effect={'ringHover'}>
          Lorem
        </Button>
      </SectionAnimation>
    </div>
  );
};

export default ContainerTeste;
