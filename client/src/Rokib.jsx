
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import AppLayout from './components/Layout/AppLayout';
import DashboardHome from './components/DashboardHome';
import UserManagement from './components/UserManagement';
import Settings from './components/Settings';
import Home from './components/Home';
import Login from './components/Login';
import ToggleSwitch from './components/toggleswitch/ToggleSwitch ';
import DigitalClock from './components/toggleswitch/DigitalClock';

function App() {
    return (
        <Router>
            <Routes>
            <Route path="/toggle" element={<ToggleSwitch />} />
            <Route path="/clock" element={<DigitalClock />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<Home />} />
                    <Route path="users" element={<UserManagement />} />
                    <Route path="settings" element={<Settings />} />
                </Route>
                <Route path="/dashboard" element={<DashboardLayout />}>
                    <Route index element={<DashboardHome />} />
                    <Route path="users" element={<UserManagement />} />
                    <Route path="settings" element={<Settings />} />
                </Route>
                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
}

export default App;
