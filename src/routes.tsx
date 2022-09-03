import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import App from './App';
import { SignIn } from './pages/SignIn';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign_in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}
