import { Link } from "react-router-dom";
import { useContext } from "react";


const Header = () => {
    return (
        <header className="flex justify-between">
            <Link to={'/'} className="flex item-center gap-1">
                <span className="font-bold text-3xl">
                    <span className="text-[#0065FF]">InnSphere</span>
                </span>
            </Link>
        </header>
    );
}
export default Header;