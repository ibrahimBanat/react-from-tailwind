import React from 'react';

const Options = props => {
  return (
    <div>
      <label class='text-gray-700' for='animals'>
        <select
          id=''
          class='block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500'
          name='animals'
          onChange={event => {
            props.setFormHandle({
              ...props.formHandle,
              [props.attribute]: event.target.value,
            });
          }}
        >
          {props.options.map(item => {
            return <option value={item}>{item}</option>;
          })}
        </select>
      </label>
    </div>
  );
};

export default Options;
