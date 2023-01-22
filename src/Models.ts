import { ReactNode } from "react";

export type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

export type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
};

export type UserData = {
  firstName: string;
  lastName: string;
  age: string;
};

export type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void
};

export type AddressData = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

export type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void
};

export type AccountData = {
  email: string;
  password: string;
};

export type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void
};
