import elevatyLogo from '../../assets/elevatyLogo.png';

import { MagnifyingGlass, CaretDown, Trash } from 'phosphor-react'

import { ButtonSearch, HeaderContainer, Table, FormStyles, ButtonActions } from './styles'
import { useEffect, useState } from 'react'
import { ClientsType } from '../../@types'
import axios from 'axios'

export function Home( ) {
  const [startBirthday, setStartBirthday] = useState("1990-01-01");
  const [endBirthday, setEndBirthday] = useState("2000-12-31");

  const [isFetching, setIsFetching] = useState(false);
  
  const [clients, setClients] = useState<ClientsType[]>()
  const [filteredClients, setFilteredClients] = useState<ClientsType[]>();

  function handleStartBirthdayChange(event: React.ChangeEvent<HTMLInputElement>) {
    setStartBirthday(event.target.value);
  }
  
  function handleEndBirthdayChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEndBirthday(event.target.value);
  }

  function handleButtonSearchClick() {
    setIsFetching(true)
  }

  useEffect(() => {
    if (isFetching) {
      axios
        .get(`https://fakerapi.it/api/v1/persons?_quantity=10&_birthday_start=${startBirthday}&_birthday_end=${endBirthday}`)
        .then((response) => response.data.data)
        .then((data: any) => {
          setFilteredClients(data)
          setIsFetching(false)
        })
        .catch(error => console.log(error));
    }
  }, [isFetching, startBirthday, endBirthday]);

  useEffect(() => {
    setClients(filteredClients);
  }, [filteredClients]);

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
                <ButtonActions>
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
