import { useState } from 'react';

const useUserManagementViewModel = () => {
    const [activeTab, setActiveTab] = useState('users'); // 'users' or 'roles'
    const [activeRole, setActiveRole] = useState('admin');

    // Users Data
    const [users] = useState([
        {
            id: 1,
            initials: 'AY',
            name: 'Ahmet Yılmaz',
            role: 'Yönetici',
            roleColor: 'bg-primary/10 text-primary border-primary/20',
            status: 'Aktif',
            statusColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
            dotColor: 'bg-emerald-500',
            lastLogin: '12.10.2023 14:30',
            avatarColor: 'bg-blue-100 text-blue-700'
        },
        {
            id: 2,
            initials: 'MD',
            name: 'Mehmet Demir',
            role: 'Depo Sorumlusu',
            roleColor: 'bg-indigo-50 text-indigo-600 border-indigo-100',
            status: 'Aktif',
            statusColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
            dotColor: 'bg-emerald-500',
            lastLogin: '11.10.2023 09:15',
            avatarColor: 'bg-indigo-100 text-indigo-700'
        },
        {
            id: 3,
            initials: 'AK',
            name: 'Ayşe Kaya',
            role: 'Rapor Görüntüleyici',
            roleColor: 'bg-slate-100 text-slate-600 border-slate-200',
            status: 'Pasif',
            statusColor: 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400',
            dotColor: 'bg-slate-400',
            lastLogin: '05.10.2023 16:45',
            avatarColor: 'bg-amber-100 text-amber-700'
        }
    ]);

    // Roles Data
    const roles = [
        { id: 'admin', name: 'Yönetici' },
        { id: 'warehouse', name: 'Depo Sorumlusu' },
        { id: 'reporter', name: 'Rapor Görüntüleyici' },
        { id: 'viewer', name: 'İzleyici' }
    ];

    const permissions = {
        admin: {
            stock: { view: true, edit: true, count: true },
            orders: { create: true, cancel: true, approve: true },
            reports: { view: true, export: true },
            system: { manageUsers: true, manageRoles: true }
        },
        warehouse: {
            stock: { view: true, edit: true, count: true },
            orders: { create: true, cancel: false, approve: false },
            reports: { view: true, export: false },
            system: { manageUsers: false, manageRoles: false }
        }
        // ... other roles
    };

    return {
        activeTab,
        setActiveTab,
        activeRole,
        setActiveRole,
        users,
        roles,
        permissions
    };
};

export default useUserManagementViewModel;
