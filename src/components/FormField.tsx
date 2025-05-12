import React, { useRef, useState, type ChangeEvent, type FocusEvent, type Ref } from "react";
import { ErrorCheck } from "../validation/validation";

interface Rules{
    value: boolean|number|string|RegExp,
    message: string
}

type FormFieldProps={
    label: string,
    placeholder: string,
    id: string,
    rules?: Record<string,Rules>
} & React.HTMLProps<HTMLInputElement>

function FormField({label, id,placeholder, rules,...props}: FormFieldProps) {
    const [dataVal,setDataVal]=useState('');
    const [isEdited,setIsEdited]=useState(false);
    const error=useRef<string>('');

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setIsEdited(true);
        CheckError(event.target.value);
        setDataVal(event.target.value);
    }
    
    function handleBlur(event: FocusEvent<HTMLInputElement>){
        CheckError(event.target.value);
        setIsEdited(true);
    }

    function CheckError(inputVal: string){
        if(rules){
            error.current=(function isError(): string {
                console.log(rules);
                for(let a of Object.keys(rules)){
                    if(ErrorCheck(a,rules[a].value,inputVal)){
                        return rules[a].message;
                    }
                }
                return '';
            })()
            console.log(error);
            
        }
    }
    

    return (
        <div className="flex flex-col gap-2 self-start w-full">
          <label className="text-lg font-medium" htmlFor={id}>{label}</label>
          <input
            className="border-[1.5px] border-black rounded-md p-2"
            type="text"
            id={id}
            placeholder={placeholder}
            onChange={(event)=>{
                handleChange(event);
            }}
            onBlur={handleBlur}
            {...props}
          />
          { error.current!=='' && <p className="text-red-600 font-medium text-sm">{error.current}</p> }
        </div>
    );
}

export default FormField;