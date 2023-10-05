import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'

import c1 from '@/images/committee/c1.jpg'
import c2 from '@/images/committee/c2.jpg'
import c3 from '@/images/committee/c3.jpg'
import c4 from '@/images/committee/c4.jpg'
import c5 from '@/images/committee/c5.jpg'
import c6 from '@/images/committee/c6.jpg'
import c7 from '@/images/committee/c7.jpg'
import c8 from '@/images/committee/c8.jpg'
import c9 from '@/images/committee/c9.jpg'
import c10 from '@/images/committee/c19.jpg'
import c11 from '@/images/committee/c11.jpg'
import c12 from '@/images/committee/c12.jpg'
import c13 from '@/images/committee/c13.jpg'
import c14 from '@/images/committee/c14.jpg'
import c15 from '@/images/committee/c15.png'
import c16 from '@/images/committee/c16.jpg'
import c17 from '@/images/committee/c17.jpg'
import c18 from '@/images/committee/c18.jpg'
import c19 from '@/images/committee/c19.jpg'
import c20 from '@/images/committee/c20.jpg'
import c21 from '@/images/committee/c21.jpg'
import c22 from '@/images/committee/c22.jpg'
import c23 from '@/images/committee/c23.jpg'
import Image from 'next/image'


function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}


function Committee() {
  const people = [
    {
      name: 'ENGR. JOSE MARIE B. DIPAY, PCpE',
    
      role: 'RESEARCH MANAGEMENT CLUSTER COORDINATOR FOR TECHNOLOGY PROGRAMS',
      description:"RESEARCH MANAGEMENT OFFICE, INSTITUTE OF TECHNOLOGY, POLYTECHNIC UNIVERSITY OF THE PHILIPPINES",

      imageUrl: c1,
    },{
      name: 'JAREK BOILO T. CABAUTAN',
      role: 'CEO and Founder',
      description:"INFORMATION TECHNOLOGY CONSORTIUM OF THE PHILIPPINES",
      imageUrl: c2,
     },{
      name: 'DR. MOHAMMAD KAMRUL HASAN',
      role: 'SENIOR LECTURE',
      description:"NETWORK AND COMMUNICATION TECHNOLOGY RESEARCH CLUSTER, CENTER FOR CYBER SECURITY, UNIVERSITI KEBANGSAANNETWORK AND COMMUNICATION TECHNOLOGY RESEARCH MALAYS",
      imageUrl: c3,
    },
    {
      name: 'ISIDRO L. DURAN',
      role: 'Professor',
      description:"Agoo,2504 La Union Philippines",
      imageUrl:
      c4,  
      },
      {
      name: 'Phan Cong Vinh',
      role: 'Vice Dean',
      description:"Faculty of Information Technology Nguyen Tat Thanh University Vietnam",
      imageUrl:
      c5,    },{
      name: 'Dr. Ibrahim Sameer',
      role: 'Part Time Lecturer',
      description:"MAPS College Republic of Maldives ",
      imageUrl:
      c6,    },{
      name: 'RICHARD N. MONREAL, DIT',
      role: 'Associate Professor',
      description:"Trinity University of Asia Quezon City Philippines",
      imageUrl:
      c7,    },{
      name: 'Dr.Ryan Soriente Evangelista',
      role: 'Professorial Chair holder in Science, Technology, and Engineering',
      description:"Polytechnic University of the Philippines ",
      imageUrl:
c8,    },{
      name: 'S Rahul',
      role: 'Assistant Professor',
      description:"KG Reddy College of Engineering and Technology  India",
      imageUrl:
c9,    },{
      name: ' PROF. TS. DR. AINUDDIN WAHID BIN ABDUL WAHAB',
      role: 'Professor',
      description:"Deputy Dean of Research Universiti MalayaMalaysia",
      imageUrl:c10,
    },{
      name: 'DR. MAIZATUL AKMAR BINTI ISMAIL',
      role: 'Associate Professor',
      description:"Faculty of Computer Science and Information Technology  Universiti Malaya Malaysia",
      imageUrl:c11,
    },{
      name: 'ELIZA B. AYO',
      role: 'Department Head',
      description:"Head, Computer Education Dept. Centro Escolar University Philippines",
      imageUrl:c12,
    },{
      name: 'Josan Tamayo',
      role: 'Program Head',
      description:"Centro Escolar University Philippines",
      imageUrl:c13,
    },{
      name: 'Mowafaq Salem Alzboon',
      role: 'Assistant Professor',
      description:"Faculty of Science and Information Technology  Jadara University Jordan",
      imageUrl:c14
    },{
      name: 'JEHAN DELGADO BULANADI',
      role: 'Internal Review Board (IRB) Member',
      description:"Holy Angel University Angeles City Philippines",
      imageUrl:c15
    },
    {
      name: 'Dr Ali Ahmad Mohammad Alawneh',
      role: 'Associate Professor',
      description:"Director of Quality Assurance &amp; Accreditation Philadelphia University Jordan",
      imageUrl:c16
    }, {
      name: 'DR. ADELEH ASEMI ZAVAREH',
      role: 'Senior Lecturer',
      description:"Faculty of Computer Science and Information Technology  Department of Software Engineering Universiti Malaya   Malaysia",
      imageUrl:c17
    }, {
      name: 'De Guzman, Edwin Santos',
      role: 'Teaching Academic Staff',
      description:"College of Information & Computing Sciences    University of Santo Tomas   Espana, Manila,Philippines ",
      imageUrl:c18
    }, {
      name: 'Dr. Teh Ying Wah',
      role: 'Professor',
      description:"Department of Information System  Faculty of Computer Science and Information Technology Universiti Malaya Malaysia",
      imageUrl:c19
    }, {
      name: 'DR. MOHAMAD NIZAM BIN AYUB',
      role: 'Associate Professor ',
      description:"Department of Computer System & Technology  Universiti Malaya  Malaysia",
      imageUrl:c20
    }, {
      name: 'Dr. JAY-ARR C. TAYAO',
      role: 'Professorial Lecturer',
      description:"Business, I.T. & Education   City University of Paris  Paris, France",
      imageUrl:c21
    }, {
      name: 'Dr Aris Ignacio',
      role: 'Dean',
      description:"Dean of the College of Information Technology and Engineering  Southville International School and Colleges Philippines",
      imageUrl:c22
    },{
      name: '  DR. MARY ANN G. VALENTINO',
      role: 'Associate Professor',
      description:"Research Coordinator National University Baliwag Philippines",
      imageUrl:c23  
    },
    // More people...
  ]
  return (
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  my-12 mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40 ">
      {people.map((person) => (
        <li
          key={person.email}
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow drop-shadow-2xl"
        >
          <div className="flex flex-1 flex-col p-8">
            <Image className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={person.imageUrl} width={100} height={100} alt="1" />
            <h3 className="mt-6 text-sm font-medium text-gray-900">{person.name}</h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-sm text-gray-500">{person.title}</dd>
              <dt className="sr-only">Role</dt>
              <dd className="mt-3">
                <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  {person.role}
                </span>
              </dd>
          <p className='lowercase'>
            {person.description}
          </p>
            </dl>
          </div>
          <div>
          </div>
        </li>
      ))}
    </ul>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Balancing reliability and innovation"
      >
        <p>
          We strive to stay at the forefront of emerging trends and
          technologies, while completely ignoring them and forking that old
          Rails project we feel comfortable using. We stand by our core values
          to justify that decision.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous">
            The first part of any partnership is getting our designer to put
            your logo in our template. The second step is getting them to do the
            colors.
          </GridListItem>
          <GridListItem title="Efficient">
            We pride ourselves on never missing a deadline which is easy because
            most of the work was done years ago.
          </GridListItem>
          <GridListItem title="Adaptable">
            Every business has unique needs and our greatest challenge is
            shoe-horning those needs into something we already built.
          </GridListItem>
          <GridListItem title="Honest">
            We are transparent about all of our processes, banking on the simple
            fact our clients never actually read anything.
          </GridListItem>
          <GridListItem title="Loyal">
            We foster long-term relationships with our clients that go beyond
            just delivering a product, allowing us to invoice them for decades.
          </GridListItem>
          <GridListItem title="Innovative">
            The technological landscape is always evolving and so are we. We are
            constantly on the lookout for new open source projects to clone.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our committee" title="International Committee">
        <p>
          
        </p>
      </PageIntro>

      
<Committee/>
      

      <ContactSection />
    </>
  )
}
