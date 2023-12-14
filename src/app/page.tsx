import Image from 'next/image'
import CardList from './card_list';
import Contact from '@/components/contact';

export default async function Home() {
  return (
    <main className="bg-transparent">
      <canvas id="gridwormCanvas"> </canvas>
      <p className='text-[var(--text)] text-[110%] sm:text-[160%] ml-[5%] sm:ml-[15%] mr-[5%] sm:mr-[15%] mt-[5%] description pb-[10%]'>Je suis un développeur autodidacte de 22 ans, spécialisé dans le développement logiciel et backend. J'ai commencé mon parcours avec Python et aujourd'hui j'utilise principalement Rust.</p>
      <CardList />
      {/*<div className='flex min-h-screen flex-col items-center justify-center p-24 bg-white'>*/}
        <Contact />
      {/*</div>*/}
    </main>
  )
}