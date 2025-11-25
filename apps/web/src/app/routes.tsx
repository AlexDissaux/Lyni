import { Route, Routes } from 'react-router-dom';
import { Chat } from './chat/chat';
import { Login } from './login/login';


export function Routing() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Chat></Chat>}
      />
      <Route
        path="login"
        element={<Login></Login>}
      />
    </Routes>

  )
};