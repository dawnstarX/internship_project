import React, { createContext, useState } from "react";
export const ques = createContext();
const Context = ({ children }) => {
  const [cur, setCur] = useState(1);
  const [status, setStatus] = useState([-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [option, setOption] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  return (
    <ques.Provider
      value={{
        cur: [cur, setCur],
        status: [status, setStatus],
        option: [option, setOption],
      }}
    >
      {children}
    </ques.Provider>
  );
};

export default Context;
