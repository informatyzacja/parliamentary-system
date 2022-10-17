import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import Resolutions from "../uchwaly";
import axios from 'axios';
import Link from "next/link";

const Meeeting: FC = () => {
    const router = useRouter();
    const { id } = router.query;
    const [meeting, setMeeting] = useState<any>({});
    const [header, setHeader] = useState<string>('');
    useEffect(() => {
        if (id) {
            axios.get(`meetings?filters[id][$eq]=${id}&populate[0]=agenda&populate[1]=reports`).then((res) => {
                setHeader(res.data.data[0].attributes.name);
                setMeeting(res.data.data[0]);
                console.log(res.data.data[0])
            });
        }
    }, [id]);

    return (<>
        <h1 className="font-medium leading-tight text-4xl mt-0 mb-5 text-black-600">
            {header}
        </h1>
        {meeting.attributes?.agenda.data && <h1 className="font-medium leading-tight text-3xl mt-0 mb-5 mt-5 text-black-600">
            <Link href={process.env.NEXT_PUBLIC_API_URL + meeting.attributes?.agenda?.data.attributes.url}>Agenda posiedzenia</Link>
        </h1>}
        <h1 className="font-medium leading-tight text-3xl mt-0 mb-2 mt-5 text-black-600">
            Sprawozdania z posiedzenia
        </h1>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mb-5">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="py-3 px-6">
                        #
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Nazwa
                    </th>
                </tr>
            </thead>
            <tbody>
                {meeting.attributes?.reports.data && meeting.attributes.reports?.data.map((report: any, index: number) => (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={meeting.id}>
                        <td className="py-4 px-6">
                            {index + 1}
                        </td>
                        <td className="py-4 px-6">
                            <Link href={process.env.NEXT_PUBLIC_API_URL + report.attributes.url}>{report.attributes.name}</Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        <Resolutions meetingId={parseInt(id as string)} />

    </>
    )
}

export default Meeeting;