import { FC } from "react";
import { useTermOfOfficesQuery } from "../api/graphql";
import { Select } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { termOfOfficeAtom } from "../atoms/termOfOffice.atom";

const TermOfOfficeSelector = () => {
  const { data } = useTermOfOfficesQuery();
  const [selectedTerm, setSelectedTerm] = useAtom(termOfOfficeAtom);

  const terms = data?.termOfOffices?.data;
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const term = terms?.find((x) => x.id! === e.target.value);

    if (term === undefined) {
      return;
    }

    setSelectedTerm(parseInt(term.id));
  };

  return (
    <div>
      <Select
        onChange={handleChange}
        value={selectedTerm?.toString()}
        id="terms"
      >
        {data?.termOfOffices?.data?.map((term) => (
          <option value={term.id ?? ""} key={term.id}>
            {term.attributes?.term_of_office}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default TermOfOfficeSelector;
