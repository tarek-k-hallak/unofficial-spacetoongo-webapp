import {
  HeaderContainer,
  FooterContainer,
  HeroContainer,
  ContentContainer
} from '../containers'

export default function Home() {
  return (
    <main className='font-primary'>
      <HeaderContainer />
      <HeroContainer />
      <ContentContainer />
      <FooterContainer />
    </main>
  )
}
