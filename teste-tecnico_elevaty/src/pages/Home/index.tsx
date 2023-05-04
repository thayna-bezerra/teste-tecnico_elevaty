import elevatyLogo from '../../assets/elevatyLogo.png';

import { MagnifyingGlass, CaretDown, Trash } from 'phosphor-react'

import { ButtonSearch, HeaderContainer, Table, FormStyles, ButtonActions } from './styles'
import { useClient } from '../../hooks/useClients';
import { useState } from 'react';

export function Home( ) {
  const [startBirthday, setStartBirthday] = useState("1990-01-01");
  const [endBirthday, setEndBirthday] = useState("2000-12-31");
  
  const { clients, setFilteredClients, filteredClients, isFetching, handleButtonSearchClick } = useClient(startBirthday, endBirthday);

  function handleStartBirthdayChange(event: React.ChangeEvent<HTMLInputElement>) {
    setStartBirthday(event.target.value);
  }
  
  function handleEndBirthdayChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEndBirthday(event.target.value);
  }

  function handleDeleteClick(id: number) {
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
      <Table>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Data de nascimento</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredClients?.map((item) => (
            <tr key={item.id}>
              <td>{item.firstname + ' ' + item.lastname}</td>
              <td>{item.birthday}</td>
              <td>
                <ButtonActions>
                  <CaretDown size={23} weight="bold" color='#808080' />
                </ButtonActions>
                <ButtonActions onClick={() => handleDeleteClick(item.id)}>
                  <Trash size={23} weight="fill" color='#808080'/>
                </ButtonActions>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}
