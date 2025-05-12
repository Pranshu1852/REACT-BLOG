import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [loginData, setLoginData]=useState({
    identifier:'',
    password:''
  })

  const navigate=useNavigate();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const response=fetch('http://localhost:1337/api/auth/local',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    })

    const result=await response;
    if(result.ok){
      const data=await result.json();
      console.log(data);
      document.cookie=`name='jwttoken'`
      navigate('/');
    }
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setLoginData((prevData)=>{
      return {
        ...prevData,
        [event.target.name]: event.target.value
      }
    })
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center w-full mt-10">
      <div className="flex flex-col gap-7 items-center border-2 border-black p-7 rounded-lg min-w-96 shadow-md">
        <h2 className="font-[Tagesschrift] text-2xl font-medium">Login</h2>
        <div className="flex flex-col gap-2 self-start w-full">
          <label className="text-lg font-medium">Email</label>
          <input
            className="border-[1.5px] border-black rounded-md p-2"
            type="text"
            placeholder="Enter your email..."
            name='identifier'
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2 self-start w-full">
          <label className="text-lg font-medium">Password</label>
          <input
            className="border-[1.5px] border-black rounded-md p-2"
            type="text"
            placeholder="Enter your Password..."
            name='password'
            onChange={handleChange}
          />
        </div>
        <Link to="/signup" className="font-medium">
          Create a new account
        </Link>
        <button className="py-2 px-4 font-semibold text-white bg-black rounded-md">
          Login
        </button>
      </div>
    </form>
  );
}

export default Login;
