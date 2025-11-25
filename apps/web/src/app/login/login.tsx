import { login } from "./login.service";

export const Login = () => (
    <form action={login}>
        <input name="login"/>
        <input name="password"/>
        <button type="submit">Log In</button>
    </form>
);