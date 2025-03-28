import { useRef } from "react";

const Add = ({ balance, handleInitialSave, handleExpense }) => {
  const initialAmt = useRef();
  const transactionName = useRef();
  const transactionAmt = useRef();
  return (
    <>
      {!balance == 0 ? (
        <div className="add-trans">
          <h2>Add Transaction</h2>
          <input
            ref={transactionName}
            type="text"
            name="Title"
            placeholder="Enter title"
            required
          />
          <input
            ref={transactionAmt}
            type="number"
            name="amount"
            placeholder="Enter Amount"
            required
          />
          <button
            onClick={() => {
              handleExpense(transactionName, transactionAmt);
            }}
          >
            Save
          </button>
        </div>
      ) : (
        <div className="add-trans">
          <h1>Add Balance</h1>
          <input
            type="number"
            name="amount"
            placeholder="Enter Inital Amount"
            ref={initialAmt}
            required
          />
          <button onClick={() => handleInitialSave(initialAmt)}>Save</button>
        </div>
      )}
    </>
  );
};

export default Add;
