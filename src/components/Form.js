import React, { useState } from 'react';
import Options from './Options';
import axios from 'axios';

const Form = () => {
  const [formHandle, setFormHandle] = useState({
    name: '',
    email: '',
    phone: '',
    birth: '',
    country: '',
    university: '',
    programmingLanguage: '',
  });
  let countriesArray = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antigua &amp; Barbuda',
    'Argentina',
    'Armenia',
    'Aruba',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
    'Bolivia',
    'Bosnia &amp; Herzegovina',
    'Botswana',
    'Brazil',
    'British Virgin Islands',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Cape Verde',
    'Cayman Islands',
    'Chad',
    'Chile',
    'China',
    'Colombia',
    'Congo',
    'Cook Islands',
    'Costa Rica',
    'Cote D Ivoire',
    'Croatia',
    'Cruise Ship',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Estonia',
    'Ethiopia',
    'Falkland Islands',
    'Faroe Islands',
    'Fiji',
    'Finland',
    'France',
    'French Polynesia',
    'French West Indies',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Gibraltar',
    'Greece',
    'Greenland',
    'Grenada',
    'Guam',
    'Guatemala',
    'Guernsey',
    'Guinea',
    'Guinea Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hong Kong',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Isle of Man',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jersey',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kuwait',
    'Kyrgyz Republic',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macau',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Montserrat',
    'Morocco',
    'Mozambique',
    'Namibia',
    'Nepal',
    'Netherlands',
    'Netherlands Antilles',
    'New Caledonia',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palestine',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Puerto Rico',
    'Qatar',
    'Reunion',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Pierre &amp; Miquelon',
    'Samoa',
    'San Marino',
    'Satellite',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'South Africa',
    'South Korea',
    'Spain',
    'Sri Lanka',
    'St Kitts &amp; Nevis',
    'St Lucia',
    'St Vincent',
    'St. Lucia',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    "Timor L'Este",
    'Togo',
    'Tonga',
    'Trinidad &amp; Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Turks &amp; Caicos',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'Uruguay',
    'Uzbekistan',
    'Venezuela',
    'Vietnam',
    'Virgin Islands (US)',
    'Yemen',
    'Zambia',
    'Zimbabwe',
  ];
  let programmingLanguages = ['c#', 'python', 'javascript', 'java', 'c++'];

  const submit = () => {
    // const options = {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formHandle),
    // };
    // fetch('https://form-backend-dev.herokuapp.com/form', options).then(
    //   response => {
    //     console.log(response);
    //   }
    // );
    axios({
      method: 'POST',
      url: 'https://form-backend-dev.herokuapp.com/form',
      data: formHandle,
    }).then(response => {
      console.log(response.data);
    });
  };
  return (
    <div class='bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden'>
      <div class='px-4 py-8 sm:px-10'>
        {console.log(formHandle)}
        <div class='relative mt-6'>
          <div class='absolute inset-0 flex items-center'>
            <div class='w-full border-t border-gray-300'></div>
          </div>
          <div class='relative flex justify-center text-sm leading-5'>
            <span class='px-2 text-gray-500 bg-white'>Search criteria</span>
          </div>
        </div>
        <div class='mt-6'>
          <div class='w-full space-y-6'>
            <div class='w-full'>
              <div class=' relative '>
                <input
                  type='text'
                  id='search-form-price'
                  class=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                  placeholder='Name'
                  onChange={event => {
                    setFormHandle({
                      ...formHandle,
                      name: event.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div class='w-full'>
              <div class=' relative '>
                <input
                  type='email'
                  id='search-form-price'
                  class=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                  placeholder='Email'
                  onChange={event => {
                    setFormHandle({
                      ...formHandle,
                      email: event.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div class='w-full'>
              <div class=' relative '>
                <input
                  type='text'
                  id='search-form-price'
                  class=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                  placeholder='Phone Number'
                  onChange={event => {
                    setFormHandle({
                      ...formHandle,
                      phone: event.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div class='w-full'>
              <div class=' relative '>
                <input
                  type='date'
                  id='search-form-price'
                  class=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                  placeholder='Birth Date'
                  onChange={event => {
                    setFormHandle({
                      ...formHandle,
                      birth: event.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div class='w-full'>
              <div class=' relative '>
                <Options
                  label={'Country'}
                  options={countriesArray}
                  setFormHandle={setFormHandle}
                  formHandle={formHandle}
                  attribute={'country'}
                />
                {/* <input
                  type='text'
                  id='search-form-price'
                  class=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                  placeholder='Country/State'
                /> */}
              </div>
            </div>
            <div class='w-full'>
              <div class=' relative '>
                <input
                  type='text'
                  id='search-form-location'
                  class=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                  placeholder='University'
                  onChange={event => {
                    setFormHandle({
                      ...formHandle,
                      university: event.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div class='w-full'>
              <div class=' relative '>
                <Options
                  label={'Country'}
                  options={programmingLanguages}
                  attribute={'programmingLanguage'}
                  setFormHandle={setFormHandle}
                  formHandle={formHandle}
                />
                {/* <input
                  type='text'
                  id='search-form-name'
                  class=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                  placeholder='Programming Language'
                /> */}
              </div>
            </div>
            <div>
              <span class='block w-full rounded-md shadow-sm'>
                <button
                  type='button'
                  class='py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
                  onClick={() => submit()}
                >
                  Submit
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
