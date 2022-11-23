import { Header, NavBar, SlideNav } from '../components'
import { useRef, useState } from 'react'

export default function HeaderContainer() {
    const sliceRef1 = useRef(null)
    const sliceRef2 = useRef(null)
    const sliceRef3 = useRef(null)
    const slideNavRef = useRef(null)
    const [isSlideNavOpened, setIsSlideNavOpened] = useState(false)

    // Open & Close slide nav window on Mobile screens
    function toggleSlideNav() {
        setIsSlideNavOpened(!isSlideNavOpened)
        if (!isSlideNavOpened) {
            sliceRef1.current.classList.remove("bg-white")
            sliceRef1.current.classList.add("opacity-80", "rotate-45", "translate-y-2", "bg-accent")

            sliceRef2.current.classList.add("opacity-0")

            sliceRef3.current.classList.add("opacity-80", "-rotate-45", "-translate-y-2", "bg-accent")
            sliceRef3.current.classList.remove("bg-white")

            slideNavRef.current.classList.remove("translate-x-full")
        }
        else {
            sliceRef1.current.classList.remove("opacity-80", "rotate-45", "translate-y-2", "bg-accent")
            sliceRef1.current.classList.add("bg-white")

            sliceRef2.current.classList.remove("opacity-0")

            sliceRef3.current.classList.remove("opacity-80", "-rotate-45", "-translate-y-2", "bg-accent")
            sliceRef3.current.classList.add("bg-white")

            slideNavRef.current.classList.add("translate-x-full")
        }
    }

    return (
        <Header>
            <Header.Container>
                <NavBar>
                    <NavBar.Container>
                        <NavBar.Hamburger toggleSlideNav={toggleSlideNav} >
                            <NavBar.HamburgerSlice ref={sliceRef1} />
                            <NavBar.HamburgerSlice ref={sliceRef2} />
                            <NavBar.HamburgerSlice ref={sliceRef3} />
                        </NavBar.Hamburger>
                        <NavBar.Logo URL={'/'} />
                        <NavBar.List>
                            <NavBar.Item URL={'/'}>الرئيسية</NavBar.Item>
                            <NavBar.Item URL={'/series'}>المسلسلات</NavBar.Item>
                            <NavBar.Item URL={'/movies'}>الافلام</NavBar.Item>
                            <NavBar.Item URL={'/suggestion'}>المختارات</NavBar.Item>
                            <NavBar.Item URL={'/games'}>الالعاب</NavBar.Item>
                        </NavBar.List>
                        <NavBar.Search />
                        <NavBar.Login URL={'login'}>  الدخول</NavBar.Login>
                        <NavBar.SubscrptionButton URL={'subscribe'}>  إشترك الآن</NavBar.SubscrptionButton>
                    </NavBar.Container>
                </NavBar>
                <SlideNav>
                    <SlideNav.Container ref={slideNavRef}>
                        <SlideNav.TopLable>
                            <SlideNav.SubscrptionButton URL={'/login'}>اشترك الآن و وفر %25</SlideNav.SubscrptionButton>
                            <SlideNav.LoginButton URL={'/login'}>تسجيل الدخول</SlideNav.LoginButton>
                        </SlideNav.TopLable>
                        <SlideNav.List >
                            <SlideNav.Item URL={'/'}>الرئيسية</SlideNav.Item>
                            <SlideNav.Item URL={'/series'}>المسلسلات</SlideNav.Item>
                            <SlideNav.Item URL={'/movies'}>الافلام</SlideNav.Item>
                            <SlideNav.Item URL={'/suggestion'}>المختارات</SlideNav.Item>
                            <SlideNav.Item URL={'/games'}>الالعاب</SlideNav.Item>
                        </SlideNav.List>

                        <SlideNav.Title>الملف الشخصي</SlideNav.Title>
                        <SlideNav.List >
                            <SlideNav.Item URL={'/'}>مكتبتي</SlideNav.Item>
                            <SlideNav.Item URL={'/'}>المفضلة</SlideNav.Item>
                            <SlideNav.Item URL={'/'}>مشاهدة لاحقاً</SlideNav.Item>
                        </SlideNav.List>

                        <SlideNav.Title>إعدادات الحساب</SlideNav.Title>
                        <SlideNav.List >
                            <SlideNav.Item URL={'/'}>معلومات حسابي</SlideNav.Item>
                            <SlideNav.Item URL={'/'}>تسجيل الخروج</SlideNav.Item>
                        </SlideNav.List>

                    </SlideNav.Container>
                </SlideNav>
            </Header.Container>
        </Header>
    )
}
