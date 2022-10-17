import { FC, useEffect, useState } from "react";
import TermOfOfficeSelector from "../components/term-of-office-selector";
import axios from 'axios';
import { format } from "date-fns";
import Link from "next/link";
import Loader from "../components/loader";
import { Pagination as FlowbitePagination } from 'flowbite-react';

interface ResolutionsProps {
  meetingId?: number;
}

const Resolutions: FC<ResolutionsProps> = (props) => {
  const [resolutions, setResolutions] = useState<any[]>([]);
  const [currentTerm, setCurrentTerm] = useState<number>();
  const [pageSize, setPageSize] = useState<number>(10);
  const [totalElements, setTotalElements] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [header, setHeader] = useState<string>('');
  useEffect(() => {
    setIsLoading(true);
    if (currentTerm) {
      setHeader('Uchwały parlamentu');
      axios.get(`resolutions?filters[meeting][term_of_office][id][$eq]=${currentTerm}
        &populate[0]=meeting&populate[1]=document
        &sort[0]=id:desc&pagination[start]=${(currentPage - 1) * pageSize}&pagination[limit]=${pageSize}`).then((res: any) => {
        setResolutions(res.data.data);
        setTotalElements(res.data.meta.pagination.total);
        setIsLoading(false);
      });
    } else if (props.meetingId) {
      axios.get(`resolutions?&populate[0]=meeting&populate[1]=document&filters[meeting][id][$eq]=${props.meetingId}
        &sort[0]=id:desc&pagination[start]=${(currentPage - 1) * pageSize}&pagination[limit]=${pageSize}`).then((res: any) => {
        setHeader('Uchwały posiedzenia parlamentu');
        setResolutions(res.data.data);
        setTotalElements(res.data.meta.pagination.total);
        setIsLoading(false);
      });
    }
  }, [currentPage, currentTerm, pageSize, props.meetingId]);

  const onTermChange = (termId: number) => {
    setCurrentTerm(termId);
  };

  return <>
    {(isLoading) && <Loader />}
    <div className="overflow-x-auto relative">
      <h1 className="font-medium leading-tight text-3xl mt-0 mb-2 text-black-600">
        {header}
      </h1>
      {!props.meetingId &&
        <div className="flex justify-end mb-6">
          <div>
            <TermOfOfficeSelector onTermChange={onTermChange} />
          </div>
        </div>}
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              #
            </th>
            <th scope="col" className="py-3 px-6">
              Numer
            </th>
            <th scope="col" className="py-3 px-6">
              Nazwa
            </th>
            <th scope="col" className="py-3 px-6">
              Rodzaj
            </th>
            {!props.meetingId &&
              <th scope="col" className="py-3 px-6">
                Nazwa posiedzenia
              </th>}
            <th scope="col" className="py-3 px-6">
              Data dodania
            </th>
            <th scope="col" className="py-3 px-6">
            </th>
          </tr>
        </thead>
        <tbody>
          {
            resolutions.map((resolution, index: number) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={resolution.id}>
                <td className="py-4 px-6">
                  {index + 1 + (currentPage - 1) * pageSize}
                </td>
                <td className="py-4 px-6">
                  {resolution.attributes.number}
                </td>
                <td className="py-4 px-6">
                  {resolution.attributes.name}
                </td>
                <td className="py-4 px-6">
                  {resolution.attributes.type}
                </td>
                {!props.meetingId &&
                  <td className="py-4 px-6">
                    {resolution.attributes.meeting.data.attributes.name}
                  </td>}
                <td className="py-4 px-6">
                  {format(new Date(resolution.attributes.createdAt), 'dd-MM-yyyy HH:mm:ss')}
                </td>
                <td className="py-4 px-6">
                  <Link href={process.env.NEXT_PUBLIC_API_URL + resolution.attributes.document.data.attributes.url}>
                    Pobierz
                  </Link>
                </td>
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

export default Resolutions;
