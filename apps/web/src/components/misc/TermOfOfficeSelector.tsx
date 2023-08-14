import { Select } from '@chakra-ui/react';

import { useTermOfOfficesQuery } from '@/api/graphql';
import { useCurrentTermId } from '@/hooks/useCurrentTermId';

export const TermOfOfficeSelector = () => {
  const { data } = useTermOfOfficesQuery();

  const [selectedTerm, setSelectedTerm] = useCurrentTermId();

  const terms = data?.termOfOffices.data;
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const term = terms?.find((x) => x.id === e.target.value);

    if (term === undefined) {
      return;
    }

    setSelectedTerm(term.id);
  };

  return (
    <Select onChange={handleChange} value={selectedTerm} id="terms">
      {data?.termOfOffices.data.map((term) => (
        <option value={term.id} key={term.id}>
          {term.attributes.term_of_office}
        </option>
      ))}
    </Select>
  );
};
