import { useContext } from "react";
import { ques } from "../Context";
import "../styles/Pallete.css";

const Pallete = () => {
  const { cur, status } = useContext(ques);
  const [CUR, setCur] = cur;
  const [STATUS, setStatus] = status;
  return (
    <div className="pallete">
      <div className="heading">Question Pallete</div>
      <div>
        <table>
          <tr>
            <td>
              <button
                onClick={() => {
                  setCur(1);
                }}
              >
                1
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  setCur(2);
                }}
              >
                2
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  setCur(3);
                }}
              >
                3
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  setCur(4);
                }}
              >
                4
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  setCur(5);
                }}
              >
                5
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button>6</button>
            </td>
            <td>
              <button>7</button>
            </td>
            <td>
              <button>8</button>
            </td>
            <td>
              <button>9</button>
            </td>
            <td>
              <button>10</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Pallete;
