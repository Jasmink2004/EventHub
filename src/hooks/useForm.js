import { useState } from 'react';

export const useForm = (initialState, validate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (validate) {
      setErrors(prev => ({
        ...prev,
        [name]: validate[name] ? validate[name](value) : null
      }));
    }
  };

  return { values, errors, handleChange };
};
