import { Link, NavLink } from 'react-router-dom';
import SearchAppBar from './Searchbar';
import Dropdown from './Dropdown';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-row justify-between items-center px-10 py-5 shadow-md">
      <Link to="/" className="text-4xl font-bold font-[Tagesschrift]">
        {t('logo')}
      </Link>
      <div className="flex flex-row gap-5 items-center">
        <SearchAppBar />
        <div className="flex flex-row gap-1">
          <NavLink
            to="/signup"
            className="bg-black text-white rounded-full py-2 px-5 text-lg font-medium"
            state={{ id: 1234 }}
          >
            SignUp
          </NavLink>
          <NavLink
            to="/login"
            className="rounded-full py-2 px-5 text-lg font-medium"
            state={{ id: 1234 }}
          >
            Login
          </NavLink>
        </div>
        {/* <div className="flex flex-row gap-5">
                    <Link to='/addblog' className="flex flex-row items-center gap-2 text-sm font-medium"><DrawIcon/> Write</Link>
                    <Link to='/profile' className="h-10 w-10 rounded-full bg-black"><img className="w-10 h-10" src={profilePic} alt="" /></Link>
                </div> */}
        <Dropdown />
      </div>
    </div>
  );
}

export default Navbar;
