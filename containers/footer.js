import { FooterData } from '../fixtures/HomeData'
import { Footer, ContactUs, Terms } from '../components'

export default function FooterContainer() {
    return (
        <Footer >
            <Footer.Container>
                <Terms>
                    <Terms.Container >
                        {FooterData.items.map(item => {
                            return (
                                <Terms.Item key={item.id} >{item.text}</Terms.Item>
                            )
                        })
                        }
                    </Terms.Container>
                </Terms>
                <ContactUs>
                    <ContactUs.Container>
                        <ContactUs.Logo URL={'/'} />
                        <ContactUs.Facebook URL={'https://www.facebook.com/spacetoongo'} />
                        <ContactUs.Instagram URL={'https://www.instagram.com/spacetoongo'} />
                        <ContactUs.Twitter URL={'https://www.twitter.com/spacetoongo'} />
                        <ContactUs.Youtube URL={'https://www.youtube.com/spacetoongo'} />
                        <ContactUs.Tiktok URL={'https://www.tiktok.com/spacetoongo'} />
                    </ContactUs.Container>
                </ContactUs>
            </Footer.Container>
        </Footer>
    )
}
