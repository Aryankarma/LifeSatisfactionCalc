import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Homestyles.module.css";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Home(){
  const [quick, setQuick] = useState(true);
  const navigate = useNavigate(); 

      function redirectUser() {
        if (quick) {
          navigate("./QuickCheck")
        } else {
          navigate("./DetailedCheck")
        }
      }

      return (
        <div className={style.mainContainer}>
          <h2 className={style.heading}>Check Your Life Satisfaction Level!</h2>

          <div className={style.container}>
            <div className={style.inputBoxes}>
              <div className={style.inputBox}>
                <input
                  type="radio"
                  name="type"
                  id="typeRadio"
                  className={style.input}
                  defaultChecked
                  onClick={() => setQuick(true)}
                />
                <label className={style.label} htmlFor="Quick test">
                  Quick test
                </label>
              </div>
              <div className={style.inputBox}>
                <input
                  type="radio"
                  name="type"
                  className={style.input}
                  id="typeRadio"
                  onClick={() => setQuick(false)}
                />
                <label className={style.label} htmlFor="Detailed test">
                  Detailed test
                </label>
              </div>
            </div>

            <button
              onClick={redirectUser}
              style={{ width: "150px" }}
            >{`Check ->`}</button>
          </div>

          <div className={style.links}>
            <a
              href="http://github.com/aryankarma/lifesatisfactioncalc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="http://linkedin.com/in/aryankarma/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="http://x.com/karmaaryan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            
          </div>
        </div>
      );

}

export default Home;




// import { useState, useEffect } from "react";
// import detailedTraitsData from "../src/data/detailedTraits.json";
// import quickTraitsData from '../src/data/quickTraits.json'
// import commonstyles from "./commonStyles.module.css";


// function QuickCheck() {
//   const [detailedTraits, setDetailedTraits] = useState({});
//   const [quickTraits, setQuickTraits] = useState({});
//   const [quick, setQuick] = useState(true);

//   const updateDetailedTraitCheckBox = (event, traitId) => {
//     setDetailedTraits((prev) => ({
//       ...prev,
//       [traitId]: event.target.checked,
//     }));
//   };

//   const updateQuickTraitCheckBox = (event, traitId) => {
//     setQuickTraits((prev) => ({
//       ...prev,
//       [traitId]: event.target.checked,
//     }));
//   };

//   // useEffect(() => {
//   //   // console.log(selectedTraits);
//   // }, [selectedTraits]);

//   const handleSubmit = () => {
//     var counter = 0;
//     if (quick) {
//       const selectedItems = Object.keys(quickTraits).filter(
//         (key) => quickTraits[key]
//       );
//       selectedItems.map((input) => {
//         counter = counter + detailedTraits[input].value;
//       });
//     } else {
//       const selectedItems = Object.keys(detailedTraits).filter(
//         (key) => detailedTraits[key]
//       );
//       selectedItems.map((input) => {
//         counter = counter + detailedTraits[input].value;
//       });
//     }
//     counter = Number(counter.toFixed(2));
//     console.log(counter)
//   };

//   return (
//     <div className={commonstyles.container}>
//       <div className={commonstyles.headingAndOptn}>
//         <h2 className={commonstyles.heading}>Select your personality traits</h2>
//         <input
//           onClick={() => setQuick(true)}
//           type="radio"
//           name="option"
//           id="option"
//           defaultChecked
//         />{" "}
//         Quick
//         <input
//           onClick={() => setQuick(false)}
//           type="radio"
//           name="option"
//           id="option"
//         />{" "}
//         Detailed
//       </div>

//       <div className={commonstyles.traits}>
//         {quick
//           ? quickTraitsData.map((input, key) => {
//               return (
//                 <div key={key} className={commonstyles.box}>
//                   <input
//                     className={commonstyles.input}
//                     style={{ margin: "0" }}
//                     type="checkbox"
//                     checked={quickTraits[key] || false}
//                     onChange={(e) => updateQuickTraitCheckBox(e, key)}
//                   />
//                   <label className={commonstyles.label} htmlFor="">
//                     {input.statement}
//                   </label>
//                 </div>
//               );
//             })
//           : detailedTraitsData.map((input, key) => {
//               return (
//                 <div key={key} className={commonstyles.box}>
//                   <input
//                     className={commonstyles.input}
//                     style={{ margin: "0" }}
//                     type="checkbox"
//                     checked={detailedTraits[key] || false}
//                     onChange={(e) => updateDetailedTraitCheckBox(e, key)}
//                   />
//                   <label className={commonstyles.label} htmlFor="">
//                     {input.statement}
//                   </label>
//                 </div>
//               );
//             })}
//       </div>
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// }

// export default QuickCheck;
