import jsPDF from 'jspdf';
import moment from 'moment';

import { CaretDown, Trash } from 'phosphor-react';
import { Disclosure } from '@headlessui/react';
import { Table } from './styles';

import { Header } from '../../components/Header';
import { useClient } from '../../hooks/useClients';
import { useState } from 'react';

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

  function handleDeleteClick(id: number) {
    const updatedClients = clients?.filter((client) => client.id !== id);
    setFilteredClients(updatedClients);
  }

  function generatePDF({ firstname, lastname, email, birthday, phone, streetName, city, zipcode, number, expiration, type }: {
    firstname: string,
    lastname: string,
    email: string,
    birthday: string,
    phone: string,
    streetName: string,
    city: string,
    zipcode: number,
    number: string,
    expiration: string,
    type: string
  }) {
    const doc = new jsPDF();

    doc.text('DADOS PESSOAIS:', 10, 10);
    doc.text(`Nome Completo: ${firstname} ${lastname}`, 20, 20);
    doc.text(`Email: ${email}`, 20, 30);
    doc.text(`Data de nascimento: ${birthday}`, 20, 40);
    doc.text(`Telefone: ${phone}`, 20, 50);
    
    doc.text('ENDEREÇO:', 10, 70);
    doc.text(`Rua: ${streetName}`, 20, 80);
    doc.text(`Cidade: ${city}`, 20, 90);
    doc.text(`Código Postal: ${zipcode}`, 20, 100);

    doc.text('CARTÃO DE CRÉDITO:', 10, 120);
    doc.text(`Número do Cartão: ${number}`, 20, 130);
    doc.text(`Data de Expiração: ${expiration}`, 20, 140);
    doc.text(`Bandeira: ${type}`, 20, 150);
  
    doc.setProperties({
      title: `Fatura Elevaty - ${firstname}`
    });
  
    window.open(doc.output('bloburl'), '_blank');
  }

  return (
    <div>
      <Header
        startBirthday={startBirthday}
        endBirthday={endBirthday}
        onStartDateChange={handleStartBirthdayChange}
        onEndDateChange={handleEndBirthdayChange}
        onSearchButtonClick={handleButtonSearchClick}
        isFetching={isFetching}
      />
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
                    
                    <td><span><CaretDown size={23} weight="bold" color='#808080' /></span></td> 

                    <td><span onClick={() => handleDeleteClick(item.id)}><Trash size={23} weight="fill" color='#808080'/></span></td>                    
                </Disclosure.Button>

                <Disclosure.Panel > 
                  <p><strong>Dados Pessoais:</strong></p>                   
                  <p>Nome Completo: {item.firstname + ' ' + item.lastname}</p>
                  <p>Email: {item.email}</p>
                  <p>Data de nascimento: {item.birthday}</p>
                  <p>Telefone: {item.phone}</p>
                  <br />

                  <p><strong>Endereço:</strong></p>
                  <p>Rua: {item.addresses.streetName}</p>
                  <p>Cidade: {item.addresses.city}</p>
                  <p>Código Postal: {item.addresses.zipcode}</p>
                  <br /> 

                  <p><strong>Cartão de Crédito</strong></p>                   
                  <p>Número do Cartão: {item.creditCard.number}</p>
                  <p>Data de expiração: {item.creditCard.expiration}</p>
                  <p>Bandeira: {item.creditCard.type}</p>

                  <Disclosure.Button 
                    onClick={() => generatePDF({
                      firstname: item.firstname,
                      lastname: item.lastname,
                      email: item.email,
                      birthday: item.birthday,
                      phone: item.phone,
                      streetName: item.addresses.streetName,
                      city: item.addresses.city,
                      zipcode: item.addresses.zipcode,
                      number: item.creditCard.number,
                      expiration: item.creditCard.expiration,
                      type: item.creditCard.type
                    })}
                  >
                    Gerar PDF
                  </Disclosure.Button>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure> 
        ))}      
      </tbody>        
      </Table>
    </div>
  )
}
