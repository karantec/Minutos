import React from 'react';
import { XCircle, Clock, AlertTriangle, Users, Truck, Package, Zap } from 'lucide-react';

const CancellationPolicy = () => {
  return (
    <div className="min-h-screen mt-24 w-full bg-gradient-to-br from-red-50 to-orange-50 pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-8 border border-red-200 shadow-lg">
          <div className="flex items-center mb-6">
            <XCircle className="h-8 w-8 text-red-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Cancellation Policy</h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {/* Buyer Cancellations - Food Items */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 md:col-span-2">
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-orange-500 mr-4 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">Food & Perishable Items</h3>
                  <p className="text-gray-700 leading-relaxed text-base mb-4">
                    You may cancel an order without charge at any time <strong>before the Seller accepts the order</strong>.
                  </p>
                  <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                    <p className="text-sm text-orange-800 font-medium mb-2">Post-acceptance cancellation allowed only if:</p>
                    <ul className="space-y-2 text-sm text-orange-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        Order could not be delivered within estimated time
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                        Seller doesn't accept or cancels due to store closure, item unavailability, or service issues
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* General Order Cancellations */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-blue-500 mr-4 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">General Orders</h3>
                  <p className="text-gray-700 leading-relaxed text-base">
                    You may cancel orders without charge before the status changes to <strong>"In-Progress"</strong> on Minutos platform.
                  </p>
                </div>
              </div>
            </div>

            {/* Investigation Process */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start">
                <Users className="h-6 w-6 text-blue-600 mr-4 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">Review Process</h3>
                  <p className="text-gray-700 leading-relaxed text-base">
                    Minutos reserves the right to investigate cancellation requests and determine eligibility for processing and refunds.
                  </p>
                </div>
              </div>
            </div>

            {/* Seller Cancellations */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 md:col-span-2">
              <div className="flex items-start">
                <Package className="h-6 w-6 text-purple-500 mr-4 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">Seller-Initiated Cancellations</h3>
                  <p className="text-gray-700 leading-relaxed text-base mb-4">
                    Sellers may cancel orders (full or partial) for various reasons. You will not be charged for such cancellations and will receive full refunds.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-medium text-purple-900 mb-2">Common Reasons:</h4>
                      <ul className="space-y-1 text-sm text-purple-700">
                        <li>• Product shortage</li>
                        <li>• Item unavailability</li>
                        <li>• Force majeure events</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-medium text-green-900 mb-2">Your Protection:</h4>
                      <ul className="space-y-1 text-sm text-green-700">
                        <li>• No charges applied</li>
                        <li>• Full refund guaranteed</li>
                        <li>• Automatic processing</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Minutos Platform Cancellations */}
            <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 border border-red-200 shadow-md hover:shadow-lg transition-shadow duration-300 md:col-span-2">
              <div className="flex items-start">
                <Zap className="h-6 w-6 text-red-600 mr-4 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">Platform-Initiated Cancellations</h3>
                  <p className="text-gray-700 leading-relaxed text-base mb-4">
                    Minutos reserves the right to cancel orders and initiate full refunds in the following circumstances:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-red-100">
                      <div className="flex items-center mb-2">
                        <Truck className="h-5 w-5 text-red-500 mr-2" />
                        <span className="font-medium text-gray-900">Logistics</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Logistic Partner unavailable to perform delivery services
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-red-100">
                      <div className="flex items-center mb-2">
                        <Package className="h-5 w-5 text-red-500 mr-2" />
                        <span className="font-medium text-gray-900">Inventory</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Items or products not available in stock
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-red-100">
                      <div className="flex items-center mb-2">
                        <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                        <span className="font-medium text-gray-900">Technical</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Transaction cannot be completed due to system issues
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <div className="bg-gradient-to-r from-gray-50 to-slate-100 rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 md:col-span-2">
              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <AlertTriangle className="h-6 w-6 text-amber-600 mr-2" />
                  <span className="font-semibold text-gray-900 text-lg">Important Notice</span>
                </div>
                <p className="text-base text-gray-700 leading-relaxed">
                  All cancellation requests are subject to review and approval by Minutos. Refunds will be processed only when cancellation conditions are met and verified.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancellationPolicy;