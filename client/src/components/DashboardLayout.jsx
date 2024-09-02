// components/DashboardLayout.js

import { Outlet, Link } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div>
        <h1>I Love Rokib</h1>
            <nav>
                <ul>
                    <li><Link to="/dashboard">Home</Link></li>
                    <li><Link to="/dashboard/users">User Management</Link></li>
                    <li><Link to="/dashboard/settings">Settings</Link></li>
                </ul>
            </nav>

            {/* This is where the nested route component will be rendered */}
            <Outlet />
        </div>
    );
};

export default DashboardLayout;
