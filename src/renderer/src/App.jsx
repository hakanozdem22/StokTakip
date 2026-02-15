import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import DashboardView from './views/DashboardView';
import InventoryView from './views/InventoryView';
import OrdersView from './views/OrdersView';
import SuppliersView from './views/SuppliersView';
import CustomersView from './views/CustomersView';
import StockReportView from './views/StockReportView';
import NewProductView from './views/NewProductView';
import UserManagementView from './views/UserManagementView';
import SettingsView from './views/SettingsView';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<DashboardView />} />
                    <Route path="inventory" element={<InventoryView />} />
                    <Route path="inventory/new" element={<NewProductView />} />
                    <Route path="orders" element={<OrdersView />} />
                    <Route path="suppliers" element={<SuppliersView />} />
                    <Route path="customers" element={<CustomersView />} />
                    <Route path="reports" element={<StockReportView />} />
                    <Route path="users" element={<UserManagementView />} />
                    <Route path="settings" element={<SettingsView />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
