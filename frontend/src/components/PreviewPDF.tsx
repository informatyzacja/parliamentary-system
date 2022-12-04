import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import router from "next/router";
import React, { useState } from "react";
import { Document, Page } from "react-pdf";

import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export const PreviewPDF = ({
  url,
  filename,
}: {
  url: string;
  filename: string;
}) => {
  const modal = useDisclosure();
  const [numPages, setNumPages] = useState<number>(0);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <>
      <Button onClick={modal.onOpen}>Podgląd</Button>
      <Modal size="2xl" isOpen={modal.isOpen} onClose={modal.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{filename}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box shadow="md" h="550px" overflowY="scroll">
              <Document onLoadSuccess={onDocumentLoadSuccess} file={url}>
                {Array.from(new Array(numPages), (_, index) => (
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
