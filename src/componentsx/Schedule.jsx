'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'

const schedule = [

  {
    date: 'Information Technology',
    dateTime: '',
    summary:
      '',
    timeSlots: [
      {
        name: 'AI Technologies',
        description: '',
        start: '',
        end: '',
      }, {
        name: ' Game Theory',
        description: '',
        start: '',
        end: '',
      }, {
        name: ' Machine and Deep Learning of Knowledge',
        description: '',
        start: '',
        end: '',
      }, {
        name: 'Bio-inspired Computing in Communications',
        description: '',
        start: '',
        end: '',
      }, {
        name: 'Data Science and Data Engineering',
        description: '',
        start: '',
        end: '',
      }, {
        name: 'Artificial Intelligent Systems applications in Computers and Communications',
        description: '',
        start: '',
        end: '',
      }, {
        name: ' Computing applications',
        description: '',
        start: '',
        end: '',
      }, {
        name: ' Software Engineering',
        description: '',
        start: '',
        end: '',
      },{
        name: 'Big Data, Data Mining and Database Applications',
        description: '',
        start: '',
        end: '',
      },{
        name: 'Peer-to-Peer Computing',
        description: '',
        start: '',
        end: '',
      },{
        name: ' Smart machine',
        description: '',
        start: '',
        end: '',
      },{
        name: ' Language recognition',
        description: '',
        start: '',
        end: '',
      },
   
    ],
  },
  {
    date: 'Communication Engineering',
    dateTime: '',
    summary:
      '',
    timeSlots: [

      {
        name: '   Cognitive Radio Networking',
        description: '',
        start: '',
        end: '',
      },{
        name: ' Wireless, Cellular, and Mobile Communications',
        description: '',
        start: '',
        end: '',
      },{
        name: 'Signal Processing for Communications',
        description: '',
        start: '',
        end: '',
      },{
        name: ' Advances in Internet Protocols',
        description: '',
        start: '',
        end: '',
      },{
        name: ' Real Time Communication Services',
        description: '',
        start: '',
        end: '',
      },{
        name: ' Routing and Multicast',
        description: '',
        start: '',
        end: '',
      },{
        name: '    Network Design, Optimization and Management',
        description: '',
        start: '',
        end: '',
      },{
        name: 'Network Reliability, Quality of Service and Quality of Experience',
        description: '',
        start: '',
        end: '',
      },{
        name: 'Fault-Tolerance and Error Recovery',
        description: '',
        start: '',
        end: '',
      },{
        name: ' Digital Satellite Communications Service',
        description: '',
        start: '',
        end: '',
      },{
        name: ' Communications Services and Management',
        description: '',
        start: '',
        end: '',
      },{
        name: ' Wireless Communications and Technologies',
        description: '',
        start: '',
        end: '',
      },
     
    ],
  },

]

function ScheduleTabbed() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let smMediaQuery = window.matchMedia('(min-width: 640px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(smMediaQuery)
    smMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      smMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <Tab.Group
      as="div"
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === 'vertical'}
    >
      <Tab.List className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pb-4 pl-4 sm:mx-0 sm:flex-col sm:pb-0 sm:pl-0 sm:pr-8">
        {({ selectedIndex }) =>
          schedule.map((day, dayIndex) => (
            <div
              key={day.dateTime}
              className={clsx(
                'relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0',
                dayIndex !== selectedIndex && 'opacity-70'
              )}
            >
              <DaySummary
                day={{
                  ...day,
                  date: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                      <span className="absolute inset-0" />
                      {day.date}
                    </Tab>
                  ),
                }}
              />
            </div>
          ))
        }
      </Tab.List>
      <Tab.Panels>
        {schedule.map((day) => (
          <Tab.Panel
            key={day.dateTime}
            className="[&:not(:focus-visible)]:focus:outline-none"
          >
            <TimeSlots day={day} />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

function DaySummary({ day }) {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight text-blue-900">
        <time dateTime={day.dateTime}>{day.date}</time>
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-blue-900">
        {day.summary}
      </p>
    </>
  )
}

function TimeSlots({ day, className }) {
  return (
    <ol
      role="list"
      className={clsx(
        className,
        'space-y-8 bg-white/60 px-10 py-14 text-center shadow-xl shadow-blue-900/5 backdrop-blur'
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={timeSlot.start}
          aria-label={`${timeSlot.name} talking about ${timeSlot.description} at ${timeSlot.start} - ${timeSlot.end} PST`}
        >
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-2 h-px w-48 bg-indigo-500/10" />
          )}
          <h4 className="text-lg font-semibold tracking-tight text-blue-900">
            {timeSlot.name}
          </h4>
          {timeSlot.description && (
            <p className="mt-1 tracking-tight text-blue-900">
              {timeSlot.description}
            </p>
          )}
          <p className="mt-1 font-mono text-sm text-slate-500">
            <time dateTime={`${day.dateTime}T${timeSlot.start}-08:00`}>
              {timeSlot.start}
            </time>{' '}
            {' '}
            <time dateTime={`${day.dateTime}T${timeSlot.end}-08:00`}>
              {timeSlot.end}
            </time>{' '}
            
          </p>
        </li>
      ))}
    </ol>
  )
}

function ScheduleStatic() {
  return (
    <div>
      
    <div className="hidden lg:grid lg:grid-cols-2 lg:gap-x-8">
      {schedule.map((day) => (
        <section key={day.dateTime}>
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-10" />
        </section>
      ))}
    </div>
    </div>

  )
}

export function Schedule() {
  return (
    <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 sm:text-5xl">
            Our two day schedule is jam-packed with brilliant, creative, evil
            geniuses.
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            The worst people in our industry giving the best talks you’ve ever
            seen. Nothing will be recorded.
          </p>
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <div className="absolute inset-x-0 -bottom-32 -top-40 overflow-hidden bg-indigo-50">
          <Image
            className="absolute left-full top-0 -translate-x-1/2 sm:left-1/2 sm:translate-x-[-20%] sm:translate-y-[-15%] md:translate-x-0 lg:translate-x-[5%] lg:translate-y-[4%] xl:translate-x-[27%] xl:translate-y-[-8%]"
            src={backgroundImage}
            alt=""
            width={918}
            height={1495}
            unoptimized
          />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
        </div>
        <Container className="relative ">
        <div className='flex justify-center items-center text-5xl my-8 font-medium tracking-tight text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900'>
        <h1>Conference Tracks</h1>
      </div>
          <ScheduleTabbed />
          <ScheduleStatic />
        </Container>
      </div>
    </section>
  )
}
