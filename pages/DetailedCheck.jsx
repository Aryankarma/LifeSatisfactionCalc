import { useState } from "react";
import detailedTraits from "../src/data/detailedTraits.json";
import commonstyles from "./commonStyles.module.css";
import LifeSatisfactionPopup from "../src/components/ResultPopup";

function QuickCheck() {
  const [selectedTraits, setSelectedTraits] = useState({});
  const [finalResult, setFinalResult] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const updateCheckBox = (event, traitId) => {
    setSelectedTraits((prev) => ({
      ...prev,
      [traitId]: event.target.checked,
    }));
  };

  const maxPS = 12.64;
  const minPS = -11.99;

  const calculatePercentage = (input) => {
    /* Normalized_Score = ((sun of selected scores (counter) - minPS) / (maxPS - minPS))* 100 */

    var result = ((input - minPS) / (maxPS - minPS)) * 100;
    result = Number(result.toFixed(2));
    setFinalResult(result)
    setShowPopup(true);
    // console.log(result);
  };


  const handleSubmit = () => {
    const selectedItems = Object.keys(selectedTraits).filter(
      (key) => selectedTraits[key]
    );
    var counter = 0;
    selectedItems.map((input) => {
      counter = counter + detailedTraits[input].value;
    });
    counter = Number(counter.toFixed(2));
    // console.log(counter);
    calculatePercentage(counter)
  };

  return (
    <div className={commonstyles.container}>
      {showPopup && (
        <LifeSatisfactionPopup
          score={finalResult}
          onClose={() => setShowPopup(false)}
        />
      )}

      <h2 className={commonstyles.heading}>Select your personality traits</h2>
      <div className={commonstyles.traits}>
        {detailedTraits.map((input, key) => {
          return (
            <div key={key} className={commonstyles.box}>
              <input
                className={commonstyles.input}
                style={{ margin: "0" }}
                type="checkbox"
                checked={selectedTraits[key] || false}
                onChange={(e) => updateCheckBox(e, key)}
              />
              <label className={commonstyles.label} htmlFor="">
                {input.statement}
              </label>
            </div>
          );
        })}
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default QuickCheck;
