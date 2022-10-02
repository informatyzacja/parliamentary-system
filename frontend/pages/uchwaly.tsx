import { useEffect, useState } from "react";
import TermOfOfficeSelector from "../components/term-of-office-selector";
import axios from 'axios';
import { format } from "date-fns";

function Resolutions({ Component, pageProps }: any) {
  const [resolutions, setResolutions] = useState<any[]>([]);
  useEffect(() => {
    axios.get('resolutions').then((res) => {
      setResolutions(res.data.data);
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
            Numer
          </th>
          <th scope="col" className="py-3 px-6">
            Nazwa
          </th>
          <th scope="col" className="py-3 px-6">
            Rodzaj
          </th>
          <th scope="col" className="py-3 px-6">
            Data dodania
          </th>
        </tr>
      </thead>
      <tbody>
        {
          resolutions.map((resolution, index: number) => (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={resolution.id}>
              <td className="py-4 px-6">
                {index + 1}
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
              <td className="py-4 px-6">
                {format(new Date(resolution.attributes.createdAt), 'dd-MM-yyyy HH:mm:ss')}
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>
  </>
}

export default Resolutions;
