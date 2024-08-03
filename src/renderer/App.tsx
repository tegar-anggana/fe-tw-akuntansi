import {
  MemoryRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import 'tailwindcss/tailwind.css';
import PerusahaanScreen from './screens/PerusahaanScreen';
import CoaScreen from './screens/CoaScreen';
import HeaderLayout from './screens/layouts/HeaderLayout';
import SidebarLayout from './screens/layouts/SidebarLayout';

export default function App() {
  return (
    <div className="font-nunito-sans">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/perusahaan/index" />} />
          <Route path="/perusahaan" element={<HeaderLayout />}>
            <Route path="/perusahaan/index" element={<PerusahaanScreen />} />
          </Route>
          <Route path="/dashboard" element={<SidebarLayout />}>
            <Route path="/dashboard/coa" element={<CoaScreen />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
