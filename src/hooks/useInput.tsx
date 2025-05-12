import { useState, type ChangeEvent, type FocusEvent } from "react";

function useInput(initVal: string, validationFn: (val: string)=>boolean) {
    const [dataVal,setDataVal]=useState(initVal);
    const [isEdited,setIsEdited]=useState(false);

    const valInvalid=!validationFn(dataVal);

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setIsEdited(true);
        setDataVal((prevVal)=>{
            return event.target.value;
        });
    }
    
    function handleBlur(event: FocusEvent<HTMLInputElement>){
        setIsEdited(true);
    }

    return { dataVal, handleChange, handleBlur, isError: isEdited && valInvalid};
}

export default useInput;