import React, {useState} from 'react';

// 2. useInput
const useInput = (init, validator) =>{
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
  } 

  return { value, onChange };
};


const App = () => {
  // 2. useInput

  const maxLen = (value) => value.length <= 10;
  const name = useInput("Mr", maxLen);
  return (
    <div>
        {/* 2. useInput */}
        <h1> ㅎㅇㅇ</h1>
        {/* {...name} name에 들어간 함수의 모든 값을 unpack (Return) */}
        <input placeholder="Name" {...name} />
    </div>
  );
};

export default App;