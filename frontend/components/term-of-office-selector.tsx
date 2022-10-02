import { useEffect, useState } from "react"
import axios from 'axios';

export default function TermOfOfficeSelector({ Component, pageProps }: any) {
    const [terms, setTerms] = useState<any[]>();
    const [selectedTerm, setSelectedTerm] = useState<any>();
    useEffect(() => {
        axios.get('term-of-offices').then((res) => {
            setTerms(res.data.data);
            setSelectedTerm(res.data.data[res.data.data.length - 1]);
        });
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTerm(terms?.find(x => x.id === parseInt(e.target.value)));
    };

    return <>
        <label htmlFor="terms" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Wybierz kadencję</label>
        <select onChange={handleChange} value={selectedTerm?.id} id="terms" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {terms?.map((term) => (
                <option value={term.id} key={term.id}>{term.attributes.term_of_office}</option>
            ))}
        </select>
    </>
}