import { Link } from "react-router-dom";

function SignUp() {
    return (
        <div className="flex flex-col items-center w-full mt-10">
            <div className="flex flex-col gap-7 items-center border-2 border-black p-7 rounded-lg min-w-96 shadow-md">
                <h2 className="font-[Tagesschrift] text-2xl font-medium">Sign Up</h2>
                <div className="flex flex-col gap-2 self-start w-full">
                    <label className="text-lg font-medium">UserName</label>
                    <input className="border-[1.5px] border-black rounded-md p-2" type="text" placeholder="Enter your username..."/>
                </div>
                <div className="flex flex-col gap-2 self-start w-full">
                    <label className="text-lg font-medium">Password</label>
                    <input className="border-[1.5px] border-black rounded-md p-2" type="text" placeholder="Enter your Password..."/>
                </div>
                <Link to='/login' className="font-medium">Already have an account</Link>
                <button className="py-2 px-4 font-semibold text-white bg-black rounded-md">Sign Up</button>
            </div>
        </div>
    );
}

export default SignUp;