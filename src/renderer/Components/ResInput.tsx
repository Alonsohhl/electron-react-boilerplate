/* eslint-disable import/no-cycle */
/* eslint-disable prettier/prettier */
import { useContext } from 'react';
import { AppContext } from "../App"

/* eslint-disable prettier/prettier */
const ResInput = (props: any) => {

    // const { iFields, setIFields } = useContext(AppContext)
    const { state } = props
    return(
        <>
            <textarea
                name="fUrlBuilt"
                id="fUrlBuilt"
                readOnly
                value={state}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
        </>
    )
}
export default ResInput
