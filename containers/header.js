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
            sliceRef1.current.classList.add("opacity-80", "rotate-45", "translate-y-2")
            sliceRef2.current.classList.add("opacity-0")
            sliceRef3.current.classList.add("opacity-80", "-rotate-45", "-translate-y-2")
            slideNavRef.current.classList.remove("translate-x-full")
        }
        else {
            sliceRef1.current.classList.remove("opacity-80", "rotate-45", "translate-y-2")
            sliceRef2.current.classList.remove("opacity-0")
            sliceRef3.current.classList.remove("opacity-80", "-rotate-45", "-translate-y-2")
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
                            <NavBar.Item URL={'/'}>تحميل التطبيق</NavBar.Item>
                            <NavBar.Item URL={'/'}>الميزات</NavBar.Item>
                            <NavBar.Item URL={'/'}>تحكم كامل للاهل</NavBar.Item>
                            <NavBar.Item URL={'/'}>الباقات</NavBar.Item>
                            <NavBar.Item URL={'/'}>الكواكب</NavBar.Item>
                        </NavBar.List>
                        <NavBar.Search />
                        <NavBar.Login URL={'login'}>  الدخول</NavBar.Login>
                        <NavBar.SubscrptionButton URL={'subscribe'}>  إشترك الآن</NavBar.SubscrptionButton>
                    </NavBar.Container>
                </NavBar>
                <SlideNav>
                    <SlideNav.Container ref={slideNavRef}>
                        <SlideNav.LoginButton URL={'/login'}>تسجيل الدخول</SlideNav.LoginButton>
                        <SlideNav.List >
                            <SlideNav.Item URL={'/'}>تحميل التطبيق</SlideNav.Item>
                            <SlideNav.Item URL={'/'}>الميزات</SlideNav.Item>
                            <SlideNav.Item URL={'/'}>تحكم كامل للاهل</SlideNav.Item>
                            <SlideNav.Item URL={'/'}>الباقات</SlideNav.Item>
                            <SlideNav.Item URL={'/'}>الكواكب</SlideNav.Item>
                        </SlideNav.List>
                    </SlideNav.Container>
                </SlideNav>
            </Header.Container>
        </Header>
    )
}