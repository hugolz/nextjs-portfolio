import Image from 'next/image'
import CardList from './card_list';
import HelpMe from './helpme';

export default async function Home() {
  return (
    <main className="bg-transparent">
    <canvas id="gridwormCanvas"> </canvas>
    <label className='text-white description'>Je suis un développeur autodidacte de 22 ans, spécialisé dans le développement logiciel et backend. J'ai commencé mon parcours avec Python et aujourd'hui j'utilise principalement Rust.</label>
    <CardList/>
    <HelpMe />

    </main>

  )
}