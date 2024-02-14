import { actionTypes } from "./ActionTypes";

export const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    eduction: "",
    quantity: 0,
    feedback: "",
    term: false

};

export const reducer = (state, action) => {
    switch (action.type) {
        // Define cases for different action types to update the state
        // For example:
        case actionTypes.INPUT:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            };
        case actionTypes.TOGGLE:
            return {
                ...state,
                term: !state.term
            };
    }
};

