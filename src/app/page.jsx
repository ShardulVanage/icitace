import Image from 'next/image'
import Link from 'next/link'

import { Header } from '@/componentsx/Header'
import { Hero } from '@/componentsx/Hero'
import { Newsletter } from '@/componentsx/Newsletter'
import { Schedule } from '@/componentsx/Schedule'
import { Speakers } from '@/componentsx/Speakers'
import { Sponsors } from '@/componentsx/Sponsors'
import ImpDate from '@/componentsx/ImpDate'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
// import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
// import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
// import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
// import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
// import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
// import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
// import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
// import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
// import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import part1 from '@/images/crf/client/part1.png'
import part2 from '@/images/crf/client/part2.png'
import part3 from '@/images/crf/client/part3.png'
import part4 from '@/images/crf/client/part4.png'
import part5 from '@/images/crf/client/part5.png'
import meet from '@/images/meeting.jpg'
import { loadMDXMetadata } from '@/lib/loadMDXMetadata'

const clients = [
  ['Phobia', part1],
  ['Family Fund', part2],
  ['Unseal', part3],
  ['Mail Smirk', part4],
  ['Home Work', part5],

]
const conference = [
  {
    id: 1,
    image: meet,
    date: "22 -23 aug ,2023",
    title: "MEET",
    description: "International conference on Management and Social Sciences",
    link: "https://icmssc.com/oct-23/",
    alt: 'img'

  },
  {
    id: 2,
    image: meet,
    date: "22 -23 aug ,2023",
    title: "MEET",
    description: "International conference on Management and Social Sciences",
    link: "https://icmssc.com/oct-23/",
    alt: 'img'

  },
  {
    id: 3,
    image: meet,
    date: "22 -23 aug ,2023",
    title: "MEET",
    description: "International conference on Management and Social Sciences",
    link: "https://icmssc.com/oct-23/",
    alt: 'img'

  },

]
function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-gradient-to-br from-sky-950 via-indigo-950 to-red-950 py-16 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We’ve worked with hundreds of amazing people
          </h2>npm run dev

          <div className="h-px flex-auto bg-white" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4 items-center drop-shadow-2xl"
          >
            {clients.map(([client, logo]) => (
              <li key={client} className=' '>
                <FadeIn>
                  <Image src={logo} alt={client} height={150} width={150} unoptimized className=' grayscale hover:grayscale-0  ' />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies() {
  return (
    <>
      <SectionIntro
        title="Upcoming conference"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Open access e-publication journal library, encompasses all streams of study
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3 ">
          {conference.map((caseStudy) => (
            <FadeIn key={caseStudy.id} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.link}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image

                      src={caseStudy.image}
                      alt={caseStudy.alt}
                      className="h-48 w-full rounded-md"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <span>{caseStudy.date}</span>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="we are dedicated to provide an outstanding platform for leading institutions, academicians and researchers."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          CRF offers a one stop solutions for academicians from different parts of to aid their research
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Conferences & Webinars">

              An academic International conference begins with inclusion of most brilliant mind and a world class platform.
              We at CRF Conferences know that very well due to the vast experience and history of events across the globe.
              While every step of organizing and managing an event is important,
              we believe in collaboration and partnering with likeminded institutions and individuals.
              We try to include all streams of academic conference under one banner
            </ListItem>
            <ListItem title="Journals">
              Open access e-publication CRF journal collections includes all streams of study in the domain of Science, Engineering,
              Social Science, Management,
              Education pioneering a state of art publication unit capturing the dialogue between academic and industrial research.
            </ListItem>
            <ListItem title="Publications">
              CRF is creating a transparent space for publication in various scope of studies and research. Today we need many forms of publication to support our research,
              these can be Articles, Books, Journals, Archives, Conference papers, Free research resources, Market research, Newspapers, Patents, etc.
              CRF Publication services clubs all the requirement for our members to get access to Digital space of multidimensional open access program.
            </ListItem>
            <ListItem title="Language Support">
              Publication at International platform require a clear understanding of your research work penned down in a simple and effective script, also in the most acceptable language. Publication in a reputed Journal/Publisher require to go through various parameter considering Research,
              Technical/Scientific aspect and language used.
            </ListItem>
            <ListItem title="Plagiarism check">
              Research is a wide field and millions of researchers are joining each day. Following the trends, sometimes people lead to duplication of work. To help fellow researchers we have created this program,
              which will help them to track the plagiarism score their research further our team can mentor them to have a desirable research article.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'We are developer studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadMDXMetadata('work')).slice(0, 3)

  return (
    <>
    
      <Header />
      <main>
        <Hero />
        <Speakers />
        <Schedule />
        <ImpDate/>
        <Sponsors />
        <Newsletter />
      </main>
      
      {/* <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Empowering Research, Innovation and Association for a better tomorrow.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">

            We strive create an environment that encourages knowledge scalability
            and cater to the requirement of our associated members by providing conference and journals publication services.
          </p>
        </FadeIn>
      </Container>

      <Clients />
      <Services />


      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40 "
        client={{ name: '', logo: part4 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in v

      </Testimonial>

      <CaseStudies />

      <ContactSection /> */}
    </>
  )
}
