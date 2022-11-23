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
      <HeroContainer
        show_Id={'1'}
        show_type={"conan"}
        showInfo={true} />
      <ContentContainer />
      <FooterContainer />
    </main>
  )
}
