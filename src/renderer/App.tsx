import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import 'tailwindcss/tailwind.css';

function Hello() {
  return (
    <div>
      <h1 className="text-4xl font-nunito-sans">Hello world</h1>
      <h1 className="text-4xl font-manrope">Another Hello</h1>
      <img
        src="https://www.w3schools.com/images/lamp.jpg"
        alt="Lamp"
        width="32"
        height="32"
      />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
