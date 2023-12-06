import { Cta } from '@/components/Cta'
import { Section } from '@/components/Section'
import { Button } from '@/components/ui/button'
import { Footer } from '@/src/features/layout/Footer'
import { Header } from '@/src/features/layout/Header'
import Image from 'next/image'

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
            <div className="space-x-4">
              <a className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 rounded-md" href="/login">Get Started</a>
              <a target="_blank" rel="noreferrer" className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-11 px-8 rounded-md" href="https://github.com/shadcn/taxonomy">GitHub</a>
            </div>
            </div>
        </Section>
        <Section>
          <Cta />
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
