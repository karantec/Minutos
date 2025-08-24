import React from 'react';
import { AlertCircle, Clock, CreditCard, Shield } from 'lucide-react';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen w-full  mt-40 bg-gradient-to-br from-slate-50 to-gray-100 pt-16 pb-8 px-4">
      <div className="max-w-8xl mx-auto">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200 shadow-lg">
          
          {/* Header */}
          <div className="flex items-center mb-6">
            <Shield className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Refund Policy</h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            
            {/* Refund Eligibility */}
            <section className="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 md:col-span-2">
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-amber-500 mr-4 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">Refund Eligibility</h3>
                  <p className="text-gray-700 leading-relaxed text-base">
                    You may be entitled to a refund up to <strong>100% of the Order value</strong> at Minutos' sole discretion if:
                  </p>
                  <ul className="mt-4 space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mt-1.5 mr-4 flex-shrink-0"></span>
                      <span className="text-base">The order is not delivered due to a cause attributable to the Seller App, Minutos, or the Logistic Partner.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mt-1.5 mr-4 flex-shrink-0"></span>
                      <span className="text-base">Packaging is tampered or damaged and you refuse delivery (subject to Seller's acknowledgement).</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Processing Timeline */}
            <section className="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">Processing Timeline</h3>
                  <p className="text-gray-700 leading-relaxed text-base">
                    Refunds are processed within <strong>7 business days</strong> from the date we verify and confirm your request.
                  </p>
                </div>
              </div>
            </section>

            {/* Deductions */}
            <section className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start">
                <CreditCard className="h-6 w-6 text-amber-600 mr-4 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">Deductions</h3>
                  <p className="text-gray-700 leading-relaxed text-base">
                    Minutos reserves the right to retain amounts towards forward & reverse shipping charges and other associated costs from your refundable amount.
                  </p>
                </div>
              </div>
            </section>

            {/* Refund Method */}
            <section className="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 md:col-span-2">
              <div className="flex items-center mb-4">
                <CreditCard className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                <h3 className="font-semibold text-gray-900 text-lg">Refund Method</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4 text-base">
                Your refund will be credited to the source account or other payment options provided by Minutos and chosen by you.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border-l-4 border-blue-400">
                <p className="text-sm text-blue-800 leading-relaxed">
                  <strong>Note:</strong> After refund initiation, it may take additional time for the refund to reflect in your account, depending on your financial institution or payment gateway.
                </p>
              </div>
            </section>

            {/* Important Notice */}
            <section className="bg-gradient-to-r from-gray-50 to-slate-100 rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 md:col-span-2">
              <div className="text-center">
                <p className="text-base text-gray-700 font-medium">
                  Refunds will be processed only when the conditions stipulated by us or the Seller are fulfilled.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
