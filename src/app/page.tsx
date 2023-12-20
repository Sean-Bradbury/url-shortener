import Header from './components/Header'
import Hero from './components/Hero'
import LinkShortener from './components/LinkShortener'

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className='p-10'>
        <Header />
        <Hero />
      </div>
      <LinkShortener />
    </main>
  )
}
