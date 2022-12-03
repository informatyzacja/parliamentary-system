import { FC, useEffect, useState } from "react";
import axios from "axios";
import { useTermOfOfficesQuery } from "../api/graphql";
import { Select } from "@chakra-ui/react";

export interface TermOfOfficeSelectorProps {
  onTermChange: (termId: number) => any;
}

const TermOfOfficeSelector: FC<TermOfOfficeSelectorProps> = (props) => {
  const { data } = useTermOfOfficesQuery({
    onCompleted: (data) => {
      if (data.termOfOffices.data.length > 0) {
        props.onTermChange(parseInt(data.termOfOffices.data[0].id));
      }
    },
  });
  const [selectedTerm, setSelectedTerm] = useState<any>();

  const terms = data?.termOfOffices?.data;
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const term = terms?.find((x) => x.id! === e.target.value);

    if (term === undefined) {
      return;
    }

    setSelectedTerm(term);
    props.onTermChange(parseInt(term.id ?? ""));
  };

  return (
    <div>
      <label
        htmlFor="terms"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Wybierz kadencję
      </label>
      <Select onChange={handleChange} value={selectedTerm?.id} id="terms">
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
