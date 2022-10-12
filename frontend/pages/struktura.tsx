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

  return <>{composition ? composition : <Loader />}</>;
}

export default OrganisationStructure;
