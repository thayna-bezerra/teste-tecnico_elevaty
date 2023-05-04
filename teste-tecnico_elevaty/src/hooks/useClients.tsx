import { useState, useEffect } from 'react';
import { ClientsType } from '../@types';
import axios from 'axios';

export function useClient(startBirthday: string, endBirthday: string) {
  const [isFetching, setIsFetching] = useState(false);
  const [clients, setClients] = useState<ClientsType[]>();
  const [filteredClients, setFilteredClients] = useState<ClientsType[]>();

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
    setClients(filteredClients);
  }, [filteredClients]);

  function handleButtonSearchClick() {
    setIsFetching(true);
  }

  return {
    clients,
    filteredClients,
    isFetching,
    handleButtonSearchClick
  };
}
