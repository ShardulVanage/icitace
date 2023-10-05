import { PageIntro } from '@/components/PageIntro'


export default function Contact() {
  const accessCode =  're_efg5ojwG_PpsAaTqfRyTy3B9Rt2Wgg9hC' // Replace with your actual access code
  const workingKey = 'AVCV04IC46AW45VCWA'; // Replace with your actual working key

  // You need to implement your own server-side logic to generate the encrypted request.
  // You can use a serverless function, API route, or any other server-side technology.

  const ccaRequest = '';
    return (
      <>
      
      <div>
      <iframe
        src={`https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction&encRequest=${ccaRequest}&accessCode=${accessCode}`}

        width="100%"
        height="600px"
        frameBorder="0"
      ></iframe>
      </div>
      </>
    )
  }
  