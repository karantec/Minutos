"use client"

import React, { useState } from 'react';
import PersonalDetailsForm from './PersonalDetailsForm';
import BusinessDetailsForm from './BusinessDetailsForm';
import KiranaStoreAddressForm from './KiranaStoreAddressForm';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  businessName: string;
  businessType: string;
  streetAddress: string;
  city: string;
  state: string;
  pinCode: string;
  nominateForAwards: boolean;
  acceptMessages: boolean;
}

const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    businessName: '',
    businessType: '',
    streetAddress: '',
    city: '',
    state: '',
    pinCode: '',
    nominateForAwards: false,
    acceptMessages: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your API
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 shadow-sm">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
        KiranaPro Merchant Signup
      </h1>
      <p className="text-center text-gray-600 mb-6">
        Please enter your details below
      </p>

      <form onSubmit={handleSubmit}>
        <PersonalDetailsForm formData={formData} handleChange={handleChange} />
        <BusinessDetailsForm formData={formData} handleChange={handleChange} />
        <KiranaStoreAddressForm formData={formData} handleChange={handleChange} />

        <div className="mb-4">
          <div className="flex items-start mb-2">
            <input
              type="checkbox"
              id="nominateForAwards"
              name="nominateForAwards"
              checked={formData.nominateForAwards}
              onChange={handleChange}
              className="mt-1 mr-2"
            />
            <label htmlFor="nominateForAwards" className="text-gray-700">
              <span className="flex items-center">
                <span role="img" aria-label="trophy" className="mr-1">🏆</span>
                Nominate for Kirana Awards
              </span>
            </label>
          </div>
          
          <div className="flex items-start">
            <input
              type="checkbox"
              id="acceptMessages"
              name="acceptMessages"
              checked={formData.acceptMessages}
              onChange={handleChange}
              className="mt-1 mr-2"
            />
            <label htmlFor="acceptMessages" className="text-gray-700">
              I accept receiving messages for updates and promotions.
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-kirana-green hover:bg-opacity-90 text-white py-3 px-4 rounded-full font-medium transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignupForm;