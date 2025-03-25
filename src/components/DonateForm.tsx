
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Heart } from 'lucide-react';

const DonateForm = () => {
  const [amount, setAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState("");
  const [isMonthly, setIsMonthly] = useState(false);
  
  const predefinedAmounts = [25, 50, 100, 250];
  
  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(null);
    setCustomAmount(e.target.value);
  };
  
  const handleAmountClick = (value: number) => {
    setAmount(value);
    setCustomAmount("");
  };
  
  return (
    <section id="donate" className="section-spacing bg-humanitarian-50">
      <div className="container mx-auto container-padding">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left side - Form */}
              <div className="p-8 md:p-10">
                <div className="mb-8">
                  <div className="inline-flex items-center mb-6">
                    <Heart className="h-6 w-6 text-humanitarian-600 mr-2" />
                    <h2 className="text-2xl font-display font-bold text-humanitarian-800">
                      Donate Now
                    </h2>
                  </div>
                  <p className="text-humanitarian-700">
                    Your generosity helps us create sustainable change in communities worldwide. Every contribution makes a difference.
                  </p>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-humanitarian-800">Choose an amount</h3>
                    <div className="flex items-center">
                      <span className="text-sm text-humanitarian-700 mr-2">Monthly</span>
                      <button 
                        onClick={() => setIsMonthly(!isMonthly)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-humanitarian-500 focus:ring-offset-2 ${isMonthly ? 'bg-humanitarian-600' : 'bg-gray-200'}`}
                      >
                        <span 
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isMonthly ? 'translate-x-6' : 'translate-x-1'}`} 
                        />
                      </button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {predefinedAmounts.map((value) => (
                      <button
                        key={value}
                        type="button"
                        className={`p-3 rounded-lg border text-center transition-all ${
                          amount === value 
                            ? 'border-humanitarian-600 bg-humanitarian-50 text-humanitarian-800' 
                            : 'border-gray-200 text-gray-700 hover:border-humanitarian-300'
                        }`}
                        onClick={() => handleAmountClick(value)}
                      >
                        ${value}
                      </button>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">$</span>
                    <input
                      type="text"
                      placeholder="Custom amount"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-humanitarian-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <Button className="w-full py-6 text-base bg-humanitarian-600 hover:bg-humanitarian-700">
                  {isMonthly ? 'Donate Monthly' : 'Donate Now'}
                </Button>
                
                <p className="text-sm text-center text-gray-500 mt-4">
                  All donations are tax-deductible. You will receive a receipt for your records.
                </p>
              </div>
              
              {/* Right side - Impact */}
              <div className="bg-humanitarian-600 p-8 md:p-10 text-white">
                <h3 className="text-xl font-display font-semibold mb-6">
                  Your Impact
                </h3>
                
                <ul className="space-y-6">
                  <li className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <strong className="block font-medium">$25 provides</strong>
                      <span className="text-white/90">Clean water for a family for one month</span>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <strong className="block font-medium">$50 provides</strong>
                      <span className="text-white/90">Educational supplies for 10 children</span>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <strong className="block font-medium">$100 provides</strong>
                      <span className="text-white/90">Medical supplies for a community clinic</span>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <strong className="block font-medium">$250 provides</strong>
                      <span className="text-white/90">A microfinance loan for a small business</span>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="italic text-white/90">
                    "Your generosity transformed our village. We now have clean water and our children are in school."
                  </p>
                  <p className="mt-2 font-medium">— Maria, Community Leader</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateForm;
