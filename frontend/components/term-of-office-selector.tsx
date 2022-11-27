import { FC, useEffect, useState } from "react"
import axios from 'axios';

export interface TermOfOfficeSelectorProps {
    onTermChange: (termId: number) => any;
}

const TermOfOfficeSelector: FC<TermOfOfficeSelectorProps> = (props) => {
    const [terms, setTerms] = useState<any[]>();
    const [selectedTerm, setSelectedTerm] = useState<any>();
    useEffect(() => {
        axios.get('term-of-offices').then((res) => {
            setTerms(res.data.data);
            setSelectedTerm(res.data.data[res.data.data.length - 1]);
            props.onTermChange(res.data.data[res.data.data.length - 1].id);
        });
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const term = terms?.find(x => x.id === parseInt(e.target.value));
        setSelectedTerm(term);
        props.onTermChange(term.id);
    };

    return <div>
        <label htmlFor="terms" className="block mb-2 text-sm font-medium text-gray-900">Wybierz kadencję</label>
        <select onChange={handleChange} value={selectedTerm?.id} id="terms" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block">
            {terms?.map((term) => (
                <option value={term.id} key={term.id}>{term.attributes.term_of_office}</option>
            ))}
        </select>
    </div>
}

export default TermOfOfficeSelector;