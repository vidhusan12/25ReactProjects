import { useState } from "react"
import data from "./data";
import './styles.css';


export default function Accordian() {

  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);


  //Callback function for singel selection
  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId)

  }

  //Callback function for multi selection
  function handleMultiSelection(getCurrentId) {
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) {
      copyMultiple.push(getCurrentId)
    } else {
      copyMultiple.splice(findIndexOfCurrentId, 1)
    }

    setMultiple(copyMultiple)
  }

  return (
    <>
      <div className="wrapper">
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}
          className={enableMultiSelection ? "active-button" : "inactive-button"}
        >
          Enable Multi Selection
        </button>
        <div className="accordian">
          {
            data && data.length > 0 ?
              data.map(dataItem => <div className="item">
                <div onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                } className="title">
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {enableMultiSelection
                  ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  ) :
                  selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )
                }
              </div>
              ) : <div>No data found !</div>
          }
        </div>
      </div>
    </>
  )
}