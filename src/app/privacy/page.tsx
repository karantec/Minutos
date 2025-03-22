'use client';
import React, { useState } from 'react';

const PrivacyPolicyPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }
  };

  return (
    <div className="min-h-screen  mt-28 ">
    
      
  

      <main className="max-w-8xl mx-auto py-8  px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-xl font-semibold text-gray-900">Privacy Policy</h2>
            <p className="mt-1 text-sm text-gray-500">Version 1.0</p>
          </div>

          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <p className="text-sm text-gray-600 mb-4">
              This Notice applies to Minutos technologies PVT LTD (hereinafter
              referred to as "Minutos" a company incorporated under the Companies Act,
              2013 and having its registered office at Ground Floor,23-215
              chitammanagar Alwal Telangana India, 500010 and its subsidiaries, its
              holding company, its affiliates. The Company is the owner of website
              www.minutos.in and mobile application 'Minutos' (collectively, the
              "Platform").
            </p>

            <div className="space-y-4">
              {/* Collection of Information Section */}
              <div className="border border-gray-200 rounded-md">
                <button 
                  className="w-full text-left px-4 py-2 flex justify-between items-center bg-gray-50 hover:bg-gray-100 rounded-t-md"
                  onClick={() => toggleSection('collection')}
                >
                  <span className="font-medium">1. Collection of Information</span>
                  <span>{activeSection === 'collection' ? '−' : '+'}</span>
                </button>
                {activeSection === 'collection' && (
                  <div className="px-4 py-3">
                    <p className="text-sm text-gray-600 mb-2">We collect various information from You when You access or visit the Platform, register or set up an Account on the Platform or use the Platform.</p>
                    
                    <h4 className="font-medium mt-3 mb-1">a) Personal Information:</h4>
                    <p className="text-sm text-gray-600 mb-2">You may provide certain information to Us voluntarily while registering on the Platform for availing services including but not limited to Your name, mobile number, email address, and more.</p>
                    
                    <h4 className="font-medium mt-3 mb-1">b) Sensitive Personal Information:</h4>
                    <p className="text-sm text-gray-600 mb-2">This includes passwords, financial information, health information, and more as defined by applicable laws.</p>
                    
                    <h4 className="font-medium mt-3 mb-1">c) Transactional Information:</h4>
                    <p className="text-sm text-gray-600 mb-2">Information about Your transactions including transaction status, order history, and more.</p>
                    
                    <h4 className="font-medium mt-3 mb-1">d) Location based information:</h4>
                    <p className="text-sm text-gray-600">Information about Your location, IP address, device model, etc.</p>
                  </div>
                )}
              </div>

              {/* Use of Information Section */}
              <div className="border border-gray-200 rounded-md">
                <button 
                  className="w-full text-left px-4 py-2 flex justify-between items-center bg-gray-50 hover:bg-gray-100 rounded-t-md"
                  onClick={() => toggleSection('use')}
                >
                  <span className="font-medium">2. Use of Information</span>
                  <span>{activeSection === 'use' ? '−' : '+'}</span>
                </button>
                {activeSection === 'use' && (
                  <div className="px-4 py-3">
                    <p className="text-sm text-gray-600 mb-2">We use the information in accordance with law, for the following purposes:</p>
                    <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                      <li>To create Your account and verification of Your identity</li>
                      <li>To provide You access to Products and services</li>
                      <li>For internal business purposes and services</li>
                      <li>To resolve disputes and manage requests</li>
                      <li>To customize Your experience on the Platform</li>
                      <li>And other legitimate business purposes</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Sharing of Information Section */}
              <div className="border border-gray-200 rounded-md">
                <button 
                  className="w-full text-left px-4 py-2 flex justify-between items-center bg-gray-50 hover:bg-gray-100 rounded-t-md"
                  onClick={() => toggleSection('sharing')}
                >
                  <span className="font-medium">3. Sharing of Information</span>
                  <span>{activeSection === 'sharing' ? '−' : '+'}</span>
                </button>
                {activeSection === 'sharing' && (
                  <div className="px-4 py-3">
                    <h4 className="font-medium mb-1">a) Business Partners:</h4>
                    <p className="text-sm text-gray-600 mb-2">We may disclose Your information to third party service providers who work for Us or provide services through the Platform.</p>
                    
                    <h4 className="font-medium mt-3 mb-1">b) Compliance with law:</h4>
                    <p className="text-sm text-gray-600 mb-2">We may disclose Your information to comply with laws and legal requirements.</p>
                    
                    <h4 className="font-medium mt-3 mb-1">c) Acquisition Sale or Merger:</h4>
                    <p className="text-sm text-gray-600">We may share Your information in the event of a merger, sale, or other business restructuring.</p>
                  </div>
                )}
              </div>

              {/* Security Section */}
              <div className="border border-gray-200 rounded-md">
                <button 
                  className="w-full text-left px-4 py-2 flex justify-between items-center bg-gray-50 hover:bg-gray-100 rounded-t-md"
                  onClick={() => toggleSection('security')}
                >
                  <span className="font-medium">4. Security Precautions and Measures</span>
                  <span>{activeSection === 'security' ? '−' : '+'}</span>
                </button>
                {activeSection === 'security' && (
                  <div className="px-4 py-3">
                    <p className="text-sm text-gray-600 mb-2">The Platform has reasonable security measures to protect Your privacy and Personal Information from unauthorized access and misuse.</p>
                    <p className="text-sm text-gray-600 mb-2">You are responsible for maintaining the confidentiality of Your account information and must immediately notify Us of any unauthorized use.</p>
                    <p className="text-sm text-gray-600">We use encryption technology to protect Your payment information during transmission.</p>
                  </div>
                )}
              </div>

              {/* Cookie Policy Section */}
              <div className="border border-gray-200 rounded-md">
                <button 
                  className="w-full text-left px-4 py-2 flex justify-between items-center bg-gray-50 hover:bg-gray-100 rounded-t-md"
                  onClick={() => toggleSection('cookies')}
                >
                  <span className="font-medium">Cookie Policy</span>
                  <span>{activeSection === 'cookies' ? '−' : '+'}</span>
                </button>
                {activeSection === 'cookies' && (
                  <div className="px-4 py-3">
                    <p className="text-sm text-gray-600 mb-2">We use cookies to enhance Your experience on Our Platform. These include:</p>
                    <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                      <li>Strictly Necessary cookies</li>
                      <li>Performance Cookies</li>
                      <li>Functionality Cookies</li>
                      <li>Security cookies</li>
                      <li>Advertising and social media cookies</li>
                    </ul>
                    <p className="text-sm text-gray-600 mt-2">You can control cookies through Your browser settings.</p>
                  </div>
                )}
              </div>

              {/* Grievance Officer Section */}
              <div className="border border-gray-200 rounded-md">
                <button 
                  className="w-full text-left px-4 py-2 flex justify-between items-center bg-gray-50 hover:bg-gray-100 rounded-t-md"
                  onClick={() => toggleSection('grievance')}
                >
                  <span className="font-medium">Grievance Officer</span>
                  <span>{activeSection === 'grievance' ? '−' : '+'}</span>
                </button>
                {activeSection === 'grievance' && (
                  <div className="px-4 py-3">
                    <p className="text-sm text-gray-600">For any grievances or complaints regarding the handling of Your Personal Information, You can contact Our designated Grievance Officer, Panduranga Acharya, at legal@zeptonow.com.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

       
      </main>

      
    </div>
  );
};

export default PrivacyPolicyPage;