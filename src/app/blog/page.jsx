import Image from 'next/image'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { formatDate } from '@/lib/formatDate'
import { loadMDXMetadata } from '@/lib/loadMDXMetadata'
import img from '@/images/publication/(IJERE).png'
import img1 from '@/images/publication/Decision_Analytics_journal.jpg'
import img2 from '@/images/publication/e-Prime.jpg'
import img3 from '@/images/publication/e3sconf.jpg'
import img4 from '@/images/publication/IJIRSS.png'
import img5 from '@/images/publication/International_Journal_of.png'
import img6 from '@/images/publication/JNS.png'
import img7 from '@/images/publication/Journal_of_Survey_in_Fisheries_Sciences.png'
import img8 from '@/images/publication/Microprocessors-and-Microsystems.jpg'
import img9 from '@/images/publication/optical-and-quantum-electronics.jpg'
import img10 from '@/images/publication/journalof_autonomous_intelligence.jpg'
import img11 from '@/images/publication/Oriente Moderno.png'
import img12 from '@/images/publication/proceedings_on_engineering_sciences.png'
import img13 from '@/images/publication/Social Science_01.png'
import img14 from '@/images/publication/taylor.jpg'
import img15 from '@/images/publication/WhatsApp Image 2023-05-22 at 3.17.39 PM (1).jpeg'



export const metadata = {
  title: 'Blog',
  description:
    'Stay up-to-date with the latest industry news as our marketing teams finds new ways to re-purpose old CSS tricks articles.',
}

export default async function Blog() {
  let article = await loadMDXMetadata('blog')
let articles = [
  {
    href:"https://www.sciencedirect.com/journal/e-prime-advances-in-electrical-engineering-electronics-and-energy",
    title:"e-Prime - Advances in Electrical Engineering, Electronics and Energy",
   image:img2,
    issn:"ISSN:ISSN:2772-6711xc",
  } ,
  {
    href:"https://meetconferences.com/publication_new.php?id=3",
    title:"Journal of Autonomous Intelligence",
   image:img10,
    issn:"ISSN:E-ISSN : 2630-5046",
  } ,
  {
    href:"https://www.sciencedirect.com/journal/microprocessors-and-microsystems/about/aims-and-scope",
    title:"Microprocessors and Microsystems",
   image:img8,
    issn:"ISSN:ISSN : 1872-9436",
  } ,
  {
    href:"https://www.springer.com/journal/11082",
    title:" Optical and quantum electronic",
   image:img9,
    issn:"ISSN:E-ISSN : 1572-817X",
  } ,
  {
    href:"https://www.taylorfrancis.com/series",
    title:"Proceedings on Engineering Sciences",
   image:img12,
    issn:"ISSN:ISSN : 2620-2832 ",
  } ,
  {
    href:"https://meetconferences.com/publication_new.php?id=3",
    title:"Journal of Survey in Fisheries Science",
   image:img7,
    issn:"ISSN:E-ISSN : 2368-7487",
  } ,
  {
    href:"https://www.taylorfrancis.com/series",
    title:"Taylor and Francis Conferene Proceedings",
   image:img14,
    issn:"ISSN:",
  } ,
  {
    href:"https://www.sciencedirect.com/journal/decision-analytics-journal",
    title:"Decision Analytics Journal",
   image:img1,
    issn:"ISSN:ISSN : 2772-6622",
  } ,
  {
    href:"https://qtanalytics.in/journals/index.php/IJERR/index",
    title:"International Journal of Experimental Research and Review",
   image:img5,
    issn:"ISSN:ISSN- 2455-4855",
  } ,
  {
    href:"https://rgsa.emnuvens.com.br/rgsa",
    title:"Revista de Gestao Social e Ambiental",
   image:img15,
    issn:"ISSN:ISSN- 1981-982X",
  } ,
  {
    href:"https://ijere.iaescore.com/index.php/IJERE",
    title:" International Journal of Evaluation and Research in Education",
   image:img,
    issn:"ISSN:ISSN:2620-5440",
  } ,
  {
    href:"http://ijirss.com/index.php/ijirss",
    title:"International Journal of Innovative Research and Scientific Studies",
   image:img4,
    issn:"ISSN:ISSN-2617-6548",
  } ,
  {
    href:"https://namibian-studies.com/index.php/JNS/si",
    title:" Journal of Namibian Studies",
   image:img6,
    issn:"2197-5523",
  } ,
  {
    href:"https://brill.com/view/journals/ormo/ormo-overview.xml?language=en",
    title:" Oriente Moderno",
   image:img11,
    issn:"ISSN:ISSN- 2213-8617",
  } ,
  {
    href:"https://www.mdpi.com/journal/socsci",
    title:"Social Sciences",
   image:img13,
    issn:" ISSN:ISSN-2076-0760",
  } ,
]
  return (
    <>
      <PageIntro eyebrow="Publication" title="The latest Publication">
        <p>
        Note: for more information on journals kindly connect with journals@coreresearchfoundation.com
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="space-y-24 lg:space-y-32">
          {articles.map((article) => (
            <FadeIn key={article.href}>
              <article>
                <Border className="pt-16">
                  <div className="relative lg:-mx-4 lg:flex lg:justify-end">
                    <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                      <h2 className="font-display text-2xl font-semibold text-neutral-950">
                        <Link href={article.href}>{article.title}</Link>
                      </h2>
                      <dl className="lg:absolute lg:left-0 lg:top-0 lg:w-1/3 lg:px-4">
                        <dt className="sr-only">Published</dt>
                        <dd className="absolute left-0 top-0 text-sm text-neutral-950 lg:static">
                          
                        </dd>
                        <dt className="sr-only">Author</dt>
                        <dd className="mt-6 flex gap-x-4">
                          <div className="flex-none overflow-hidden rounded-sm border  bg-neutral-100">
                            <Image
                              alt=""
                              src={article.image}
                              className="h-48 w-36 object-cover border-solid border-2 border-black"
                            />
                          </div>
                        
                        </dd>
                      </dl>
                      <p className="mt-6 max-w-2xl text-base text-neutral-600">
                        {article.issn}
                      </p>
                      <Button
                        href={article.href}
                        aria-label={`Read more: ${article.title}`}
                        className="mt-8"
                      >
                        Read more
                      </Button>
                    </div>
                  </div>
                </Border>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>

      <ContactSection />
    </>
  )
}
