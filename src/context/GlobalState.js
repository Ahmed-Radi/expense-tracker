import React,{createContext, useReducer} from 'react'
import AppReducer from './AppReducer'
// initial State

export const initialState = {
    transactions: [],
}

// export context
export const GlobalContext = createContext(initialState)

//provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] =useReducer(AppReducer, initialState);

    // Action
    const deleteTransaction = (id) => {
        dispatch({
            type: 'DELETE',
            payload: id
        })
    }

    const addTransaction = (transaction) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }
    return(
        <GlobalContext.Provider
            value={{
                transactions: state.transactions,
                deleteTransaction,
                addTransaction
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}