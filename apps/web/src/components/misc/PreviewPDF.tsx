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
        size={{ base: 'full', md: '3xl', lg: '4xl' }}
        isOpen={modal.isOpen}
        onClose={modal.onClose}
        isCentered={true}
      >
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent height={{ base: '100%', md: '90vh' }}>
          <ModalHeader mr={8} textOverflow="ellipsis">
            {filename}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody px={0} pb={0}>
            <Box
              shadow="md"
              h="100%"
              overflowY="scroll"
              borderBottomRadius={{ md: 'md' }}
            >
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
