import { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { ClientsType } from '../@types';

type ClientsProps = {
  clients: ClientsType[];
  setClients: (clients: ClientsType[]) => void;
};

export const ClientsContext = createContext({} as ClientsProps);

export function useClient(startBirthday: string, endBirthday: string) {
  const [clients, setClients] = useState<ClientsType[]>();
  const [filteredClients, setFilteredClients] = useState<ClientsType[]>();
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const [
          personsResponse,
          creditCardsResponse,
          addressesResponse,
        ] = await axios.all([
          axios.get(`https://fakerapi.it/api/v1/persons?_quantity=10&_birthday_start=${startBirthday}&_birthday_end=${endBirthday}`),
          axios.get('https://fakerapi.it/api/v1/credit_cards?_quantity=10'),
          axios.get('https://fakerapi.it/api/v1/addresses?_quantity=10'),
        ]);
        const persons = personsResponse.data.data as ClientsType[];
        const creditCards = creditCardsResponse.data.data as any[];
        const addresses = addressesResponse.data.data as any[];

        const clientsData = persons.map((person, index) => ({
          ...person,
          creditCard: creditCards[index],
          addresses: addresses[index],
        }));
        setClients(clientsData);
        setFilteredClients(clientsData);
        setIsFetching(false);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [isFetching, startBirthday, endBirthday]);

  useEffect(() => {
    setClients(filteredClients || []);
  }, [filteredClients]);

  function handleButtonSearchClick() {
    setIsFetching(true);
  }

  return {
    clients,
    filteredClients,
    setFilteredClients,
    isFetching,
    handleButtonSearchClick
  };
}
