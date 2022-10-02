import { useEffect, useState } from "react";
import axios from 'axios';

function OrganisationStructure({ Component, pageProps }: any) {
  const [composition, setComposition] = useState("");
  useEffect(() => {
    axios.get('global').then((res) => {
      setComposition(res.data.data.attributes.parliamentary_composition);
    });
  }, []);

  return composition;
}

export default OrganisationStructure;
