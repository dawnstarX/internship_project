import { useContext } from "react";
import { ques } from "../Context";
import Singlebutton from "./Singlebutton";
import "../styles/Pallete.css";

const Pallete = () => {
  const buttonArray=[1,2,3,4,5,6,7,8,9,10];
  

  return (
    <div className="pallete">
      <div className="heading">Question Pallete</div>
      <div>
       {
        buttonArray.map((buttonValue)=>{
            return <Singlebutton key={buttonValue} buttonNumber={{value:buttonValue}}  />
        })
       }
      </div>
    </div>
  );
};

export default Pallete;
