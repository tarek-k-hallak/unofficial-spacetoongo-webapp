import { HeaderContainer, FooterContainer, HeroContainer } from '../../../containers'
import { useRouter } from "next/router"

export default function Show() {
    const router = useRouter()
    const show_Id = router.query.show_id;
    const show_type = router.query.type;

    return (
        <div>
            <HeaderContainer />
            <HeroContainer
                show_Id={"show_Id"}
                show_type={"show_type"}
                showInfo={false} />
            <div> here is your show ID: {show_Id}</div>
            <div> here is your show type: {show_type}</div>
            <FooterContainer />
        </div>
    )
}
