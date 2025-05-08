import { Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
import SearchAppBar from "./Searchbar";
import { Button, ButtonGroup } from "@mui/material";
import styled from "styled-components";

const Buttons=styled(Button)`
    background: white;
`;

function Navbar() {
    return (
        <div className="flex flex-row justify-between items-center px-10 py-5 shadow-md">
            <Link to='/' className="text-4xl font-bold font-[Tagesschrift]">Blog</Link>
            <div className="flex flex-row gap-5 items-center">
                <SearchAppBar/>
                <div className="flex flex-row gap-1">
                    <Link to='/signup' className="bg-black text-white rounded-full py-2 px-5 text-lg font-medium">SignUp</Link>
                    <Link to='/login' className="rounded-full py-2 px-5 text-lg font-medium">Login</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;