import { useRouter } from "next/router";
import { FC } from "react"
import Resolutions from "../uchwaly"

const Meeeting: FC = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <Resolutions meetingId={parseInt(id as string)} />
    )
}

export default Meeeting;