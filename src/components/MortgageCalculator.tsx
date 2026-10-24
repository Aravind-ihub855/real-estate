'use client';

import React, { useState } from 'react';
import { Calculator, DollarSign, Percent, Calendar } from 'lucide-react';

interface MortgageCalculatorProps {
  propertyPrice: number;
}

export default function MortgageCalculator({ propertyPrice }: MortgageCalculatorProps) {
  const [purchasePrice, setPurchasePrice] = useState(propertyPrice);
  const [downPaymentPct, setDownPaymentPct] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTermYears, setLoanTermYears] = useState(30);

  const downPaymentAmount = (purchasePrice * downPaymentPct) / 100;
  const loanAmount = purchasePrice - downPaymentAmount;
  const monthlyInterestRate = interestRate / 100 / 12;
  const totalPayments = loanTermYears * 12;

  const monthlyPrincipalAndInterest =
    monthlyInterestRate === 0
      ? loanAmount / totalPayments
      : (loanAmount *
          (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments))) /
        (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);

  const estimatedPropertyTax = (purchasePrice * 0.012) / 12;
  const estimatedInsurance = 450;
  const totalMonthlyPayment = monthlyPrincipalAndInterest + estimatedPropertyTax + estimatedInsurance;

  return (
    <div className="bg-white rounded-2xl border border-stone-200 p-8 shadow-sm space-y-6">
      <div className="flex items-center gap-3 pb-4 border-b border-stone-100">
        <div className="w-10 h-10 rounded-xl bg-stone-900 text-[#C5A059] flex items-center justify-center">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-serif text-xl font-bold text-stone-900">Wealth & Mortgage Estimator</h3>
          <p className="text-xs text-stone-600">Calculate projected financing structure & monthly obligations.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Sliders Form */}
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm font-medium text-stone-800 mb-1">
              <span>Purchase Price</span>
              <span className="font-semibold">${purchasePrice.toLocaleString()}</span>
            </div>
            <input 
              type="range" 
              min="5000000" 
              max="50000000" 
              step="500000"
              value={purchasePrice}
              onChange={(e) => setPurchasePrice(Number(e.target.value))}
              className="w-full accent-stone-900 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-sm font-medium text-stone-800 mb-1">
              <span>Down Payment ({downPaymentPct}%)</span>
              <span className="font-semibold">${downPaymentAmount.toLocaleString()}</span>
            </div>
            <input 
              type="range" 
              min="10" 
              max="50" 
              step="5"
              value={downPaymentPct}
              onChange={(e) => setDownPaymentPct(Number(e.target.value))}
              className="w-full accent-stone-900 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-sm font-medium text-stone-800 mb-1">
              <span>Interest Rate</span>
              <span className="font-semibold">{interestRate}%</span>
            </div>
            <input 
              type="range" 
              min="3.0" 
              max="10.0" 
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full accent-stone-900 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-sm font-medium text-stone-800 mb-1">
              <span>Loan Term</span>
              <span className="font-semibold">{loanTermYears} Years</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[15, 20, 30].map((term) => (
                <button
                  key={term}
                  type="button"
                  onClick={() => setLoanTermYears(term)}
                  className={`py-2 text-xs font-semibold rounded-xl border transition-all ${
                    loanTermYears === term 
                      ? 'bg-stone-900 text-white border-stone-900' 
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:border-stone-400'
                  }`}
                >
                  {term} Years
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Breakdown Card */}
        <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200 flex flex-col justify-between space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">Estimated Monthly Investment</span>
            <div className="font-serif text-4xl font-bold text-stone-900 mt-2">
              ${Math.round(totalMonthlyPayment).toLocaleString()}
              <span className="text-xs font-sans font-normal text-stone-500 ml-1">/mo</span>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-stone-200 text-sm text-stone-700">
            <div className="flex justify-between">
              <span className="text-stone-500">Principal & Interest</span>
              <span className="font-medium">${Math.round(monthlyPrincipalAndInterest).toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500">Property Tax (Est.)</span>
              <span className="font-medium">${Math.round(estimatedPropertyTax).toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500">Homeowners Insurance</span>
              <span className="font-medium">${estimatedInsurance.toLocaleString()}</span>
            </div>
          </div>

          <p className="text-[11px] text-stone-400 leading-relaxed">
            * Estimates are for informational purposes only. Actual rates and monthly obligations are subject to underwriting qualification.
          </p>
        </div>

      </div>
    </div>
  );
}