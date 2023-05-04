import { useState, useEffect } from 'react';
import { ClientsType } from '../@types';
import axios from 'axios';

export function useClient(startBirthday: string, endBirthday: string) {
  const [clients, setClients] = useState<ClientsType[]>();
  const [filteredClients, setFilteredClients] = useState<ClientsType[]>();
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (isFetching) {
      axios
        .get(`https://fakerapi.it/api/v1/persons?_quantity=10&_birthday_start=${startBirthday}&_birthday_end=${endBirthday}`)
        .then((response) => response.data.data)
        .then((data: any) => {
          setFilteredClients(data);
          setIsFetching(false);
        })
        .catch(error => console.log(error));
    }
  }, [isFetching, startBirthday, endBirthday]);
  
  useEffect(() => {
    (async () => {
      try {
        const [
          personsResponse,
          creditCardsResponse,
          addressesResponse,
        ] = await axios.all([
          axios.get('https://fakerapi.it/api/v1/persons?_quantity=10'),
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
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  useEffect(() => {
    setClients(filteredClients);
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
