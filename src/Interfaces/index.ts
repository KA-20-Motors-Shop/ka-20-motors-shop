export interface IUser {
  id: string;
  name?: string;
  email: string;
  cpf: string;
  celphone: string;
  birthdate: string;
  description: string;
  CEP: string;
  state: string;
  city: string;
  street: string;
  number: number;
  complement: string;
  accountType: string;
  password: string;
}

export interface IAd {
  id: string;
  adType: string;
  title: string;
  year: number;
  mileage: number;
  price: number;
  description: string;
  vehicleType: string;
  image: string;
  gallery: string;
  createdOn: string;
  isActive: boolean;
  user: IUser;
}
