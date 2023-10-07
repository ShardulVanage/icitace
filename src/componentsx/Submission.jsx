import { Container } from "./Container"

import { Button } from '@/components/Button'

export  function Submission() {
    return (
     <div className="py-20 sm:py-32 ">

     <Container>

      <div className="bg-white shadow sm:rounded-lg drop-shadow-2xl">
        <div className="px-4 py-5 sm:p-6 drop-shadow-2xl">
          <div className="sm:flex sm:items-center sm:justify-evenly ">
            <div className="flex  flex-col justify-center items-center">
              <h3 className="text-2xl font-bold leading-6 text-gray-900 text-transparent bg-clip-text bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 ">Paper Submission</h3>
              <div className="mt-2 max-w-xl  text-gray-500 text-base">
                <p>
                Submit your paper to ICITACE and share your research with a global audience in the field of Information Technology and Communication Engineering.
                </p>
              </div>
            </div>
            <div className="mt-5 sm:ml-6 sm:mt-0 sm:flex sm:flex-shrink-0 sm:items-center">
              <Button
              href="/papersubmission"
                type="button"
                className="inline-flex items-center rounded-md bg-gradient-to-tr from-blue-400 to-emerald-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 drop-shadow-md"
                >
                Submit paper
              </Button>
            </div>
          </div>
        </div>
      </div>
                </Container>
                </div>
    )
  }
  