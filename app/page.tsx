import { Button } from '@/components/ui/button'
import { Footer } from '@/src/features/layout/Footer'
import { Header } from '@/src/features/layout/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex  flex-col items-center justify-between p-24">
        <Button  variant="default">test</Button>
        
      </main>
      <Footer />
    </>
  )
}
