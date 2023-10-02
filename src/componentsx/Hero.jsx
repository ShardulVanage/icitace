import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'

export function Hero() {
  return (
    <div className="relative pb-20 pt-10 sm:py-24">
      <div className="absolute inset-x-0 -bottom-14 -top-48 overflow-hidden bg-indigo-50">
        <Image
          className="absolute left-0 top-0 translate-x-[-55%] translate-y-[-10%] -scale-x-100 sm:left-1/2 sm:translate-x-[-98%] sm:translate-y-[-6%] lg:translate-x-[-106%] xl:translate-x-[-122%]"
          src={backgroundImage}
          alt=""
          width={918}
          height={1495}
          priority
          unoptimized
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-5xl lg:px-12">
          <h1 className=" text-4xl font-bold tracking-normal sm:text-6xl ">
            <span className="sr-only">DecepstiConf - </span><span className='text-transparent bg-clip-text bg-gradient-to-bl from-cyan-300 via-blue-500 to-purple-600'>INTERNATIONAL CONFERENCE ON INFORMATION TECHNOLOGY & COMMUNICATION ENGINEERING</span>
          </h1>
          <div className="mt-6 space-y-6  text-2xl tracking-tight text-blue-900 ">
            <p>
            The International conference ICITACE aims to foster collaboration in advancing Information Technology and Communication Engineering, 
            serving as a platform to address challenges in implementing advanced knowledge.
             
            </p>
            <p>
            It welcomes professionals, academics, students, and industry experts to adapt to evolving technologies
            </p>
          </div>
          
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Speakers', '5'],
              ['People Attending', '2,091'],
              ['Venue', <a key='l' href='https://www.google.com/maps/@21.0228148,105.7957637,13z?entry=ttu' className='hover:underline  hover:text-blue-700'>Hacinco Hotel</a>],
              ['Location', 'Vietnam'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-blue-600">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
          <Button href="#" className="mt-10 w-1/2  py-4 items-center flex justify-center  bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500">
            Get your tickets
          </Button>
        </div>
      </Container>
    </div>
  )
}
