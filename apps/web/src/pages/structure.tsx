import { usePagination } from '@ajna/pagination';
import {
  Box,
  Center,
  Heading,
  ScaleFade,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
} from '@chakra-ui/react';
import uniqBy from 'lodash/uniqBy';
import type { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';

import { useStudentsQuery } from '@/api/graphql';
import { Loader } from '@/components/layout/Loader';
import { NoItems } from '@/components/layout/NoItems';
import { Pagination } from '@/components/layout/Pagination';
import { TermOfOfficeSelector } from '@/components/misc/TermOfOfficeSelector';
import { useCurrentTermId } from '@/hooks/useCurrentTermId';
import { useErrorHandler } from '@/hooks/useErrorHandler';

function OrganisationStructure() {
  const { t } = useTranslation('common');
  const [currentTermId] = useCurrentTermId();
  const errorHandler = useErrorHandler();
  const [totalPages, setTotalPages] = useState<number | undefined>(undefined);

  const pagination = usePagination({
    pagesCount: totalPages,
    initialState: {
      pageSize: 10,
      currentPage: 1,
    },
    limits: {
      inner: 1,
      outer: 1,
    },
  });

  const studentsQuery = useStudentsQuery({
    variables: {
      termId: currentTermId ?? '',
      page: pagination.currentPage,
      pageSize: pagination.pageSize,
    },
    onCompleted(data) {
      setTotalPages(data.students.meta.pagination.pageCount);
    },
    skip: !currentTermId,
    onError: errorHandler,
  });

  const students = uniqBy(studentsQuery.data?.students.data, 'id');

  useEffect(() => {
    pagination.setCurrentPage(1);
  }, [currentTermId]);

  return (
    <Center>
      <VStack>
        <Heading size="lg" mb={8}>
          {t('organisation-structure')}
        </Heading>
        <Box mt="1 !important" mb="4 !important">
          <TermOfOfficeSelector />
        </Box>
        {studentsQuery.loading ? <Loader /> : null}
        {students.length > 0 ? (
          <ScaleFade in={true}>
            <TableContainer px={4} maxW={['95vw', null, null, '1000px']}>
              <Table variant="simple" size="lg">
                <Thead>
                  <Tr>
                    <Th>#</Th>
                    <Th>{t('first-name')}</Th>
                    <Th>{t('last-name')}</Th>
                    <Th>{t('functions')}</Th>
                    <Th>{t('student-number')}</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {students.map((student, index) => (
                    <Tr key={index}>
                      <Td>
                        {index +
                          1 +
                          (pagination.currentPage - 1) * pagination.pageSize}
                      </Td>
                      <Td>{student.attributes.name}</Td>
                      <Td>{student.attributes.surname}</Td>
                      <Td>
                        {student.attributes.functions
                          .filter(
                            (func) =>
                              func.term_of_office.data.id === currentTermId,
                          )
                          .at(0)
                          ?.functions.data.sort(
                            (func) => func.attributes.position,
                          )
                          .map(({ attributes }) => attributes.name)
                          .join(', ')}
                      </Td>
                      <Td>{student.attributes.student_number}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
            <Center>
              <Pagination
                current={pagination.currentPage}
                setCurrent={pagination.setCurrentPage}
                pageCount={pagination.pagesCount}
                pages={pagination.pages}
              />
            </Center>
          </ScaleFade>
        ) : null}
        {studentsQuery.data?.students.data.length === 0 &&
        !studentsQuery.loading ? (
          <NoItems>{t('no-data')}</NoItems>
        ) : null}
      </VStack>
    </Center>
  );
}

export const getStaticProps: GetStaticProps<object> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'pl', ['common'])),
  },
});

export default OrganisationStructure;
