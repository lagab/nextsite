import { Cta, CtaImagePosition } from '@/components/Cta'
import { PricingCard } from '@/components/PricingCard'
import { Section } from '@/components/Section'
import { Button } from '@/components/ui/button'
import { Footer } from '@/src/features/layout/Footer'
import { Header } from '@/src/features/layout/Header'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Section id="hero" size={'lg'} className="">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <a className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium" target="_blank" href="https://twitter.com/shadcn">Follow along on Twitter</a>
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">An example app built using Next.js 13 server components.</h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              I'm building a web app with Next.js 13 and open sourcing everything. Follow along as we figure this out together.
            </p>
            <div className='space-x-4'>
              <Button asChild variant={'default'} size={'lg'}><Link href="/login">Get Started</Link></Button>
              <Button asChild variant={'outline'} size={'lg'}><Link href="https://github.com/shadcn/taxonomy" target="_blank">GitHub</Link></Button>
            </div>
          </div>
        </Section>
        <Section>
          <Cta 
          title="Let's create more tools and ideas that brings us together22." 
          body="Flowbite helps you connect with friends and communities of people who share your interests. Connecting with your friends and family as well as discoering new ones is easy with features like Groups."
          image={{url:"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg",title: "tiite", position: CtaImagePosition.BEFORE}}
          />
          <div className="text-center">
          <Cta 
          title="Let's create more tools and ideas that brings us together22." 
          body="Flowbite helps you connect with friends and communities of people who share your interests. Connecting with your friends and family as well as discoering new ones is easy with features like Groups."
          action={<div className='space-x-4 text-center'>
            <Button asChild variant={'default'}><Link href="/login">Login</Link></Button>
            <Button asChild variant={'outline'}><Link href="/login">Login</Link></Button>
          </div>}
          />
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
              <PricingCard />
              <PricingCard />
              <PricingCard />
          </div>
        </Section>
        
        <Section id="open-source" size={'lg'} className="bg-slate-50 dark:bg-gray-900">
          <div className="mx-auto flex container flex-col items-center justify-center gap-4 text-left">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Proudly Open Source</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">Taxonomy is open source and powered by open source software. <br/>
            The code is available on <a target="_blank" rel="noreferrer" className="underline underline-offset-4" href="https://github.com/shadcn/taxonomy">GitHub</a>
            </p>
          </div>
        </Section>
        <Section className=" bg-red-50">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-left">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Proudly Open Source</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">Taxonomy is open source and powered by open source software. <br/>
            The code is available on <a target="_blank" rel="noreferrer" className="underline underline-offset-4" href="https://github.com/shadcn/taxonomy">GitHub</a>
            </p>
          </div>
          <Button  variant="default">test</Button>
        </Section>        
      </main>
      <Footer />
    </>
  )
}
