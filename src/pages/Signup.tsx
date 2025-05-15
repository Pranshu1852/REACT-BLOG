import { Link, useNavigate } from 'react-router-dom';
import FormField from '../components/FormField';
import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FocusEvent,
  type FormEvent,
} from 'react';
import { useSelector } from 'react-redux';
import type { StateType } from '../store/store';

function SignUp() {
  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const { isLogin } = useSelector((state: StateType) => {
    return {
      isLogin: state.general.isLogin,
    };
  });

  useEffect(() => {
    if (isLogin) {
      navigate('/');
    }
  }, []);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    console.log('inside');

    setSignUpData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const errorUsername = useRef('');
  const errorEmail = useRef('');
  const errorPassword = useRef('');
  const [submit, setSubmit] = useState(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setSubmit(true);

    if (
      submit &&
      (errorEmail.current || errorPassword.current || errorUsername.current)
    ) {
      setSubmit(false);
      return;
    }

    if (submit) {
      console.log('Form Submitted');
    }
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
          error={errorUsername}
          value={signUpData.username}
          onChange={handleChange}
          submit={submit}
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
          error={errorEmail}
          value={signUpData.email}
          onChange={handleChange}
          submit={submit}
        />
        <FormField
          label="Password"
          id="password"
          placeholder="Enter your Password..."
          name="password"
          type="password"
          error={errorPassword}
          value={signUpData.password}
          onChange={handleChange}
          submit={submit}
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
