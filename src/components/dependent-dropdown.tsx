import { FC, useState } from "react";
import DropdownList from "./dropdown-list";

type DependentDropdownProps = {};

const countries = [
  { id: 1, name: "Afghanistan" },
  { id: 2, name: "Albania" },
  { id: 3, name: "Algeria" },
  { id: 4, name: "Andorra" },
  { id: 5, name: "Angola" },
  { id: 6, name: "Bangladesh" },
  { id: 7, name: "England" },
  { id: 8, name: "Saudi Arabia" },
];

const cities = [
  { id: 1, name: "Kabul", countryId: 1 },
  { id: 2, name: "Tirana", countryId: 2 },
  { id: 3, name: "Algiers", countryId: 3 },
  { id: 4, name: "Andorra la Vella", countryId: 4 },
  { id: 5, name: "Luanda", countryId: 5 },
  { id: 6, name: "Dhaka", countryId: 6 },
  { id: 7, name: "London", countryId: 7 },
  { id: 8, name: "Riyadh", countryId: 8 },
  { id: 9, name: "Jeddah", countryId: 8 },
  { id: 10, name: "Mecca", countryId: 8 },
  { id: 11, name: "Medina", countryId: 8 },
  { id: 12, name: "Chittagong", countryId: 6 },
  { id: 13, name: "Sylhet", countryId: 6 },
  { id: 14, name: "Birmingham", countryId: 7 },
  { id: 15, name: "Manchester", countryId: 7 },
];

const DependentDropdown: FC<DependentDropdownProps> = ({}) => {
  const [selectedCountry, setSelectedCountry] = useState<number | null>(null);

  const [selectedCity, setSelectedCity] = useState<number | null>(null);

  const citiesForSelectedCountry = cities.filter(
    (city) => city.countryId === selectedCountry
  );

  console.log({ selectedCountry, selectedCity });

  return (
    <div className="space-y-4">
      <DropdownList
        items={countries}
        onChange={(countryId) => setSelectedCountry(countryId)}
      />
      <DropdownList
        items={citiesForSelectedCountry}
        onChange={(cityId) => setSelectedCity(cityId)}
      />
    </div>
  );
};

export default DependentDropdown;
