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
                        <ContactUs.Facebook URL={'Facebook.com'} />
                        <ContactUs.Instagram URL={'Instagram.com'} />
                        <ContactUs.Twitter URL={'Twitter.com'} />
                        <ContactUs.Youtube URL={'Youtube.com'} />
                        <ContactUs.Tiktok URL={'Tiktok.com'} />
                    </ContactUs.Container>
                </ContactUs>
            </Footer.Container>
        </Footer>
    )
}
