import { useRef, useState } from 'react'
import { Content, Slider, Card, Scroller, Planet } from '../components'

export default function ContentContainer() {
    const rightArrowRef = useRef([])
    const leftArrowRef = useRef([])
    const [showArrows, setShowArrows] = useState(false)

    const DUMMY_CONTENT = [
        {
            id: '2',
            title: 'عالم المتحري الذكي',
            type: 'conan',
            items: [
                {
                    id: '1',
                    title: 'ارثر',
                    genre: 'سبيس باور',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/conan/1/small.jpg'
                },
                {
                    id: '2',
                    title: 'ارثر',
                    genre: 'سبيس باور',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/conan/2/small.jpg'
                },
                {
                    id: '3',
                    title: 'ارثر',
                    genre: 'سبيس باور',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/conan/3/small.jpg'
                },
                {
                    id: '4',
                    title: 'ارثر',
                    genre: 'سبيس باور',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/conan/4/small.jpg'
                },
                {
                    id: '5',
                    title: 'ارثر',
                    genre: 'سبيس باور',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/conan/5/small.jpg'
                },
                {
                    id: '6',
                    title: 'ارثر',
                    genre: 'سبيس باور',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/conan/6/small.jpg'
                },
                {
                    id: '7',
                    title: 'ارثر',
                    genre: 'سبيس باور',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/conan/7/small.jpg'
                },
                {
                    id: '8',
                    title: 'ارثر',
                    genre: 'سبيس باور',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/conan/8/small.jpg'
                },
            ],
        },
        {
            id: '3',
            title: 'كلاسيك',
            type: 'classic',
            items: [
                {
                    id: '1',
                    title: 'ارثر',
                    genre: 'كلاسيك',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/classic/1/small.jpg'
                },
                {
                    id: '2',
                    title: 'ارثر',
                    genre: 'كلاسيك',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/classic/2/small.jpg'
                },
                {
                    id: '3',
                    title: 'ارثر',
                    genre: 'كلاسيك',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/classic/3/small.jpg'
                },
                {
                    id: '4',
                    title: 'ارثر',
                    genre: 'كلاسيك',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/classic/4/small.jpg'
                },
                {
                    id: '5',
                    title: 'ارثر',
                    genre: 'كلاسيك',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/classic/5/small.jpg'
                },
                {
                    id: '6',
                    title: 'ارثر',
                    genre: 'كلاسيك',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/classic/6/small.jpg'
                },
                {
                    id: '7',
                    title: 'ارثر',
                    genre: 'كلاسيك',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/classic/7/small.jpg'
                },
                {
                    id: '8',
                    title: 'ارثر',
                    genre: 'كلاسيك',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/classic/8/small.jpg'
                },
            ],
        },
        {
            id: '4',
            title: 'سبيس باور',
            type: 'space-power',
            items: [
                {
                    id: '1',
                    title: 'ارثر',
                    genre: 'سبيس باور',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/space-power/1/small.jpg'
                },
                {
                    id: '2',
                    title: 'ارثر',
                    genre: 'سبيس باور',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/space-power/2/small.jpg'
                },
                {
                    id: '3',
                    title: 'ارثر',
                    genre: 'سبيس باور',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/space-power/3/small.jpg'
                },
                {
                    id: '4',
                    title: 'ارثر',
                    genre: 'سبيس باور',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/space-power/4/small.jpg'
                },
                {
                    id: '5',
                    title: 'ارثر',
                    genre: 'سبيس باور',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/space-power/5/small.jpg'
                },
                {
                    id: '6',
                    title: 'ارثر',
                    genre: 'سبيس باور',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/space-power/6/small.jpg'
                },
                {
                    id: '7',
                    title: 'ارثر',
                    genre: 'سبيس باور',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/space-power/7/small.jpg'
                },
                {
                    id: '8',
                    title: 'ارثر',
                    genre: 'سبيس باور',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/space-power/8/small.jpg'
                },
            ],
        },
        {
            id: '5',
            title: 'كوميديا',
            type: 'comedie',
            items: [
                {
                    id: '1',
                    title: 'ارثر',
                    genre: 'كوميديا',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/comedie/1/small.jpg'
                },
                {
                    id: '2',
                    title: 'ارثر',
                    genre: 'كوميديا',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/comedie/2/small.jpg'
                },
                {
                    id: '3',
                    title: 'ارثر',
                    genre: 'كوميديا',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/comedie/3/small.jpg'
                },
                {
                    id: '4',
                    title: 'ارثر',
                    genre: 'كوميديا',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/comedie/4/small.jpg'
                },
                {
                    id: '5',
                    title: 'ارثر',
                    genre: 'كوميديا',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/comedie/5/small.jpg'
                },
                {
                    id: '6',
                    title: 'ارثر',
                    genre: 'كوميديا',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/comedie/6/small.jpg'
                },
                {
                    id: '7',
                    title: 'ارثر',
                    genre: 'كوميديا',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/comedie/7/small.jpg'
                },
                {
                    id: '8',
                    title: 'ارثر',
                    genre: 'كوميديا',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/comedie/8/small.jpg'
                },
            ],
        },
        {
            id: '1',
            title: 'الجديد',
            type: 'new',
            items: [
                {
                    id: '1',
                    title: 'ارثر',
                    genre: 'الجديد',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/new/1/small.jpg'
                },
                {
                    id: '2',
                    title: 'ارثر',
                    genre: 'الجديد',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/new/2/small.jpg'
                },
                {
                    id: '3',
                    title: 'ارثر',
                    genre: 'الجديد',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/new/3/small.jpg'
                },
                {
                    id: '4',
                    title: 'ارثر',
                    genre: 'الجديد',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/new/4/small.jpg'
                },
                {
                    id: '5',
                    title: 'ارثر',
                    genre: 'الجديد',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/new/5/small.jpg'
                },
                {
                    id: '6',
                    title: 'ارثر',
                    genre: 'الجديد',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/new/6/small.jpg'
                },
                {
                    id: '7',
                    title: 'ارثر',
                    genre: 'الجديد',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/new/7/small.jpg'
                },
                {
                    id: '8',
                    title: 'ارثر',
                    genre: 'الجديد',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/new/8/small.jpg'
                },
                {
                    id: '9',
                    title: 'ارثر',
                    genre: 'الجديد',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/new/9/small.jpg'
                },
                {
                    id: '10',
                    title: 'ارثر',
                    genre: 'الجديد',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/new/10/small.jpg'
                },
                {
                    id: '11',
                    title: 'ارثر',
                    genre: 'الجديد',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/new/11/small.jpg'
                },
                {
                    id: '12',
                    title: 'ارثر',
                    genre: 'الجديد',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/new/12/small.jpg'
                },
                {
                    id: '13',
                    title: 'ارثر',
                    genre: 'الجديد',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/new/13/small.jpg'
                },
            ],
        },
    ]

    function toggleArrows(id, state) {
        if (state) {
            rightArrowRef.current[id].classList.remove('hidden')
            leftArrowRef.current[id].classList.remove('hidden')
        }
        else {
            rightArrowRef.current[id].classList.add('hidden')
            leftArrowRef.current[id].classList.add('hidden')
        }
        setShowArrows(state)
    }

    return (
        <Content>
            <Content.Container>
                {/* Section Planets */}
                <Scroller>
                    <Scroller.Container>
                        <Planet> <Planet.Image URL={"Action"} alt={"Action"} /></Planet>
                        <Planet> <Planet.Image URL={"Action"} alt={"Action"} /></Planet>
                        <Planet> <Planet.Image URL={"Action"} alt={"Action"} /></Planet>
                        <Planet> <Planet.Image URL={"Action"} alt={"Action"} /></Planet>
                        <Planet> <Planet.Image URL={"Action"} alt={"Action"} /></Planet>
                        <Planet> <Planet.Image URL={"Action"} alt={"Action"} /></Planet>
                        <Planet> <Planet.Image URL={"Action"} alt={"Action"} /></Planet>
                        <Planet> <Planet.Image URL={"Action"} alt={"Action"} /></Planet>
                        <Planet> <Planet.Image URL={"Action"} alt={"Action"} /></Planet>
                        <Planet> <Planet.Image URL={"Action"} alt={"Action"} /></Planet>
                    </Scroller.Container>
                </Scroller>

                {/* Section Content */}
                {DUMMY_CONTENT.map(slide => (
                    <Slider key={slide.id}>
                        <Slider.Title>{slide.title}</Slider.Title>
                        <Slider.Container >
                            <Slider.RightArrow ref={elem => rightArrowRef.current[slide.id] = elem} />
                            <Slider.Content handleHover={toggleArrows} id={slide.id} >
                                {slide.items.map(item => (
                                    <Card key={item.id}>
                                        <Card.Image URL={item.imageURL} id={item.id} title={item.title} type={slide.type} />
                                        <Card.Meta>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Subtitle>{item.subtitle}</Card.Subtitle>
                                            <Card.PlayButton>مشاهدة</Card.PlayButton>
                                            <Card.FavButton>المفضلة</Card.FavButton>
                                        </Card.Meta>
                                    </Card>
                                ))}
                            </Slider.Content>
                            <Slider.LeftArrow ref={elem => leftArrowRef.current[slide.id] = elem} />
                        </Slider.Container>
                    </Slider>
                ))}
            </Content.Container>
        </Content>
    )
}


    // if we are haveing a known count of slides, and we are receving
    // the Contents in one object with no filter on it.
    // we can yes the folloing function
    // const filterVideos = (videos, genre) =>{
    //     return videos.filter(video => video.tags.includes(genre))
    // }
