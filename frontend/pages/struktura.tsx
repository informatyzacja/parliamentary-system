import { useEffect, useState } from "react";
import axios from 'axios';
import Loader from "../components/loader";

function OrganisationStructure({ Component, pageProps }: any) {
  const [composition, setComposition] = useState("");
  useEffect(() => {
    axios.get('global').then((res) => {
      setComposition(res.data.data.attributes.parliamentary_composition);
    });
  }, []);

  return <><div>
    <strong>Parlament jest najwyższym uchwałodawczym organem Samorządu Studenckiego na Uczelni. W jego skład wchodzą:</strong>
    <br /><br />
    <ul className="list-disc">
      <li>członkowie Studenckiego Kolegium Wyborczego,</li>
      <li>członkowie Zarządu Parlamentu Studentów,</li>
      <li>czterej członkowie Rady UOS, w tym Przewodniczący Rady UOS,</li>
      <li>jeden delegat z Filii,</li>
      <li>delegat z grupy Rad Mieszkańców z głosem doradczym,</li>
      <li>członkowie Kolegium Senatorów Studenckich z głosem doradczym,</li>
      <li>pełnomocnicy Zarządu Parlamentu Studentów z głosem doradczym,</li>
      <li>dwóch delegatów z pozostałych Filii z głosem doradczym.</li>
    </ul>
</div></>;
}

export default OrganisationStructure;
