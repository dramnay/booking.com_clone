import "./navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo">Booking.com</span>
                <div className="navItems">
                    <ul>
                        <li>
                            <button className=" navButton1">INR</button>
                        </li>
                        <li>
                            <button className="navButton1">photo</button>
                        </li>
                        <li>
                            <button className=" navButton1">?</button>
                        </li>
                        <li>
                            <button className=" navButton1">
                                List your property
                            </button>
                        </li>
                        <li>
                            <button className="navButton">Register</button>
                        </li>
                        <li>
                            {" "}
                            <button className="navButton">Sign in</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
