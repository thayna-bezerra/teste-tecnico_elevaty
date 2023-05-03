import { CaretDown, Trash } from 'phosphor-react'
import { ButtonStyles, Table } from './styles'

import { useClient } from '../../hooks/useClients'

export function Home() {
  const { clients } = useClient();

  return (
    <Table>
      <thead>
        <tr>
          <th>Cliente</th>
          <th>Data de nascimento</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {clients?.map((item) => (
          <tr>
            <td key={item.id}>{item.firstname + ' ' + item.lastname}</td>
            <td>{item.birthday}</td>
            <td>
              <ButtonStyles>
                <CaretDown size={23} weight="bold" color='#808080' />
              </ButtonStyles>
              <ButtonStyles>
                <Trash size={23} weight="fill" color='#808080'/>
              </ButtonStyles>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
