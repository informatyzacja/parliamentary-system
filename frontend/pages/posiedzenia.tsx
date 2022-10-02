import axios from 'axios';
import { useEffect, useState } from 'react';
import TermOfOfficeSelector from '../components/term-of-office-selector';
import { format } from 'date-fns';

export default function Meetings({ Component, pageProps }: any) {
  const [meetings, setMeetings] = useState<any[]>([]);
  useEffect(() => {
    axios.get('meetings').then((res) => {
      setMeetings(res.data.data);
    });
  }, []);

  return <><div className="overflow-x-auto relative">
    <div className="flex justify-end">
      <div>
        <TermOfOfficeSelector />
      </div>
    </div>
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="py-3 px-6">
            #
          </th>
          <th scope="col" className="py-3 px-6">
            Data spotkania
          </th>
          <th scope="col" className="py-3 px-6">
            Nazwa
          </th>
          <th scope="col" className="py-3 px-6">
            Miejsce
          </th>
        </tr>
      </thead>
      <tbody>
        {
          meetings.map((meeting, index: number) => (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={meeting.id}>
              <td className="py-4 px-6">
                {index + 1}
              </td>
              <td className="py-4 px-6">
                {format(new Date(meeting.attributes.date), 'dd-MM-yyyy HH:mm:ss')}
              </td>
              <td className="py-4 px-6">
                {meeting.attributes.name}
              </td>
              <td className="py-4 px-6">
                {meeting.attributes.place}
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>
  </>
}
