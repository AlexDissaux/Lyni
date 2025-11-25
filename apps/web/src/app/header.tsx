import { Link } from "react-router-dom";


export const Header = () => (
    <div role="navigation">
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
        </ul>
    </div> 
)