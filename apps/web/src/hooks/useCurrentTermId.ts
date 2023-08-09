import { useAtom } from 'jotai';

import { useCurrentTermOfOfficeQuery } from '@/api/graphql';
import { termOfOfficeIdAtom } from '@/atoms/termOfOffice.atom';

export const useCurrentTermId = () => {
  const [currentTerm, setCurrentTerm] = useAtom(termOfOfficeIdAtom);

  useCurrentTermOfOfficeQuery({
    onCompleted: (data) => {
      if (currentTerm === undefined) {
        setCurrentTerm(
          data.global.data.attributes.current_term_of_office.data.id,
        );
      }
    },
    skip: currentTerm !== undefined,
  });

  return [currentTerm, setCurrentTerm] as const;
};
