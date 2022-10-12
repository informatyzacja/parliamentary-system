import Link from "next/link";
import { useEffect, useState } from "react";
import axios from 'axios';
import { format } from "date-fns";
import Loader from "../components/loader";

function LatestUpdates({ Component, pageProps }: any) {
  const [meetings, setMeetings] = useState<any[]>([]);
  const [resolutions, setResolutions] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get('meetings?pagination[start]=0&pagination[limit]=10&sort[0]=date:desc&sort[1]=id:desc').then((res) => {
      setIsLoading(false);
      setMeetings(res.data.data);
    });
    axios.get('resolutions?populate[0]=document&pagination[start]=0&pagination[limit]=10&sort[0]=id:desc').then((res) => {
      setIsLoading(false);
      setResolutions(res.data.data);
    });
  }, []);
  return <>
    {isLoading && <Loader />}
    <div className="grid md:grid-cols-2">
      <div className="px-4">
        <div>Ostatnie posiedzenia</div>
        <div>
          <ul className="bg-white rounded-lg border border-gray-200 text-gray-900">
            {meetings.map(meeting => (
              <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg flex justify-between" key={meeting.id}>
                <span>{format(new Date(meeting.attributes.date), "dd-MM-yyyy")} {meeting.attributes.name}</span>
                <Link href={`/posiedzenie/${meeting.id}`}>więcej</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="px-4">
        <div>Ostatnie uchwały</div>
        <div>
          <ul className="bg-white rounded-lg border border-gray-200 text-gray-900">
            {resolutions.map((resolution) => (
              <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg flex justify-between" key={resolution.id}>
                <div>{resolution.attributes.name}
                  <div>Dodano: {format(new Date(resolution.attributes.createdAt), 'dd-MM-yyyy HH:mm:ss')}</div>
                </div>
                <Link href={process.env.NEXT_PUBLIC_API_URL + resolution.attributes.document.data.attributes.url}>pobierz</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </>
}

export default LatestUpdates;
