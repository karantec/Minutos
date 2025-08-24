import React from 'react';
import { 
  DollarSign, 
  MapPin, 
  UserX, 
  AlertOctagon, 
  Scale, 
  MessageSquare, 
  FileText, 
  Shield,
  Gavel,
  Ban
} from 'lucide-react';

const AdditionalCancellationTerms = () => {
  return (
    <div className="min-h-screen w-full mt-20 bg-gradient-to-br from-orange-50 to-red-50 pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-8 border border-orange-200 shadow-lg">
          <div className="flex items-center mb-6">
            <AlertOctagon className="h-8 w-8 text-orange-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Additional Terms & Conditions</h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {/* Buyer Liability Charges */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 md:col-span-2">
              <div className="flex items-start">
                <DollarSign className="h-6 w-6 text-red-500 mr-4 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">Buyer Liability Charges</h3>
                  <p className="text-gray-700 leading-relaxed text-base mb-4">
                    Minutos reserves the right to collect charges to compensate the Seller or Logistic Partner for cancellations <strong>not attributable</strong> to Minutos, Seller App, or Logistic Partner.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <div className="flex items-center mb-3">
                        <MapPin className="h-5 w-5 text-red-500 mr-2" />
                        <span className="font-medium text-red-900">Wrong Address</span>
                      </div>
                      <p className="text-sm text-red-700">
                        Incorrect or incomplete delivery address provided by the buyer
                      </p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <div className="flex items-center mb-3">
                        <UserX className="h-5 w-5 text-red-500 mr-2" />
                        <span className="font-medium text-red-900">Unavailable Buyer</span>
                      </div>
                      <p className="text-sm text-red-700">
                        Buyer not available at the time of order delivery
                      </p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <div className="flex items-center mb-3">
                        <AlertOctagon className="h-5 w-5 text-red-500 mr-2" />
                        <span className="font-medium text-red-900">Missing Info</span>
                      </div>
                      <p className="text-sm text-red-700">
                        Lack of information, direction, or authorization from buyer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Decision Authority */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start">
                <Scale className="h-6 w-6 text-blue-600 mr-4 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">Final Authority</h3>
                  <p className="text-gray-700 leading-relaxed text-base">
                    All refund decisions are at <strong>Minutos' sole discretion</strong> according to internal policies. These decisions are <strong>final and binding</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Conditions */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start">
                <FileText className="h-6 w-6 text-purple-600 mr-4 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">Additional Conditions</h3>
                  <p className="text-gray-700 leading-relaxed text-base">
                    Terms may be subject to additional conditions by Sellers, Seller App, and Logistic Partners, communicated through various channels.
                  </p>
                </div>
              </div>
            </div>

            {/* Customer Support Process */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 md:col-span-2">
              <div className="flex items-start">
                <MessageSquare className="h-6 w-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">Refund & Cancellation Support</h3>
                  <p className="text-gray-700 leading-relaxed text-base mb-4">
                    To claim refunds or cancellations, raise a ticket with customer support for assistance.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                    <h4 className="font-medium text-green-900 mb-2">Process Requirements:</h4>
                    <ul className="space-y-2 text-sm text-green-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        Active interaction with customer support flow
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        Submission of valid supporting proof/documentation
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        Complete response to support team queries
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Consequences */}
            <div className="bg-gradient-to-r from-red-100 to-pink-100 rounded-xl p-6 border border-red-300 shadow-md hover:shadow-lg transition-shadow duration-300 md:col-span-2">
              <div className="flex items-start">
                <Gavel className="h-6 w-6 text-red-600 mr-4 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">Legal Action for Fraud</h3>
                  <p className="text-gray-700 leading-relaxed text-base mb-4">
                    Minutos reserves the right to initiate <strong>civil and/or criminal proceedings</strong> against users who file invalid, false claims or provide misleading information.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-red-200">
                      <div className="flex items-center mb-3">
                        <Ban className="h-5 w-5 text-red-600 mr-2" />
                        <span className="font-medium text-red-900">Account Actions</span>
                      </div>
                      <ul className="space-y-1 text-sm text-red-700">
                        <li>• Account suspension</li>
                        <li>• Account blocking/restriction</li>
                        <li>• Display name cancellation</li>
                        <li>• User disqualification</li>
                        <li>• Protection removal</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-red-200">
                      <div className="flex items-center mb-3">
                        <Shield className="h-5 w-5 text-red-600 mr-2" />
                        <span className="font-medium text-red-900">Criminal Offense</span>
                      </div>
                      <p className="text-sm text-red-700 leading-relaxed">
                        Fraudulent complaints with false, incomplete, or misleading information may constitute a criminal offense and will be prosecuted to the fullest extent of the law.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Warning Notice */}
            <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-xl p-6 border border-amber-300 shadow-md hover:shadow-lg transition-shadow duration-300 md:col-span-2">
              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <AlertOctagon className="h-6 w-6 text-amber-600 mr-2" />
                  <span className="font-semibold text-gray-900 text-lg">Important Warning</span>
                </div>
                <p className="text-base text-gray-700 leading-relaxed">
                  Any person who knowingly and with intent to injure, defraud, or deceive files a fraudulent complaint will face serious legal consequences. Always provide accurate and complete information when filing claims.
                </p>
              </div>
            </div>

            {/* Company Information */}
            <div className="bg-gradient-to-r from-gray-50 to-slate-100 rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 md:col-span-2">
              <div className="text-center">
                <p className="text-sm text-gray-600 font-medium">
                  These terms and conditions are governed by <strong>Minutos India Pvt Ltd</strong> and are subject to periodic updates and modifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalCancellationTerms;