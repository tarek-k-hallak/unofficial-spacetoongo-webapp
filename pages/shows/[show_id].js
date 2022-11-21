import { useRouter } from "next/router"

export default function Show() {
    const router = useRouter()

    const showId = router.query.show_id;

    return (
        <div>
            here is your show ID: {showId}
        </div>
    )
}
