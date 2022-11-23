import { Hero, Info } from '../components'
import { HeroData } from '../fixtures/HomeData'

export default function HeroContainer({ show_Id, show_type, showInfo }) {

    return (
        <div>
            <Hero >
                <Hero.Container>
                    <Hero.Image
                        show_Id={show_Id}
                        show_type={show_type} />
                    <Hero.Shadow />
                    <Info showInfo={showInfo}>
                        <Info.Container >
                            <Info.Title>{HeroData.title}</Info.Title>
                            <Info.SubTitle>{HeroData.subtitle}</Info.SubTitle>
                            <Info.Button show_Id={show_Id} show_type={show_type}>{HeroData.buttonText}</Info.Button>
                        </Info.Container>
                    </Info>
                </Hero.Container>
            </Hero>
        </div>
    )
}
