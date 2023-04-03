import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm.js';
import NotFound from './NotFound.js';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<LoginForm />} />
      <Route path="login" element={<LoginForm />} />
    </Routes>
  </BrowserRouter>
);

export default App;
