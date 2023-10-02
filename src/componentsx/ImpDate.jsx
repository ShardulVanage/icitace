const timeline = [
    {
      name: 'Early Bird Registration',
      description:
        'Maximize your savings and submit your research early with the Early Bird Registration for paper submission at ICITACE.',
      date: '4th October 2023',
      dateTime: '2021-08',
    },
    {
      name: 'Abstract Submission',
      description:
        'Submit your research abstract early for paper submission at ICITACE and enjoy reduced registration fees, ensuring your work reaches a global audience at this prestigious conference.',
      date: '6th October 2023',
      dateTime: '2021-12',
    },
    {
      name: 'Full Paper Submission & Standard Registration',
      description:
        'Complete your full paper submission alongside standard registration at ICITACE, offering you the opportunity to present your comprehensive research while ensuring your participation in this influential conference. ',
      date: '18th October 2023',
      dateTime: '2022-02',
    },
    {
      name: 'Registration',
      description:
        'Official paper submission registration for ICITACE is live. Secure your spot at this prestigious conference for IT and Communication Engineering professionals and researchers.',
      date: '1st November 2023',
      dateTime: '2022-12',
    },
  ]
  
  export default function ImpDate() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className=" mx-auto  my-8 font-display text-4xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400 sm:text-5xl">
                <h1>Important Date</h1>
            </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {timeline.map((item) => (
              <div key={item.name}>
                <time
                  dateTime={item.dateTime}
                  className="flex items-center text-sm font-semibold leading-6 text-blue-800"
                >
                  <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                    <circle cx={2} cy={2} r={2} fill="currentColor" />
                  </svg>
                  {item.date}
                  <div
                    className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                    aria-hidden="true"
                  />
                </time>
                <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{item.name}</p>
                <p className="mt-1 text-base leading-7 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  