import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  rightIcon?: string;
  textStyles?: string;
  isDisabled?: boolean;
}
export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: 31;
  make: string;
  model: string;
  transmission: string;
  year: 1993;
}

export interface CardDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}
export interface FIlterProps {
  manufacturer: string;
  year: string;
  fuel: string;
  limit: string;
  model: string;
}
export interface OptionProps {
  title: string;
  value: string;
}
export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}
export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}
