import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { EuroIcon, DollarSign, ArrowRight, Sandwich, Heart, Lightbulb, ArrowUpRight, Check } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import clsx from 'clsx';
import { Product } from './types';
import { countries, vouchers } from './data';
import { CountrySelector } from './components/CountrySelector';
import { VoucherSelector } from './components/VoucherSelector';
import { Footer } from './components/Footer';

function App() {
  const [amount, setAmount] = useState<string>('100');
  const [selectedProduct, setSelectedProduct] = useState<Product>('money');
  const [selectedCountry, setSelectedCountry] = useState<string>('colombia');
  const [selectedVouchers, setSelectedVouchers] = useState<string[]>([]);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  const country = countries.find(c => c.code.toLowerCase() === selectedCountry);
  const rate = country?.rate || 4686.40;

  const fees = {
    money: 0.03,
    food: 0.02,
    health: 0.02,
    services: 0.025
  };

  const calculateTotal = () => {
    const numAmount = parseFloat(amount) || 0;
    const fee = fees[selectedProduct];
    let feeAmount = numAmount * fee;
    let totalInEuros = numAmount;

    // If vouchers are selected, calculate based on voucher denominations
    if (selectedVouchers.length > 0 && (selectedProduct === 'food' || selectedProduct === 'health')) {
      const selectedVoucherData = vouchers.filter(v => selectedVouchers.includes(v.id));
      const totalVoucherAmount = selectedVoucherData.reduce((acc, voucher) => {
        const minDenomination = Math.min(...voucher.denominations);
        return acc + (minDenomination / rate); // Convert to EUR
      }, 0);
      
      totalInEuros = totalVoucherAmount;
      feeAmount = totalVoucherAmount * fee;
    }

    const totalWithFee = totalInEuros + feeAmount;
    const totalInLocal = totalWithFee * rate;

    return {
      feeAmount: feeAmount.toFixed(2),
      totalInEuros: totalWithFee.toFixed(2),
      totalInLocal: totalInLocal.toFixed(2)
    };
  };

  const result = calculateTotal();

  const ProductIcon = {
    money: DollarSign,
    food: Sandwich,
    health: Heart,
    services: Lightbulb
  }[selectedProduct];

  const handleVoucherSelect = (voucherId: string) => {
    setSelectedVouchers(prev => 
      prev.includes(voucherId)
        ? prev.filter(id => id !== voucherId)
        : [...prev, voucherId]
    );
  };

  // Reset selected vouchers when product changes
  useEffect(() => {
    setSelectedVouchers([]);
  }, [selectedProduct]);

  // Reset selected vouchers when country changes
  useEffect(() => {
    setSelectedVouchers([]);
  }, [selectedCountry]);

  // Simulate rate update every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdate(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <img 
          src="https://framerusercontent.com/images/Eb5g915KKh7F7EKKtY8UH1lFPqc.svg"
          alt="Senda" 
          className="h-8"
        />
        <div className="flex gap-4">
          <img 
            src="https://assets.website-files.com/63f38a8c92397a024593a624/63f38a8c92397a168693a650_google-play-badge.svg" 
            alt="Get it on Google Play" 
            className="h-10"
          />
          <img 
            src="https://assets.website-files.com/63f38a8c92397a024593a624/63f38a8c92397a168693a650_app-store-badge.svg" 
            alt="Download on the App Store" 
            className="h-10"
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block mb-6"
            >
              <span className="bg-senda-purple/10 text-senda-purple px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                <Check className="h-4 w-4" />
                Sin comisiones innecesarias
              </span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-bold mb-6"
            >
              Más que dinero.
              <br />
              Cada envío es{' '}
              <span className="text-gradient">una historia.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-8"
            >
              Envía dinero, productos y servicios a tus familiares.
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex-1 relative"
          >
            <div className="image-grid">
              <img src="https://images.unsplash.com/photo-1531983412531-6f5660f58759" alt="Family" />
              <img src="https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e" alt="Family" />
              <img src="https://images.unsplash.com/photo-1511895426328-dc8714191300" alt="Family" />
              <img src="https://images.unsplash.com/photo-1517554558809-9b4971b38f39" alt="Family" />
              <div className="qr-code">
                <img 
                  src="https://assets.website-files.com/63f38a8c92397a024593a624/63f38a8c92397a168693a650_qr-code.svg" 
                  alt="QR Code" 
                  className="w-24 h-24"
                />
              </div>
              <img src="https://images.unsplash.com/photo-1511895426328-dc8714191300" alt="Family" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="bg-senda-purple-bg py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Left Column - Input */}
                <div className="space-y-8">
                  <div className="flex justify-between items-center">
                    <h2 className="text-3xl font-bold text-gray-900">Calcula tu envío</h2>
                    <div className="text-sm text-gray-500">
                      Última actualización:{' '}
                      {format(lastUpdate, "HH:mm 'hrs'", { locale: es })}
                    </div>
                  </div>
                  
                  {/* Amount Input */}
                  {selectedProduct === 'money' && (
                    <div className="space-y-3">
                      <label className="block text-sm font-semibold text-gray-700">
                        Cantidad a enviar (EUR)
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <EuroIcon className="h-5 w-5 text-senda-purple" />
                        </div>
                        <input
                          type="number"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          className="pl-12 block w-full rounded-xl border-2 border-gray-100 shadow-sm focus:ring-2 focus:ring-senda-purple focus:border-transparent transition-all"
                          placeholder="Ingresa el monto"
                        />
                      </div>
                    </div>
                  )}

                  {/* Product Selection */}
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-gray-700">
                      Selecciona el producto
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {Object.entries({
                        money: 'Envío de Dinero',
                        food: 'Voucher Alimentos',
                        health: 'Voucher Salud',
                        services: 'Pago Servicios'
                      }).map(([value, label]) => (
                        <button
                          key={value}
                          onClick={() => setSelectedProduct(value as Product)}
                          className={clsx(
                            'p-4 rounded-xl border-2 transition-all duration-200',
                            selectedProduct === value
                              ? 'bg-senda-purple-bg border-senda-purple text-senda-purple shadow-md'
                              : 'border-gray-100 hover:border-senda-purple/20 hover:bg-senda-purple-bg/50'
                          )}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Country Selection */}
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-gray-700">
                      País de destino
                    </label>
                    <CountrySelector
                      selectedCountry={selectedCountry}
                      onCountryChange={setSelectedCountry}
                    />
                  </div>

                  {/* Voucher Selection */}
                  {(selectedProduct === 'food' || selectedProduct === 'health') && (
                    <div className="space-y-3">
                      <label className="block text-sm font-semibold text-gray-700">
                        {selectedProduct === 'food' ? 'Selecciona el supermercado' : 'Selecciona la farmacia'}
                      </label>
                      <VoucherSelector
                        selectedVouchers={selectedVouchers}
                        onVoucherSelect={handleVoucherSelect}
                        type={selectedProduct === 'food' ? 'supermarket' : 'pharmacy'}
                        rate={rate}
                        currency={country?.currency || 'COP'}
                      />
                    </div>
                  )}
                </div>

                {/* Right Column - Results */}
                <div className="bg-gradient-to-br from-senda-purple to-senda-purple-light rounded-2xl p-8 text-white">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-white/10 backdrop-blur-xl rounded-lg">
                        <ProductIcon className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-xl font-semibold">Resumen del envío</span>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-white/80">Monto</span>
                        <span className="font-medium">€{result.totalInEuros}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/80">Comisión</span>
                        <span className="font-medium">€{result.feeAmount}</span>
                      </div>
                      <div className="h-px bg-white/20" />
                      <div className="flex justify-between items-center">
                        <span className="text-white/80">Total a pagar</span>
                        <span className="text-2xl font-bold">€{(parseFloat(result.totalInEuros) + parseFloat(result.feeAmount)).toFixed(2)}</span>
                      </div>
                      <div className="bg-white/10 backdrop-blur-xl p-4 rounded-xl">
                        <span className="text-white/80 block mb-2">Tu familiar recibe</span>
                        <div className="flex items-center justify-between">
                          <ArrowRight className="h-5 w-5 text-white/60" />
                          <span className="text-2xl font-bold">
                            {country?.currency} {result.totalInLocal}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6">
                      <a
                        href="https://www.enviasenda.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block w-full bg-white text-senda-purple text-center py-4 rounded-xl font-semibold hover:bg-senda-purple-bg transition-colors relative overflow-hidden"
                      >
                        <span className="flex items-center justify-center">
                          Descarga la app Senda
                          <ArrowUpRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </span>
                      </a>
                      <p className="text-sm text-white/80 text-center mt-4">
                        Para completar tu envío, descarga nuestra app móvil
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
          <img src="https://assets.website-files.com/63f38a8c92397a024593a624/63f38a8c92397a168693a650_entel.svg" alt="Entel" className="h-8" />
          <img src="https://assets.website-files.com/63f38a8c92397a024593a624/63f38a8c92397a168693a650_tuenti.svg" alt="Tuenti" className="h-8" />
          <img src="https://assets.website-files.com/63f38a8c92397a024593a624/63f38a8c92397a168693a650_directv.svg" alt="DirecTV" className="h-8" />
          <img src="https://assets.website-files.com/63f38a8c92397a024593a624/63f38a8c92397a168693a650_tigo.svg" alt="Tigo" className="h-8" />
          <img src="https://assets.website-files.com/63f38a8c92397a024593a624/63f38a8c92397a168693a650_claro.svg" alt="Claro" className="h-8" />
          <img src="https://assets.website-files.com/63f38a8c92397a024593a624/63f38a8c92397a168693a650_mastercard.svg" alt="Mastercard" className="h-8" />
          <img src="https://assets.website-files.com/63f38a8c92397a024593a624/63f38a8c92397a168693a650_visa.svg" alt="Visa" className="h-8" />
          <img src="https://assets.website-files.com/63f38a8c92397a024593a624/63f38a8c92397a168693a650_aws.svg" alt="AWS" className="h-8" />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;