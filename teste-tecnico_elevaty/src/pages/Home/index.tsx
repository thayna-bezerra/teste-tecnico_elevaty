import moment from 'moment';
import elevatyLogo from '../../assets/elevatyLogo.png';
import { Disclosure } from '@headlessui/react';
import { MagnifyingGlass, CaretDown, Trash } from 'phosphor-react';
import { ButtonSearch, HeaderContainer, Table, FormStyles, ButtonActions } from './styles';

import { useState } from 'react';
import { useClient } from '../../hooks/useClients';

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
      <HeaderContainer> 
        <img src = {elevatyLogo} alt="Logo Elevaty" />

        <FormStyles>
          <input type="date" value={startBirthday} onChange={handleStartBirthdayChange} />
          <input type="date" value={endBirthday} onChange={handleEndBirthdayChange}/>
          <ButtonSearch type="button" onClick={handleButtonSearchClick} disabled={isFetching}>
            <MagnifyingGlass size={23} color='#FFF' weight='bold' />
          </ButtonSearch>
        </FormStyles>

      </HeaderContainer>
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
          {clients?.map((item) => (   
            <Disclosure>
              {({  }) => (
                <>
                  <Disclosure.Button >
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
                    <p> Nome Completo: {item.firstname + ' ' + item.lastname}</p>
                    <p> Email: {item.email}</p>
                    <p>Data de nascimento: {item.birthday}</p>
                    <p>Telefone: {item.phone}</p>
                    <br />

                    <p><strong>Endereço:</strong></p>
                    <p>Rua: {item.addresses.streetName}</p>
                    <p>Cidade: {item.addresses.city}</p>
                    <p>Código Postal: {item.addresses.zipcode}</p>
                    <br /> 
                    
                    <p><strong>Carão de Crédito</strong></p>                   
                    <p> Número do Cartão: {item.creditCard.number}</p>
                    <p> Data de expiração: {item.creditCard.expiration}</p>
                    <p>Bandeira: {item.creditCard.type}</p>

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
