// @/types/index.ts or @/types/menu.ts
import { IconType } from "react-icons";
export type MenuType = {
  id: number;
  title: string;
  path: string;
};

export type StepType = {
  id: number;
  title: string;
  desc: string;
};

export type FeatureType = {
  icon: IconType;
  title: string;
  desc: string;
};

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: {
    color: string;
    type: string;
  };
  address: {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
  };
  university: string;
  bank: {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
  };
  company: {
    department: string;
    name: string;
    title: string;
    address: {
      address: string;
      city: string;
      state: string;
      stateCode: string;
      postalCode: string;
    };
  };
  crypto: {
    coin: string;
    wallet: string;
    network: string;
  };
  ssn: string;
  ein: string;
  macAddress: string;
  ip: string;
  userAgent: string;
  role: string;
};
