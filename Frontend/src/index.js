import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import { ProtectedRoute } from './utils/PrivateRoute';
import { Login } from './components/auth/Login';
import "./css/index.css"
import CreateAcc from './components/createAcc/CreateAcc';
import Dashboard from './components/Dashboard/Dashboard';





const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <Router>
            <Routes>
                <Route path="/login" index element={<Login />} />
                <Route path="/create-account" index element={<CreateAcc />} />
                <Route path="/" element={<ProtectedRoute>
                        <App />
                    </ProtectedRoute>
                    }>
                    
                    <Route path="/dashboard" element={<Dashboard />}>
                        
                    </Route>
                    
                </Route>
                <Route path="*" element={<Navigate to="/login"/>} />
            </Routes>
        </Router>
    </Provider>
)