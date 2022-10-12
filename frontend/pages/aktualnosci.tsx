import Link from "next/link";
import { useEffect, useState } from "react";
import axios from 'axios';
import { format } from "date-fns";

function LatestUpdates({ Component, pageProps }: any) {
  const [meetings, setMeetings] = useState<any[]>([]);
  const [resolutions, setResolutions] = useState<any[]>([]);

  useEffect(() => {
    axios.get('meetings?pagination[start]=0&pagination[limit]=10&sort[0]=date:desc&sort[1]=id:desc').then((res) => {
      setMeetings(res.data.data);
    });
    axios.get('resolutions?pagination[start]=0&pagination[limit]=10&sort[0]=id:desc').then((res) => {
      setResolutions(res.data.data);
    });
  }, []);
  return <div className="grid md:grid-cols-2">
    <div className="px-4">
      <div>Ostatnie posiedzenia</div>
      <div>
        <ul className="bg-white rounded-lg border border-gray-200 text-gray-900">
          {meetings.map(meeting => (
            <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg flex justify-between" key={meeting.id}>
              <span>{format(new Date(meeting.attributes.date), "dd-MM-yyyy")} {meeting.attributes.name}</span>
              <Link href={`/posiedzenia/${meeting.id}`}>więcej</Link>
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
              <Link href={`/uchwaly/${resolution.id}`}>czytaj</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
}

export default LatestUpdates;
