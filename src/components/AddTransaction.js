import React, { useState, useContext } from 'react'
import { GlobalContext } from './../context/GlobalState';
import { v4 as uuidv4 } from 'uuid';

export const AddTransaction = () => {
    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext)
    const onSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id:uuidv4(),
            text: text,
            amount: amount,
        }
        addTransaction(newTransaction)
    }
    return (
        <div>
                <h3>Add new transaction</h3>
                <form id="form" onSubmit={(e) => onSubmit(e)}>
                    <div className="form-control">
                        <label htmlFor="text">Text</label>
                        <input type="text" vale={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                    </div>
                    <div className="form-control">
                        <label htmlFor="amount">Amount <br />
                            (negative - expense, positive - income)
                        </label>
                        <input type="number" value={amount} onChange={(e) => setAmount(+e.target.value)} placeholder="Enter amount..." /> {/* '+' sign help to convert from String to Number*/}
                    </div>
                    <button className="btn">Add transaction</button>
                </form>
        </div>
    )
}
