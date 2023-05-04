export interface ClientsType {
  id: number
  firstname: string
  lastname: string
  email: string
  birthday: string
  phone: string

  creditCards: {
    number: string
    expiration: string
    type: string
  }

  address: {
    street: string
    streetName: string
    buildingNumber: string,
    city: string
    zipcode: number
    country: string
    county_code: string
  }
}