/* eslint-disable prettier/prettier */
// import React from 'React';
import { useContext } from "react";
import { IInput } from '../schema';
// eslint-disable-next-line import/no-cycle
import { AppContext } from "../App"

// eslint-disable-next-line import/prefer-default-export
export const EInput = (props :any) => {
    const { inputSetter } = props
    // eslint-disable-next-line
    const { udpHeader1 } = useContext(AppContext)
    const onInputChange = (e :React.ChangeEvent<HTMLTextAreaElement>) =>{
        udpHeader1({ header1: 'new header'},0)
    }
  return (
    <>
        <textarea
                name="fHeader2"
                id="fHeader2"
                placeholder="Header 2"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" onChange={onInputChange}
        />
    </>
  );
};
