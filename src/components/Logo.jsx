import { useId } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import logo from '@/images/logo_03.png'

export function Logomark({ invert = false, filled = false, ...props }) {
  let id = useId()

  return (
    <div></div>
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}) {
  return (
    <Image src={logo} alt='logo' height={110} width={110} />)
}
