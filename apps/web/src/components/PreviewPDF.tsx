import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export const PreviewPDF = ({
  url,
  filename,
}: {
  url: string;
  filename: string;
}) => {
  const { t } = useTranslation('common');
  const modal = useDisclosure();
  const [numberOfPages, setNumberOfPages] = useState<number>(0);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumberOfPages(numPages);
  };

  return (
    <>
      <Button onClick={modal.onOpen}>{t('preview')}</Button>
      <Modal size="2xl" isOpen={modal.isOpen} onClose={modal.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{filename}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box shadow="md" h="550px" overflowY="scroll">
              <Document onLoadSuccess={onDocumentLoadSuccess} file={url}>
                {Array.from(new Array(numberOfPages), (_, index) => (
                  <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                ))}
              </Document>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
