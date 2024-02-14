import React, { useReducer } from 'react';

const Count = () => {

    const initialState = 0;
    const reducer = (state, action) => {
        if (action?.type === "Increment") {
            return state + action.payload.value;
        }

        else if (action?.type === "Decrement") {
            return state - action.payload.value;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="h-screen flex items-center justify-center bg-[#81e713]">
            <div className="h-72 w-72 border-4 border-teal-500 rounded-lg">
                <p className="mt-10 text-lg font-bold">{state}</p>
                <div className="flex justify-around mt-10">
                    <button className="bg-green-500 py-2 px-2 rounded-lg  font-semibold"
                        onClick={() => dispatch({ type: "Decrement", payload: { value: 5 } })}
                    >Decrement</button>
                    <button className="bg-amber-300 py-2 px-2 rounded-lg font-semibold"
                        onClick={() => dispatch({ type: "Increment", payload: { value: 5 } })}
                    >Increment</button>
                </div>

            </div>
        </div>
    );
};

export default Count; 