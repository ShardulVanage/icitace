import { useId } from 'react'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'

function TextInput({ label, ...props }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function RadioInput({ label, ...props }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  )
}

function ContactForm() {
  return (
    <FadeIn className="lg:order-last">
      <form  action="https://getform.io/f/63a727dc-3b04-4634-ac16-40ae4ea813cf" method="POST" enctype="multipart/form-data" >
        <h2 className="font-display text-base font-semibold text-neutral-950">
           Guidlines
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
        <TextInput label="title" name="title" autoComplete="title"  />
          <TextInput label="Author Name" name="Author Name" autoComplete="Author" />
          <TextInput label="Co-Author Name" name="Co-Author Name" autoComplete="Co-Author" />
          <TextInput label="Paper Title" name="Paper Title" autoComplete="name" />
          <TextInput label="Institution/Department" name="Institution/Department" autoComplete="Institution/Department" />
          <TextInput label="University/Organization" name="University/Organization" autoComplete="University/Organization" />
          <TextInput label="Designation" name="Designation" autoComplete="Designation" />
          <TextInput label="Countery" name="Countery" autoComplete="Countery" />
          <TextInput label="City" name="City" autoComplete="City" />
          <TextInput label="Contact No" name="Contact No" autoComplete="Contact No" type='tel' />
          <TextInput label="Email"  type="email" name="email"autoComplete="email" />
          <TextInput label="Attach your Abstract"  type="file" name="Attach"autoComplete="Attach" />
         
            <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">Paper</legend>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <RadioInput label="Abstract" name="Paper" value="Abstract" />
                <RadioInput label="Full Paper" name="Paper" value="FullPaper" />
             
              </div>
            </fieldset>
          </div>       
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">Do you want to become a volunteer session moderator ?</legend>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <RadioInput label="Yes " name="Do you want to become a volunteer session moderator ?" value="Yes" />
                <RadioInput label="No" name="Do you want to become a volunteer session moderator ?" value="No" />
             
              </div>
            </fieldset>
          </div>   
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">Do you want to become a volunteer reviewer of our advisory board ?</legend>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <RadioInput label="Yes " name="Do you want to become a volunteer reviewer of our advisory board ?" value="Yes" />
                <RadioInput label="No" name="Do you want to become a volunteer reviewer of our advisory board ?" value="No" />
             
              </div>
            </fieldset>
          </div>   
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
  
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                
                <RadioInput label=" Submit with Copyright Form" name=" Submit with Copyright Form" value="yes" />
             
              </div>
            </fieldset>
          </div>      
         
        </div>
        <Button type="submit" className="mt-10 mx-4 py-2 px-8">
          SUBMIT
        </Button>
      </form>
    </FadeIn>
  )
}



export const metadata = {
  title: 'Crf -Submission ',
  description: 'Let’s publis together. We can’t wait to hear from you.',
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Submission" title="Abstract/Full Paper Submission">
        <p>Submitted articles will be peer-reviewed and accepted articles will get publish in SCOPUS Indexed journal or web of science.</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
         
        </div>
      </Container>
    </>
  )
}
