import axios from 'axios';
import { useEffect, useState } from 'react';
import TermOfOfficeSelector from '../components/term-of-office-selector';
import { format } from 'date-fns';
import Link from 'next/link';
import Loader from '../components/loader';
import { Pagination as FlowbitePagination } from 'flowbite-react';

export default function Meetings({ Component, pageProps }: any) {
  const [meetings, setMeetings] = useState<any[]>([]);
  const [currentTerm, setCurrentTerm] = useState<number>();
  const [pageSize, setPageSize] = useState<number>(10);
  const [totalElements, setTotalElements] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (currentTerm) {
      setIsLoading(true);
      axios.get(`meetings?filters[term_of_office][id][$eq]=${currentTerm}
        &sort[0]=date:desc&sort[1]=id:desc&pagination[start]=${(currentPage - 1) * pageSize}&pagination[limit]=${pageSize}`).then((res) => {
        setIsLoading(false);
        setMeetings(res.data.data);
        setTotalElements(res.data.meta.pagination.total);
      });
    }
  }, [currentTerm, pageSize, currentPage]);

  const onTermChange = (termId: number) => {
    setCurrentTerm(termId);
  };

  return <>
    <h1 className="font-medium leading-tight text-3xl mt-0 mb-2 text-black-600">
      Posiedzenia parlamentu
    </h1>
    {isLoading && <Loader />}
    <div className="overflow-x-auto relative">
      <div className="flex justify-end mb-6">
        <div>
          <TermOfOfficeSelector onTermChange={onTermChange} />
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
            <th scope="col" className="py-3 px-6">
              Uchwały
            </th>
          </tr>
        </thead>
        <tbody>
          {
            meetings.map((meeting, index: number) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={meeting.id}>
                <td className="py-4 px-6">
                  {index + 1 + (currentPage - 1) * pageSize}
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
                <td className="py-4 px-6"><Link href={`/posiedzenie/${meeting.id}`}>Przejdź do uchwał</Link></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
    <div className="flex justify-end">
      {Math.ceil(totalElements / pageSize) > 1 && <FlowbitePagination
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        showIcons={true}
        totalPages={Math.ceil(totalElements / pageSize)}
        previousLabel=""
        nextLabel=""
      />}
    </div>
  </>
}
