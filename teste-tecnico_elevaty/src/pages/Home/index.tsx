import moment from 'moment';
import { Disclosure } from '@headlessui/react';
import { CaretDown, Trash } from 'phosphor-react';
import { Table } from './styles';

import { useState } from 'react';
import { useClient } from '../../hooks/useClients';
import { Header } from '../../components/Header';

export function Home() {
  const [startBirthday, setStartBirthday] = useState("2005-12-01");
  const [endBirthday, setEndBirthday] = useState("2008-09-01");
  
  const { clients, setFilteredClients, filteredClients, isFetching, handleButtonSearchClick } = useClient(startBirthday, endBirthday);

  function handleStartBirthdayChange(event: React.ChangeEvent<HTMLInputElement>) {
    // const date = moment(event.target.value).format('DD/MM/YYYY')
    setStartBirthday(event.target.value);
  }
  
  function handleEndBirthdayChange(event: React.ChangeEvent<HTMLInputElement>) {
    // const date = moment(event.target.value).format('DD/MM/YYYY')
    setEndBirthday(event.target.value);
  }

  function handleDeleteClient(id: number) {
    const updatedClients = clients?.filter((client) => client.id !== id);
    setFilteredClients(updatedClients);
  }

  return (
    <>
      <Header
        startBirthday={startBirthday}
        endBirthday={endBirthday}
        onStartDateChange={handleStartBirthdayChange}
        onEndDateChange={handleEndBirthdayChange}
        onSearchButtonClick={handleButtonSearchClick}
        isFetching={isFetching}
      />
      <div>
        <Table>
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Data de nascimento</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {filteredClients?.map((item) => (   
            <Disclosure key={item.id}>
              {({  }) => (
                <>
                  <Disclosure.Button>
                      <td key={item.id}>{item.firstname + ' ' + item.lastname}</td>                        
                      <td>{moment(item.birthday).format('DD/MM/YYYY')}</td>
                      <td>
                        <CaretDown size={23} weight="bold" color='#808080' />
                      </td>
                      <td>                                
                        <Trash onClick={() => handleDeleteClient(item.id)} size={23} weight="fill" color='#808080'/>
                      </td>                
                  </Disclosure.Button>
                  <Disclosure.Panel > 
                    <p><strong>Dados Pessoais:</strong></p>                   
                    <p>Nome Completo: {item.firstname + ' ' + item.lastname}</p>
                    <p>Email: {item.email}</p>
                    <p>Data de nascimento: {item.birthday}</p>
                    <p>Telefone: {item.phone}</p>
                    <br />

                    <p><strong>Endereço:</strong></p>
                    <p>Rua: {item.address.streetName}</p>
                    <p>Cidade: {item.address.city}</p>
                    <p>Código Postal: {item.address.zipcode}</p>
                    <br /> 
                    
                    <p><strong>Cartão de Crédito</strong></p>                   
                    <p>Número do Cartão: {item.creditCards ? item.creditCards.number : ''}</p>
                    <p>Data de expiração: {item.creditCards ? item.creditCards.expiration : ''}</p>
                    <p>Bandeira: {item.creditCards ? item.creditCards.type : ''}</p>

                    {/* <p>Número do Cartão: {item.creditCards.number}</p>
                    <p>Data de expiração: {item.creditCards.expiration}</p>
                    <p>Bandeira: {item.creditCards.type}</p>  */}

                  </Disclosure.Panel>
                </>
              )}
            </Disclosure> 
          ))}      
        </tbody>        
        </Table>
      </div>
    </>
  )
}
