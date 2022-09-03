import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import App from './App';
import { CreatedSuccess } from './pages/CreatedSuccess';
import { Home } from './pages/Home';
import { PageNotFound } from './pages/PageNotFound';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/created_success" element={<CreatedSuccess />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
