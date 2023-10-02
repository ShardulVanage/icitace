import Image from 'next/image'
import Link from 'next/link'

import { Blockquote } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { Testimonial } from '@/components/Testimonial'

import logoMailSmirk from '@/images/clients/mail-smirk/logo-dark.svg'

import { loadMDXMetadata } from '@/lib/loadMDXMetadata'
import reward from '@/images/reward.png'
import reward2 from '@/images/reward2.png'
import reward3 from '@/images/reward3png.png'
import reward4 from '@/images/reward4.png'
import part1 from '@/images/part1.png'
import part2 from '@/images/part2.png'
import part3 from '@/images/part3.png'
import part4 from '@/images/part4.png'
import part5 from '@/images/part5.png'
import part6 from '@/images/part6.png'

import g1 from '@/images/gallery/g1.jpg'
import g2 from '@/images/gallery/g2.jpg'
import g3 from '@/images/gallery/g3.jpg'





function CaseStudies({ caseStudies }) {
  
  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
        AWARDS & RECOGNITION
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {caseStudies.map((caseStudy) => (
          <FadeIn key={caseStudy.client}>
            <article>
              <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <Image
                      src={caseStudy.logo}
                      alt=""
                      className="h-16 w-16 flex-none"
                      unoptimized
                    />
                    <h3 className="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                      {caseStudy.client}
                    </h3>
                  </div>
              
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                    <Link href={caseStudy.href}>{caseStudy.title}</Link>
                  </p>
                  <div className="mt-6 space-y-6 text-base text-neutral-600">
                    
                      <p >{caseStudy.paragraph}</p>
                   
                  </div>
                  <div className="mt-8 flex">
                    
                  </div>
                  {caseStudy.testimonial && (
                    <Blockquote
                      author={caseStudy.testimonial.author}
                      className="mt-12"
                    >
                      {caseStudy.testimonial.content}
                    </Blockquote>
                  )}
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}

const clients = [
  ['Phobia', part1],
  ['Family Fund', part2],
  ['Unseal', part3],
  ['Mail Smirk', part4],
  ['Home Work', part5],
  ['Green Life', part6],
 
]

function Clients() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          You’re in good company
        </h2>
      </FadeIn>
      <FadeInStagger className="mt-10" faster>
        <Border as={FadeIn} />
        <ul
          role="list"
          className=" items-center grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4"
        >
          {clients.map(([client, logo]) => (
            <li key={client} className="group">
              <FadeIn className="overflow-hidden">
                <Border className="pt-12 group-[&:nth-child(-n+2)]:-mt-px sm:group-[&:nth-child(3)]:-mt-px lg:group-[&:nth-child(4)]:-mt-px">
                  <Image src={logo} alt={client} unoptimized />
                </Border>
              </FadeIn>
            </li>
          ))}
        </ul>
      </FadeInStagger>
    </Container>
  )
}

export const metadata = {
  title: 'Conference',
  description:
    '',
}

export default async function Work() {
  let caseStudies = await loadMDXMetadata('work')
  let caseStudiess = [
    {
      href:"",
      logo:reward,
      client:"Presentation Awards",
      paragraph:"Presentation awards are organized with the intention of valuing one’s contribution to the field and behind the idea of encouraging for more active involvement for the betterment of the industry as a whole.Considering the marks given by the evaluation committee and the Conference Chair, the highest scoring presentations shall be recommended for the following awards. Both Oral presentations and Poster presentations will be evaluated for the awards."
    },
    {
      href:"",
      logo:reward2,
      client:"Best Presentation Award",
      paragraph:"Offered for outstanding presentation considering every presenter of the conference, which is the most inspiring, effective and professional and are delivered through an impactful, authoritative and engaging speaker. Based on the marks given by the evaluation committee for every presentation and Conference Chair’s own reading of the papers, Conference Chair decides which presentation will receive the Best Presentation Award."
    },
    {
      href:"",
      logo:reward3,
      client:"Session’s Best Award",
      paragraph:"Based on the marks given by the evaluation committee including session chair and two evaluation panel members for an every presentation of an each session, Session Chair decides which presentation will receive the Session’s Best Presentation Awards."
    },
    {
      href:"",
      logo:reward4,
      client:"Best Student Presentation Award",
      paragraph:"In order to identify outstanding work by student participants, the Best Student Presentation award will be given for an excellent presentation of the conference, and award winner must be registered as a student and also must be a student. Based on the marks given by the evaluation committee for an every presentation of student presenters of the conference, and Conference Chair’s own reading of the papers, Conference Chair decides which presentation will receive the Best Student Presentation Award."
    }
  ]
  return (
    <>
      <PageIntro
        eyebrow="Conference"
        title="Gallery"
      >
        
      </PageIntro>
      <div className='flex  sm:flex-row flex-col  w-full items-center justify-center  gap-6 mr-28 [&>Image]:rounded-md '>
<Image alt='g1' src={g1} height={100} width={350}/>
<Image alt='g2' src={g2} height={100} width={350}/>
<Image alt='g3'src={g3} height={100} width={350}/>


        </div>

      <CaseStudies caseStudies={caseStudiess} />

      

      <Clients />

      <ContactSection />
    </>
  )
}
