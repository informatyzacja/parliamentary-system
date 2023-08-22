import { ArrowForwardIcon, DownloadIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/next-js';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
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
import { useTranslation } from 'next-i18next';
import React from 'react';

import type {
  MeetingEntity,
  ResolutionEntity,
  UploadFileEntity,
} from '@/api/graphql';
import type { Optional } from '@/types/Optional';

export const Resolutions = ({
  resolutions,
  showMeetings = false,
  pagination,
}: {
  resolutions: ResolutionEntity[];
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
                {showMeetings &&
                (resolution.attributes.meeting
                  .data as Optional<MeetingEntity>) ? (
                  <Td>
                    <Link
                      href={`/meetings/${resolution.attributes.meeting.data.id}`}
                    >
                      {resolution.attributes.meeting.data.attributes.name}
                    </Link>
                  </Td>
                ) : null}
                <Td>
                  {format(
                    new Date(resolution.attributes.publishedAt as string),
                    'dd/MM/yyyy HH:mm:ss',
                  )}
                </Td>
                <Td>
                  <Link href={`/resolutions/${resolution.id}`}>
                    <Button leftIcon={<ArrowForwardIcon />} size="sm">
                      {t('More')}
                    </Button>
                  </Link>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </ScaleFade>
  );
};
