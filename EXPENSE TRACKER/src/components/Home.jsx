import { useEffect, useRef, useState } from "react";
import Add from "./Add";

const Home = () => {
  const [balance, setBalance] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [editIndex, setEditIndex] = useState("");

  const updateTitle = useRef();
  const updateAmt = useRef();

  const totalExpenses = expenses.reduce(
    (acc, item) => acc + Number(item.amt),
    0
  );

  const handleInitialSave = (initialAmt) => {
    const initialValue = Number(initialAmt.current.value);
    if (isNaN(initialValue) || initialValue <= 0) {
      return alert("Please enter a valid initial balance.");
    }
    setBalance(initialValue);
    initialAmt.current.value = "";
  };

  const handleExpense = (transactionName, transactionAmt) => {
    const transName = transactionName.current.value.trim();
    const transAmt = Number(transactionAmt.current.value);

    if (!transName || isNaN(transAmt) || transAmt <= 0) {
      return alert("Please enter a valid name and amount.");
    }

    if (transAmt > balance - totalExpenses) {
      return alert(
        `Limit Exceeded! Remaining Balance: ${balance - totalExpenses}`
      );
    }

    setExpenses((prevExpenses) => {
      const newExpenses = [...prevExpenses, { name: transName, amt: transAmt }];
      return newExpenses;
    });

    transactionName.current.value = "";
    transactionAmt.current.value = "";
  };

  const handleDelete = (indexToremove) => {
    const updatedtrans = expenses.filter((_, index) => index !== indexToremove);
    setExpenses(updatedtrans);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleUpdate = (indexToUpdate, nameTo, amtTo) => {
    if (!nameTo.trim() || isNaN(amtTo) || amtTo <= 0) {
      return alert("Please enter a valid name and amount.");
    }

    setExpenses((prevExpenses) =>
      prevExpenses.map((item, index) =>
        index === indexToUpdate ? { name: nameTo, amt: Number(amtTo) } : item
      )
    );

    setEditIndex(""); // Reset edit mode after update
  };

  return (
    <div>
      <div className="Header">Expense Tracker</div>
      <div className="balances">
        <p>Total Balance: {balance}</p>
        <p>Total Expenses: {totalExpenses}</p>
        <p>Remaining Balance: {balance - totalExpenses}</p>
      </div>
      <div className="details">
        <Add
          handleInitialSave={handleInitialSave}
          balance={balance}
          handleExpense={handleExpense}
        />
        <div className="recent-trans">
          <h2>Recent Transactions</h2>
          <table border="1" cellPadding="10" className="table-container">
            <thead>
              <tr>
                <th>Name</th>
                <th>Amount</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((item, index) => (
                <tr key={index}>
                  {editIndex === index ? (
                    <>
                      <td>
                        <input
                          ref={updateTitle}
                          type="text"
                          defaultValue={item.name}
                        />
                      </td>
                      <td>
                        <input
                          ref={updateAmt}
                          type="number"
                          defaultValue={item.amt}
                        />
                      </td>
                    </>
                  ) : (
                    <>
                      <td>{item.name}</td>
                      <td>{item.amt}</td>
                    </>
                  )}

                  {/* Delete Button */}
                  <td>
                    <button
                      className="deletebtn"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </td>

                  {/* Edit / Update Button */}
                  <td>
                    {editIndex === index ? (
                      <button
                        className="editbtn"
                        onClick={() =>
                          handleUpdate(
                            index,
                            updateTitle.current.value,
                            updateAmt.current.value
                          )
                        }
                      >
                        Update
                      </button>
                    ) : (
                      <button
                        className="editbtn"
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
