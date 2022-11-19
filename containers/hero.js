import { Hero, Info } from '../components'
import { HeroData } from '../fixtures/HomeData'
export default function HeroContainer() {
    return (
        <div>
            <Hero >
                <Hero.Container>
                    <Info>
                        <Info.Container>
                            <Info.Title>{HeroData.title}</Info.Title>
                            <Info.SubTitle>{HeroData.subtitle}</Info.SubTitle>
                            <Info.Button>{HeroData.buttonText}</Info.Button>
                        </Info.Container>
                    </Info>
                </Hero.Container>
            </Hero>
        </div>
    )
}
