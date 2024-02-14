import React, { useReducer } from 'react';
import { initialState, reducer } from './FormReductionExport';

const PrimaryInfoForm = () => {
    
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleToSubmit = (event) => {
        console.log(state)
        event.preventDefault();
        console.log(event, "check")
    }

    return (
        <div className="flex justify-center items-center text-white">
            <div className="mt-20 w-80 border-2">
                <p className="text-lg font-semibold my-5 text-slate-800 underline underline-offset-4">Primary Info Field</p>
                <form onSubmit={handleToSubmit}>

                    <div className="my-2">
                        <label className="mr-2 block ">
                            First Name
                        </label>
                        <input
                            onBlur={(e) => dispatch({
                                type: "INPUT", payload: {
                                    name: e.target.name,
                                    value: e.target.value
                                }
                            })}
                            type="text"
                            id="firstName"
                            name="firstName"
                            className="border-2"></input>
                    </div>
                    <div className="my-2">
                        <label className="mr-2 block ">
                            Last Name
                        </label>
                        <input
                            onBlur={(e) => dispatch({
                                type: "INPUT", payload: {
                                    name: e.target.name,
                                    value: e.target.value
                                }
                            })}
                            type="text"
                            id="lastName"
                            name="lastName"
                            className="border-2">
                        </input>
                    </div>
                    <div className="my-2">
                        <label className="mr-2 block ">
                            Email
                        </label>
                        <input
                            onBlur={(e) => dispatch({
                                type: "INPUT", payload: {
                                    name: e.target.name,
                                    value: e.target.value
                                }
                            })}
                            type="email"
                            id="email"
                            name="email"
                            className="border-2">

                        </input>
                    </div>

                    <div className="my-2">
                        <label className="mr-2 block">
                            Gender
                        </label>
                        <input
                            onClick={(e) => dispatch({
                                type: "INPUT", payload: {
                                    name: e.target.name,
                                    value: e.target.value
                                }
                            })}
                            type="radio" id="male" name="gender" value="male" className=" rounded-3xl"></input>
                        <span className="ml-1 mr-2">Male</span>
                        <input
                            onClick={(e) => dispatch({
                                type: "INPUT", payload: {
                                    name: e.target.name,
                                    value: e.target.value
                                }
                            })}
                            type="radio"
                            id="female"
                            name="gender"
                            value="female"
                            className=" rounded-3xl"></input>
                        <span className="ml-1 mr-2">Female</span>

                        <input
                            onClick={(e) => dispatch({
                                type: "INPUT", payload: {
                                    name: e.target.name,
                                    value: e.target.value
                                }
                            })}
                            type="radio"
                            id="other"
                            name="gender"
                            value="Other"
                            className=" rounded-3xl"></input>
                        <span className="ml-1 mr-2">Other</span>
                    </div>
                    <div className="my-2">
                        <label className="mr-2 block ">
                            Education
                        </label>
                        <select
                            onChange={(e) => dispatch({
                                type: "INPUT", payload: {
                                    name: e.target.name,
                                    value: e.target.value
                                }
                            })}
                            className="w-44 px-2" name="eduction" id='eduction'>
                            <option className="" value="SSC">SSC</option>
                            <option className="" value="HSC">HSC</option>
                            <option className="" value="UnderGraduate">UnderGraduate</option>
                            <option className="" value="Graduate">Graduate</option>
                        </select>

                    </div>
                    <div className="my-2">
                        <label className="mr-2 block ">
                            Number of Pc's
                        </label>
                        <div className="flex justify-center">
                            <button className="bg-orange-400 px-2 text-lg font-semibold rounded-md mr-1">-</button>
                            <p className="border-2 w-2/3">0</p>
                            <button className="bg-orange-400 px-2 text-lg font-semibold rounded-md ml-1">+</button>
                        </div>
                    </div>
                    <div className="my-2">
                        <label className="mr-2 block ">
                            Feedback
                        </label>
                        <textarea
                            onBlur={(e) => dispatch({
                                type: "INPUT", payload: {
                                    name: e.target.name,
                                    value: e.target.value
                                }
                            })}
                            type="text" id="feedback" name="feedback" className="border-2"></textarea>
                    </div>
                    <div className="my-2 flex justify-center items-center">
                        <input
                            onClick={(e) => dispatch({
                                type: "TOGGLE", payload: {
                                    name: e.target.name,
                                    value: e.target.value
                                }
                            })}
                            className="mr-2" name="term" type="checkbox" id='term'></input>
                        <p>I agree to terms and conditions</p>
                    </div>
                    <button disabled={!state.term} className={state.term ? 'bg-blue-600 px-4 py-1 rounded-md mb-5' : 'bg-blue-200 px-4 py-1 rounded-md mb-5'} type="submit">
                        Submit
                    </button>


                </form>
            </div>

        </div>
    );
};

export default PrimaryInfoForm;