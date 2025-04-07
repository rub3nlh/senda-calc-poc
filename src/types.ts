export type Product = 'money' | 'food' | 'health' | 'services';

export type Country = {
  code: string;
  name: string;
  flag: string;
  currency: string;
  rate: number;
};

export type Voucher = {
  id: string;
  name: string;
  logo: string;
  type: 'supermarket' | 'pharmacy';
  denominations: number[];
};

export type FooterLink = {
  title: string;
  href: string;
};

export type FooterSection = {
  title: string;
  links: FooterLink[];
};