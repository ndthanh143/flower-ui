'use client';

import { DetailedHTMLProps, DetailsHTMLAttributes, PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

interface IModalProps
  extends PropsWithChildren<DetailedHTMLProps<DetailsHTMLAttributes<HTMLDivElement>, HTMLDivElement>> {}

export function Modal({ children, ...props }: IModalProps) {
  const backdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modal = {
    hidden: {
      y: '100vh', // Changed to slide out downwards on close
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      y: '0',
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      exit='hidden'
      variants={backdrop}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className='fixed inset-0 z-10 flex justify-center items-center'
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
    >
      <motion.div
        className='bg-white rounded-xl overflow-hidden'
        variants={modal}
        style={{ maxWidth: '800px', maxHeight: '700px', width: '90%', height: '90%', margin: '0.5rem' }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
