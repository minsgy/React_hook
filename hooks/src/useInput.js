// 2. useInput
export const useInput = (init, validator) =>{
    const [value, setValue] = useState(init);
    
    const onChange = (e) =>{
      const { target : {value} }= e;
      let willUpdate = true;
  
      if(typeof validator==="function"){
        willUpdate = validator(value);
      }
  
      if (willUpdate) {
        setValue(value);
      }
    };
    return { value, onChange };
  };