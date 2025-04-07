import { Country, Voucher, FooterSection } from './types';

export const countries: Country[] = [
  {
    code: 'CO',
    name: 'Colombia',
    flag: 'https://flagcdn.com/co.svg',
    currency: 'COP',
    rate: 4686.40
  },
  {
    code: 'PE',
    name: 'Perú',
    flag: 'https://flagcdn.com/pe.svg',
    currency: 'PEN',
    rate: 4.1
  },
  {
    code: 'EC',
    name: 'Ecuador',
    flag: 'https://flagcdn.com/ec.svg',
    currency: 'USD',
    rate: 1
  },
  {
    code: 'MX',
    name: 'México',
    flag: 'https://flagcdn.com/mx.svg',
    currency: 'MXN',
    rate: 18.5
  }
];

export const vouchers: Voucher[] = [
  {
    id: 'exito',
    name: 'Éxito',
    logo: 'https://www.cysend.com/images/products/exito.svg',
    type: 'supermarket',
    denominations: [50000, 100000, 200000, 500000]
  },
  {
    id: 'jumbo',
    name: 'Jumbo',
    logo: 'https://www.cysend.com/images/products/jumbo-logo.svg',
    type: 'supermarket',
    denominations: [50000, 100000, 200000, 500000]
  },
  {
    id: 'd1',
    name: 'D1',
    logo: 'https://www.cysend.com/images/products/d1-logo.svg',
    type: 'supermarket',
    denominations: [20000, 50000, 100000]
  },
  {
    id: 'olimpica',
    name: 'Olímpica',
    logo: 'https://www.cysend.com/images/products/olimpica-logo.svg',
    type: 'supermarket',
    denominations: [50000, 100000, 200000]
  },
  {
    id: 'carulla',
    name: 'Carulla',
    logo: 'https://www.cysend.com/images/products/carulla-logo.svg',
    type: 'supermarket',
    denominations: [50000, 100000, 200000, 500000]
  },
  {
    id: 'farmatodo',
    name: 'Farmatodo',
    logo: 'https://www.cysend.com/images/products/farmatodo-logo.svg',
    type: 'pharmacy',
    denominations: [20000, 50000, 100000]
  },
  {
    id: 'cruzverde',
    name: 'Cruz Verde',
    logo: 'https://www.cysend.com/images/products/cruzverde-logo.svg',
    type: 'pharmacy',
    denominations: [20000, 50000, 100000]
  },
  {
    id: 'larebaja',
    name: 'La Rebaja',
    logo: 'https://www.cysend.com/images/products/larebaja-logo.svg',
    type: 'pharmacy',
    denominations: [20000, 50000, 100000]
  },
  {
    id: 'alemana',
    name: 'Droguería Alemana',
    logo: 'https://www.cysend.com/images/products/drogueria-alemana-logo.svg',
    type: 'pharmacy',
    denominations: [20000, 50000, 100000]
  }
];

export const footerSections: FooterSection[] = [
  {
    title: 'Productos',
    links: [
      { title: 'Envío de dinero', href: '/envio-dinero' },
      { title: 'Vouchers de alimentos', href: '/vouchers-alimentos' },
      { title: 'Vouchers de salud', href: '/vouchers-salud' },
      { title: 'Pago de servicios', href: '/pago-servicios' }
    ]
  },
  {
    title: 'Compañía',
    links: [
      { title: 'Sobre nosotros', href: '/sobre-nosotros' },
      { title: 'Blog', href: '/blog' },
      { title: 'Prensa', href: '/prensa' },
      { title: 'Carreras', href: '/carreras' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { title: 'Términos y condiciones', href: '/terminos' },
      { title: 'Política de privacidad', href: '/privacidad' },
      { title: 'Cookies', href: '/cookies' },
      { title: 'Licencias', href: '/licencias' }
    ]
  },
  {
    title: 'Soporte',
    links: [
      { title: 'Centro de ayuda', href: '/ayuda' },
      { title: 'Contacto', href: '/contacto' },
      { title: 'Estado del sistema', href: '/estado' },
      { title: 'FAQ', href: '/faq' }
    ]
  }
];