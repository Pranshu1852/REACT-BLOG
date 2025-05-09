import { Link } from 'react-router-dom';
import profilePic from '../assets/profile.png';

function BlogPage() {
  // const {val}:{val: number}=useOutletContext();

  return (
    <div className="flex flex-col gap-10 items-center justify-center w-[50%] mt-14 m-auto">
      <h2 className="text-5xl font-bold leading-[60px]">
        Implementing Role-Based Access Control (RBAC) in Node.js and React
      </h2>
      <div className="flex flex-row gap-4 self-start items-center">
        <Link to="/profile" className="h-8 w-8 rounded-full bg-black">
          <img className="w-8 h-8" src={profilePic} alt="" />
        </Link>
        <Link to="/profile" className="text-lg font-medium">
          Pranshu Patel
        </Link>
        <button className="border-[1px] border-black py-[0.4rem] px-4 text-base font-medium rounded-full">
          Follow
        </button>
        <p className="text-gray-600">4 min read</p>
        <p>.</p>
        <p className="text-gray-600">Oct 15, 2024</p>
      </div>
      <p className="border-[1.5px] border-gray-200 w-full rounded-full" />
      <p className="border-[1.5px] border-gray-200 w-full rounded-full" />
    </div>
  );
}

export default BlogPage;
