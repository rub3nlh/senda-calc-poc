import React from 'react';
import { footerSections } from '../data';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-gray-900 mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-senda-purple transition-colors"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <div className="flex items-center mb-4 md:mb-0">
            <img
              src="https://framerusercontent.com/images/Eb5g915KKh7F7EKKtY8UH1lFPqc.svg"
              alt="Senda"
              className="h-8 mr-4"
            />
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Senda. Todos los derechos reservados.
            </p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://facebook.com/enviasenda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-senda-purple transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com/enviasenda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-senda-purple transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com/enviasenda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-senda-purple transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/company/enviasenda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-senda-purple transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 text-sm text-gray-500 text-center">
          <p>
            Senda está regulada por las autoridades financieras correspondientes y cumple con todas las
            normativas aplicables para servicios de transferencia de dinero internacional.
          </p>
        </div>
      </div>
    </footer>
  );
}