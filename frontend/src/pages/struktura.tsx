import {
  Center,
  Heading,
  ListItem,
  ScaleFade,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";

function OrganisationStructure() {
  return (
    <Center>
      <ScaleFade in={true}>
        <VStack>
          <Heading size="lg" mb={8}>
            Struktura organizacyjna
          </Heading>
          <div>
            <Text mb={8}>
              Parlament jest najwyższym uchwałodawczym organem Samorządu
              Studenckiego na Uczelni. W jego skład wchodzą:
            </Text>

            <UnorderedList>
              <ListItem>członkowie Studenckiego Kolegium Wyborczego,</ListItem>
              <ListItem>członkowie Zarządu Parlamentu Studentów,</ListItem>
              <ListItem>
                czterej członkowie Rady UOS, w tym Przewodniczący Rady UOS,
              </ListItem>
              <ListItem>jeden delegat z Filii,</ListItem>
              <ListItem>
                delegat z grupy Rad Mieszkańców z głosem doradczym,
              </ListItem>
              <ListItem>
                członkowie Kolegium Senatorów Studenckich z głosem doradczym,
              </ListItem>
              <ListItem>
                pełnomocnicy Zarządu Parlamentu Studentów z głosem doradczym,
              </ListItem>
              <ListItem>
                dwóch delegatów z pozostałych Filii z głosem doradczym.
              </ListItem>
            </UnorderedList>
          </div>
        </VStack>
      </ScaleFade>
    </Center>
  );
}

export default OrganisationStructure;
