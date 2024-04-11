import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Link className="btn" to='/'>Home</Link>
            <Link className="btn" to='/login'>Login</Link>
        </div>
    );
};

export default Header;