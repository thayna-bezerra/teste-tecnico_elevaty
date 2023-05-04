// import { useEffect, useState } from 'react'
// import { ClientsType } from '../@types'
// import axios from 'axios'

// // type Clients = {
// //   clients: ClientsType[]
// // }

// // interface ClientsProps {
// //   startBirthday?: Date
// //   endBirthday?: Date
// // }

// export function useClient({ startBirthday, endBirthday}: ClientsProps) {
//   // const [clients, setClients] = useState<ClientsType[]>()

//   // useEffect(() => {
//   //   ;(async () => {
//   //     await axios
//   //       .get('https://fakerapi.it/api/v1/persons?_quantity=10&_birthday_start=${birthdayStart}&_birthday_end=${birthdayEnd}')
//   //       .then((response) => response.data.data)
//   //       .then((data: any) => setClients(data))
//   //       .catch(() => {})
//   //   })()
//   // }, [startBirthday, endBirthday])

//   const filteredClients = clients?.filter((client) => {
//     const birthdate = new Date(client.birthday);
//     if (!startBirthday || !endBirthday) {
//       return true; // retorna verdadeiro para todas as datas se as datas de início e fim não foram definidas
//     }
//     const startDate = new Date(startBirthday);
//     const endDate = new Date(endBirthday);
//     return birthdate >= startDate && birthdate <= endDate;
//   });
  

//   return { clients, filteredClients }

// }
