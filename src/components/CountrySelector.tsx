import React from 'react';
import { motion } from 'framer-motion';
import { countries } from '../data';
import clsx from 'clsx';

type CountrySelectorProps = {
  selectedCountry: string;
  onCountryChange: (country: string) => void;
};

export function CountrySelector({ selectedCountry, onCountryChange }: CountrySelectorProps) {
  return (
    <div className="grid grid-cols-4 gap-3">
      {countries.map((country) => (
        <button
          key={country.code}
          onClick={() => onCountryChange(country.code.toLowerCase())}
          title={country.name}
          className={clsx(
            'p-3 rounded-xl border-2 transition-all duration-200 flex items-center justify-center',
            selectedCountry === country.code.toLowerCase()
              ? 'bg-senda-purple-bg border-senda-purple shadow-md'
              : 'border-gray-100 hover:border-senda-purple/20 hover:bg-senda-purple-bg/50'
          )}
        >
          <img 
            src={country.flag} 
            alt={country.name} 
            className="w-8 h-6 object-cover rounded" 
          />
        </button>
      ))}
    </div>
  );
}