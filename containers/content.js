import { useRef, useState } from 'react'
import { Content, Slider, Card } from '../components'

export default function ContentContainer() {
    const rightArrowRef = useRef()
    const leftArrowRef = useRef()
    const [showArrows, setShowArrows] = useState(false)

    const DUMMY_CONTENT = [
        {
            id: '1',
            title: 'اطفال',
            items: [
                {
                    id: '1',
                    title: 'ارثر',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/images/sections/hero2.jpg'
                },
                {
                    id: '2',
                    title: 'ارثر',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/children/arthur/small.jpg'
                },
                {
                    id: '3',
                    title: 'ارثر',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/children/arthur/small.jpg'
                },
                {
                    id: '4',
                    title: 'ارثر',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/children/arthur/small.jpg'
                },
                {
                    id: '5',
                    title: 'ارثر',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/children/arthur/small.jpg'
                },
                {
                    id: '6',
                    title: 'ارثر',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/children/arthur/small.jpg'
                },
                {
                    id: '7',
                    title: 'ارثر',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/children/arthur/small.jpg'
                },
                {
                    id: '8',
                    title: 'ارثر',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/children/arthur/small.jpg'
                },
                {
                    id: '9',
                    title: 'ارثر',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/children/arthur/small.jpg'
                },
                {
                    id: '10',
                    title: 'ارثر',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/children/arthur/small.jpg'
                },
                {
                    id: '11',
                    title: 'ارثر',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/children/arthur/small.jpg'
                },
                {
                    id: '12',
                    title: 'ارثر',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/children/arthur/small.jpg'
                },
                {
                    id: '13',
                    title: 'ارثر',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/children/arthur/small.jpg'
                },

            ],
        },
        {
            id: '2',
            title: 'سبيس باور',
            items: [
                {
                    id: '1',
                    title: 'ارثر',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/children/arthur/small.jpg'
                },
                {
                    id: '2',
                    title: 'ارثر',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/children/arthur/small.jpg'
                },
                {
                    id: '3',
                    title: 'ارثر',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/children/arthur/small.jpg'
                },
                {
                    id: '4',
                    title: 'ارثر',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/children/arthur/small.jpg'
                },
            ],
        },
        {
            id: '3',
            title: 'كوميديا',
            items: [
                {
                    id: '1',
                    title: 'ارثر',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/children/arthur/small.jpg'
                },
                {
                    id: '2',
                    title: 'ارثر',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/children/arthur/small.jpg'
                },
                {
                    id: '3',
                    title: 'ارثر',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/children/arthur/small.jpg'
                },
                {
                    id: '4',
                    title: 'ارثر',
                    subtitle: 'lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit obcaecati molestiae laboriosam?em',
                    imageURL: '/assets/series/children/arthur/small.jpg'
                },
            ],
        },
    ]

    // if we are haveing a known count of slides, and we are receving 
    // the Contents in one object with no filter on it.
    // we can yes the folloing function
    // const filterVideos = (videos, genre) =>{
    //     return videos.filter(video => video.tags.includes(genre))
    // }

    function toggleArrows() {
        setShowArrows(!showArrows)
        if (!showArrows) {
            rightArrowRef.current.classList.remove("hidden")
            leftArrowRef.current.classList.remove("hidden")
        }
        else {
            rightArrowRef.current.classList.add("hidden")
            leftArrowRef.current.classList.add("hidden")
        }
    }

    return (
        <Content>
            <Content.Container>
                {DUMMY_CONTENT.map(row => (
                    <Slider key={row.id}>
                        <Slider.Title>{row.title}</Slider.Title>
                        <Slider.Container toggleArrows={toggleArrows}>
                            <Slider.RightArrow ref={rightArrowRef} />
                            <Slider.Content >
                                {row.items.map(item => (
                                    <Card key={item.id}>
                                        <Card.Image item={item} />
                                        <Card.Meta>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Subtitle>{item.subtitle}</Card.Subtitle>
                                            <Card.PlayButton>مشاهدة</Card.PlayButton>
                                            <Card.FavButton>المفضلة</Card.FavButton>
                                        </Card.Meta>
                                    </Card>
                                ))}
                            </Slider.Content>
                            <Slider.LeftArrow ref={leftArrowRef} />
                        </Slider.Container>
                    </Slider>
                ))}
            </Content.Container>
        </Content>
    )
}
