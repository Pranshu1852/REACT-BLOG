import { Link } from 'react-router-dom';
import FormField from '../components/FormField';
import {
  useState,
  type ChangeEvent,
  type FocusEvent,
  type FormEvent,
} from 'react';

function SignUp() {
  const [signUpData, setSignUpData] = useState({
    username: '',
    email: '',
    password: '',
  });

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setSignUpData((prevData)=>{
      return {
        ...prevData,
        [event.target.name]: event.target.value
      }
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center w-full mt-10"
    >
      <div className="flex flex-col gap-10 items-center border-2 border-black p-7 rounded-lg w-full max-w-xl shadow-md">
        <h2 className="font-[Tagesschrift] text-2xl font-medium">Sign Up</h2>
        <FormField
          label="UserName"
          id="username"
          placeholder="Enter your Username"
          name="username"
          type="text"
          rules={{
            required: {
              value: true,
              message: 'This is required field',
            },
            minLength: {
              value: 5,
              message: `min value require 5`,
            },
          }}
          minLength={5}
          required
        />
        <FormField
          label="Email"
          id="email"
          placeholder="Enter your Email..."
          name="email"
          type="email"
          rules={{
            required: {
              value: true,
              message: 'This is required field',
            },
            minLength: {
              value: 5,
              message: `min value require 5`,
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Please enter valid email',
            },
          }}
        />
        <FormField
          label="Password"
          id="password"
          placeholder="Enter your Password..."
          name="password"
          type="password"
        />
        <Link to="/login" className="font-medium">
          Already have an account
        </Link>
        <button className="py-2 px-4 font-semibold text-white bg-black rounded-md">
          Sign Up
        </button>
      </div>
    </form>
  );
}

export default SignUp;
