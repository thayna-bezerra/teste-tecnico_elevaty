import { ReactNode, createContext, useCallback, useEffect, useState } from 'react'
import { ClientsType } from '../@types'
import axios from 'axios'

type ClientsProps = {
  clients: ClientsType[]
}

type ClientsProviderProps = {
  children?: ReactNode
}

export const Clients = createContext({} as ClientsProps)

export function useClient() {
  const [clients, setClients] = useState<ClientsType[]>()

  useEffect(() => {
    ;(async () => {
      await axios
        .get('https://fakerapi.it/api/v1/persons')
        .then((response) => response.data.data)
        .then((data: any) => setClients(data))
        .catch(() => {})
    })()
  }, [])

  return { clients }

}
