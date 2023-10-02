import { Container } from '@/components/Container'

import logox from '../../public/Logo_03.png' 
import Image from 'next/image'
export function Footer() {
  return (
    <footer className="py-16">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        {/* <Logo className="h-12 w-auto text-slate-900" /> */}
        <Image src={logox} alt='logo' className='h-14 w-auto text-slate-900'/>
        <p className="mt-6 text-base text-slate-500 md:mt-0">
          Copyright &copy; {new Date().getFullYear()}  CRF Conference. All Rights Reserved.
        </p>
      </Container>
    </footer>
  )
}
