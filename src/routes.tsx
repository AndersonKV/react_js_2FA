import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import App from './App';
import { Home } from './pages/Home';
import { PageNotFound } from './pages/PageNotFound';
import { SignIn } from './pages/SignIn';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
