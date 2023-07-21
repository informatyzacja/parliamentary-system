import { DownloadIcon } from '@chakra-ui/icons';
import {
  Button,
  Link as ChakraLink,
  Link,
  ScaleFade,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { format } from 'date-fns';
import NextLink from 'next/link';
import { useTranslation } from 'next-i18next';
import React from 'react';

export const Resolutions = ({
  resolutions,
  showMeetings = false,
  pagination,
}: {
  resolutions: Array<{
    id: string;
    attributes: {
      name: string;
      publishedAt: Date;
      meeting?: {
        data: {
          id: string;
          attributes: {
            name: string;
          };
        };
      };
      document?: {
        data: {
          id?: string;
          attributes?: {
            url: string;
          };
        } | null;
      };
      attachments?: {
        data: Array<{
          id?: string;
          attributes?: {
            name: string;
            url: string;
          };
        }>;
      };
    };
  }>;
  showMeetings?: boolean;
  pagination: {
    currentPage: number;
    pageSize: number;
  };
}) => {
  const { t } = useTranslation('common');

  return (
    <ScaleFade initialScale={0.9} in={true}>
      <TableContainer maxW="90vw">
        <Table size="lg">
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>{t('name')}</Th>
              {showMeetings ? <Th>{t('meeting.title')}</Th> : null}
              <Th>{t('addition-date')}</Th>
              <Th />
            </Tr>
          </Thead>
          <Tbody>
            {resolutions.map((resolution, index: number) => (
              <Tr key={resolution.id}>
                <Td>
                  {index +
                    1 +
                    (pagination.currentPage - 1) * pagination.pageSize}
                </Td>
                <Td>{resolution.attributes.name}</Td>
                {showMeetings && resolution.attributes.meeting ? (
                  <Td>
                    <NextLink
                      href={`/posiedzenia/${resolution.attributes.meeting.data.id}`}
                      passHref={true}
                    >
                      <Link>
                        {resolution.attributes.meeting.data.attributes.name}
                      </Link>
                    </NextLink>
                  </Td>
                ) : null}
                <Td>
                  {format(
                    new Date(resolution.attributes.publishedAt),
                    'dd/MM/yyyy HH:mm:ss',
                  )}
                </Td>
                <Td>
                  {resolution.attributes.document?.data === null ? (
                    <Button
                      leftIcon={<DownloadIcon />}
                      size="sm"
                      isDisabled={true}
                    >
                      {t('Download')}
                    </Button>
                  ) : (
                    <ChakraLink
                      href={
                        process.env.NEXT_PUBLIC_API_URL +
                        (resolution.attributes.document?.data.attributes?.url ??
                          '/404')
                      }
                      target="_blank"
                    >
                      <Button leftIcon={<DownloadIcon />} size="sm">
                        {t('Download')}
                      </Button>
                    </ChakraLink>
                  )}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </ScaleFade>
  );
};
