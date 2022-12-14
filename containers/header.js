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
                        <NavBar.Hamburger onClick={toggleSlideNav} >
                            <NavBar.HamburgerSlice ref={sliceRef1} />
                            <NavBar.HamburgerSlice ref={sliceRef2} />
                            <NavBar.HamburgerSlice ref={sliceRef3} />
                        </NavBar.Hamburger>
                        <NavBar.Logo URL={'/'} />
                        <NavBar.List>
                            <NavBar.Item URL={'/'}>????????????????</NavBar.Item>
                            <NavBar.Item URL={'/series'}>??????????????????</NavBar.Item>
                            <NavBar.Item URL={'/movies'}>??????????????</NavBar.Item>
                            <NavBar.Item URL={'/suggestion'}>??????????????????</NavBar.Item>
                            <NavBar.Item URL={'/games'}>??????????????</NavBar.Item>
                        </NavBar.List>
                        <NavBar.Search />
                        <NavBar.Login URL={'login'}>  ????????????</NavBar.Login>
                        <NavBar.SubscrptionButton URL={'subscribe'}>  ?????????? ????????</NavBar.SubscrptionButton>
                    </NavBar.Container>
                </NavBar>
                <SlideNav>
                    <SlideNav.Container ref={slideNavRef}>
                        <SlideNav.TopLable>
                            <SlideNav.SubscrptionButton URL={'/login'}>?????????? ???????? ?? ?????? %25</SlideNav.SubscrptionButton>
                            <SlideNav.LoginButton URL={'/login'}>?????????? ????????????</SlideNav.LoginButton>
                        </SlideNav.TopLable>
                        <SlideNav.List >
                            <SlideNav.Item URL={'/'}>????????????????</SlideNav.Item>
                            <SlideNav.Item URL={'/series'}>??????????????????</SlideNav.Item>
                            <SlideNav.Item URL={'/movies'}>??????????????</SlideNav.Item>
                            <SlideNav.Item URL={'/suggestion'}>??????????????????</SlideNav.Item>
                            <SlideNav.Item URL={'/games'}>??????????????</SlideNav.Item>
                        </SlideNav.List>

                        <SlideNav.Title>?????????? ????????????</SlideNav.Title>
                        <SlideNav.List >
                            <SlideNav.Item URL={'/'}>????????????</SlideNav.Item>
                            <SlideNav.Item URL={'/'}>??????????????</SlideNav.Item>
                            <SlideNav.Item URL={'/'}>???????????? ????????????</SlideNav.Item>
                        </SlideNav.List>

                        <SlideNav.Title>?????????????? ????????????</SlideNav.Title>
                        <SlideNav.List >
                            <SlideNav.Item URL={'/'}>?????????????? ??????????</SlideNav.Item>
                            <SlideNav.Item URL={'/'}>?????????? ????????????</SlideNav.Item>
                        </SlideNav.List>

                    </SlideNav.Container>
                </SlideNav>
            </Header.Container>
        </Header>
    )
}
