import { Button } from '@/components/ui/button'
import { Footer } from '@/src/features/layout/Footer'
import { Header } from '@/src/features/layout/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section id="open-source" className="w-full py-8 md:py-12 lg:py-24 bg-slate-50 ">
          <div className="mx-auto flex container flex-col items-center justify-center gap-4 text-left">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Proudly Open Source</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">Taxonomy is open source and powered by open source software. <br/>
            The code is available on <a target="_blank" rel="noreferrer" className="underline underline-offset-4" href="https://github.com/shadcn/taxonomy">GitHub</a>
            </p>
          </div>
        </section>
        <section id="open-source" className="container py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-left">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Proudly Open Source</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">Taxonomy is open source and powered by open source software. <br/>
            The code is available on <a target="_blank" rel="noreferrer" className="underline underline-offset-4" href="https://github.com/shadcn/taxonomy">GitHub</a>
            </p>
          </div>
          <Button  variant="default">test</Button>
        </section>        
      </main>
      <Footer />
    </>
  )
}
