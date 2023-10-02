import Image from 'next/image'

import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'
import l1 from '@/images/logos/part1.png'
import l2 from '@/images/logos/part2.png'
import l3 from '@/images/logos/part3.png'
import l4 from '@/images/logos/part4.png'
import l5 from '@/images/logos/part5.png'
import l6 from '@/images/logos/part6.png'



const sponsors = [
  { name: 'Transistor', logo: l1 },
  { name: 'Tuple', logo: l2 },
  { name: 'StaticKit', logo: l3 },
  { name: 'Mirage', logo: l4},
  { name: 'Laravel', logo: l5 },
  { name: 'Laravel', logo: l6 },

 
]

export function Sponsors() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400 sm:text-5xl">
        Our Associates
        </h2>
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center"
            >
              <Image src={sponsor.logo} alt={sponsor.name} unoptimized className='sm:w-[250px]  w-[170px] ' />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
