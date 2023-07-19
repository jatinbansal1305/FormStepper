import React, { useState } from 'react';
import '../styles.css';

const Body = ({ onChangeTitle }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
    onChangeTitle(e.target.value);
  };

  return (
    <div className="body">
      <input
        type="text"
        className="input-field"
        placeholder="Type to change the header title..."
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default Body;
