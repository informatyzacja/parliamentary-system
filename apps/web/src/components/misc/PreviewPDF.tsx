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
import React from 'react';

export const PreviewPDF = ({
  url,
  filename,
}: {
  url: string;
  filename: string;
}) => {
  const { t } = useTranslation('common');
  const modal = useDisclosure();

  return (
    <>
      <Button onClick={modal.onOpen}>{t('preview')}</Button>
      <Modal
        size="4xl"
        isOpen={modal.isOpen}
        onClose={modal.onClose}
        isCentered={true}
      >
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent height="90vh">
          <ModalHeader>{filename}</ModalHeader>
          <ModalCloseButton />
          <ModalBody mb={4}>
            <Box shadow="md" h="100%" overflowY="scroll">
              <object
                type="application/pdf"
                data={url}
                aria-label={filename}
                width="100%"
                height="100%"
              >
                {filename}
              </object>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
