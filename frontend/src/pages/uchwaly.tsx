import { FC, useEffect, useState } from "react";
import TermOfOfficeSelector from "../components/TermOfOfficeSelector";
import axios from "axios";
import { format } from "date-fns";
import Loader from "../components/loader";
import { Pagination as FlowbitePagination } from "flowbite-react";
import {
  Center,
  Heading,
  Link,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";

interface ResolutionsProps {
  meetingId?: number;
}

const Resolutions: FC<ResolutionsProps> = (props) => {
  const [resolutions, seTresolutions] = useState<any[]>([]);
  const [currentTerm, setCurrentTerm] = useState<number>();
  const [pageSize, setPageSize] = useState<number>(10);
  const [totalElements, setTotalElements] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [header, setHeader] = useState<string>("");
  useEffect(() => {
    setIsLoading(true);
    if (currentTerm) {
      setHeader("Uchwały parlamentu");
      axios
        .get(
          `resolutions?filters[meeting][term_of_office][id][$eq]=${currentTerm}
        &populate[0]=meeting&populate[1]=document
        &sort[0]=id:desc&pagination[start]=${
          (currentPage - 1) * pageSize
        }&pagination[limit]=${pageSize}`
        )
        .then((res: any) => {
          seTresolutions(res.data.data);
          setTotalElements(res.data.meta.pagination.total);
          setIsLoading(false);
        });
    } else if (props.meetingId) {
      axios
        .get(
          `resolutions?&populate[0]=meeting&populate[1]=document&filters[meeting][id][$eq]=${
            props.meetingId
          }
        &sort[0]=id:desc&pagination[start]=${
          (currentPage - 1) * pageSize
        }&pagination[limit]=${pageSize}`
        )
        .then((res: any) => {
          setHeader("Uchwały posiedzenia parlamentu");
          seTresolutions(res.data.data);
          setTotalElements(res.data.meta.pagination.total);
          setIsLoading(false);
        });
    }
  }, [currentPage, currentTerm, pageSize, props.meetingId]);

  const onTermChange = (termId: number) => {
    setCurrentTerm(termId);
  };

  return (
    <>
      {isLoading && <Loader />}
      <Center>
        <VStack>
          <Heading size="md">{header}</Heading>
          {!props.meetingId && (
            <div>
              <div>
                <TermOfOfficeSelector onTermChange={onTermChange} />
              </div>
            </div>
          )}
          <TableContainer>
            <Table size="lg" w="800px">
              <Thead>
                <Tr>
                  <Th scope="col" className="py-3 px-6">
                    #
                  </Th>
                  <Th scope="col" className="py-3 px-6">
                    Numer
                  </Th>
                  <Th scope="col" className="py-3 px-6">
                    Nazwa
                  </Th>
                  <Th scope="col" className="py-3 px-6">
                    Rodzaj
                  </Th>
                  {!props.meetingId && (
                    <Th scope="col" className="py-3 px-6">
                      Nazwa posiedzenia
                    </Th>
                  )}
                  <Th scope="col" className="py-3 px-6">
                    Data dodania
                  </Th>
                  <Th scope="col" className="py-3 px-6"></Th>
                </Tr>
              </Thead>
              <Tbody>
                {resolutions.map((resolution, index: number) => (
                  <Tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={resolution.id}
                  >
                    <Td className="py-4 px-6">
                      {index + 1 + (currentPage - 1) * pageSize}
                    </Td>
                    <Td className="py-4 px-6">
                      {resolution.attributes.number}
                    </Td>
                    <Td className="py-4 px-6">{resolution.attributes.name}</Td>
                    <Td className="py-4 px-6">{resolution.attributes.type}</Td>
                    {!props.meetingId && (
                      <Td className="py-4 px-6">
                        {resolution.attributes.meeting.data.attributes.name}
                      </Td>
                    )}
                    <Td className="py-4 px-6">
                      {format(
                        new Date(resolution.attributes.createdAt),
                        "dd-MM-yyyy HH:mm:ss"
                      )}
                    </Td>
                    <Td className="py-4 px-6">
                      <Link
                        href={
                          process.env.NEXT_PUBLIC_API_URL +
                          resolution.attributes.document.data.attributes.url
                        }
                      >
                        Pobierz
                      </Link>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </VStack>
      </Center>
      <div className="flex justify-end">
        {Math.ceil(totalElements / pageSize) > 1 && (
          <FlowbitePagination
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            showIcons={true}
            totalPages={Math.ceil(totalElements / pageSize)}
            previousLabel=""
            nextLabel=""
          />
        )}
      </div>
    </>
  );
};

export default Resolutions;
