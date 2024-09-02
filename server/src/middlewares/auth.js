
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const protect = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return res.status(401).json({ message: 'Not authorized to access this route' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);

        if (!req.user) {
            return res.status(404).json({ message: 'No user found with this id' });
        }

        next();
    } catch (err) {
        return res.status(401).json({ message: 'Not authorized to access this route' });
    }
};

export const authorize = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: `User role ${req.user.role} is not authorized to access this route` });
        }
        next();
    };
};



// routes/admin.js  started

// import express from 'express';
// import { protect, authorize } from '../middleware/auth.js';

// const router = express.Router();

// router.get('/dashboard', protect, authorize('admin', 'superadmin'), (req, res) => {
//     res.json({ message: 'Welcome to the admin dashboard' });
// });

// router.get('/superadmin', protect, authorize('superadmin'), (req, res) => {
//     res.json({ message: 'Welcome to the superadmin dashboard' });
// });

// export default router;  Finished

// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const PrivateRoute = ({ component: Component, roles, ...rest }) => {
//     const { isAuthenticated, user } = useSelector(state => state.auth);

//     return (
//         <Route
//             {...rest}
//             element={isAuthenticated && roles.includes(user.role) ? (
//                 <Component />
//             ) : (
//                 <Navigate to="/login" />
//             )}
//         />
//     );
// };

// export default PrivateRoute;
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Dashboard from './components/Dashboard';
// import SuperAdmin from './components/SuperAdmin';
// import Login from './components/Login';
// import PrivateRoute from './components/PrivateRoute';

// function App() {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/login" element={<Login />} />
//                 <PrivateRoute path="/dashboard" roles={['admin', 'superadmin']} component={Dashboard} />
//                 <PrivateRoute path="/superadmin" roles={['superadmin']} component={SuperAdmin} />
//                 {/* Add more routes as needed */}
//             </Routes>
//         </Router>
//     );
// }

// export default App;

