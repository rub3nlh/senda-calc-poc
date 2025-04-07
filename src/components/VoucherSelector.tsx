import React from 'react';
import { motion } from 'framer-motion';
import { vouchers } from '../data';
import clsx from 'clsx';

type VoucherSelectorProps = {
  selectedVouchers: string[];
  onVoucherSelect: (voucherId: string) => void;
  type: 'supermarket' | 'pharmacy';
  rate: number;
  currency: string;
};

export function VoucherSelector({ selectedVouchers, onVoucherSelect, type, rate, currency }: VoucherSelectorProps) {
  const filteredVouchers = vouchers.filter(voucher => voucher.type === type);

  const calculateEuroAmount = (localAmount: number, rate: number) => {
    return (localAmount / rate).toFixed(2);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {filteredVouchers.map((voucher) => (
        <motion.button
          key={voucher.id}
          onClick={() => onVoucherSelect(voucher.id)}
          className={clsx(
            'p-4 rounded-xl border-2 transition-all duration-200',
            selectedVouchers.includes(voucher.id)
              ? 'bg-senda-purple-bg border-senda-purple'
              : 'border-gray-100 hover:border-senda-purple/20'
          )}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <img src={voucher.logo} alt={voucher.name} className="h-8 object-contain mx-auto mb-2" />
          <div className="text-sm font-medium text-center">{voucher.name}</div>
          <div className="text-xs text-gray-500 text-center mt-1">
            Desde {voucher.denominations[0].toLocaleString()} {currency}
            <br />
            <span className="text-senda-purple">
              (€{calculateEuroAmount(voucher.denominations[0], rate)})
            </span>
          </div>
        </motion.button>
      ))}
    </div>
  );
}