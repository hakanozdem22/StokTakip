import React, { useState } from 'react';
import useUserManagementViewModel from '../viewmodels/useUserManagementViewModel';
import RoleModal from '../components/modals/RoleModal';

const UserManagementView = () => {
    const { activeTab, setActiveTab, activeRole, setActiveRole, users, roles } = useUserManagementViewModel();
    const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);

    return (
        <div className="flex-1 bg-background-light dark:bg-background-dark p-6 md:p-8 overflow-y-auto">
            {/* Page Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">Kullanıcı Yetkilendirme</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">Sistem erişimlerini ve kullanıcı rollerini merkezi olarak yönetin.</p>
                </div>
                <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg font-bold text-sm shadow-lg shadow-primary/20 transition-all">
                    <span className="material-symbols-outlined text-lg">person_add</span>
                    Yeni Kullanıcı Ekle
                </button>
            </div>

            {/* Tabs */}
            <div className="mb-6">
                <div className="flex border-b border-slate-200 dark:border-slate-800 gap-8">
                    <button
                        onClick={() => setActiveTab('users')}
                        className={`flex items-center gap-2 border-b-2 pb-3 px-1 text-sm font-bold tracking-wide transition-all ${activeTab === 'users' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                    >
                        <span className="material-symbols-outlined text-xl">group</span>
                        Kullanıcı Listesi
                    </button>
                    <button
                        onClick={() => setActiveTab('roles')}
                        className={`flex items-center gap-2 border-b-2 pb-3 px-1 text-sm font-bold tracking-wide transition-all ${activeTab === 'roles' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                    >
                        <span className="material-symbols-outlined text-xl">security</span>
                        Rol Yetkileri
                    </button>
                </div>
            </div>

            {/* Content based on Tab */}
            {activeTab === 'users' ? (
                /* User Table Section */
                <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden mb-12">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Kullanıcı Adı</th>
                                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Rol</th>
                                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Durum</th>
                                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Son Giriş</th>
                                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 text-right">İşlemler</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                {users.map(user => (
                                    <tr key={user.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className={`size-8 rounded-full ${user.avatarColor} flex items-center justify-center font-bold text-xs`}>{user.initials}</div>
                                                <span className="text-sm font-semibold text-slate-900 dark:text-white">{user.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${user.roleColor}`}>{user.role}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${user.statusColor}`}>
                                                <span className={`size-1.5 rounded-full ${user.dotColor}`}></span>
                                                {user.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">{user.lastLogin}</td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end gap-2">
                                                <button className="p-1.5 rounded-lg text-slate-400 hover:text-primary hover:bg-primary/5 transition-all">
                                                    <span className="material-symbols-outlined text-lg">edit</span>
                                                </button>
                                                <button className="p-1.5 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-50 transition-all">
                                                    <span className="material-symbols-outlined text-lg">delete</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            ) : (
                /* Role Permissions Section */
                <div className="mb-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        {/* Role Selector Sidebar */}
                        <div className="lg:col-span-3 space-y-2">
                            {roles.map(role => (
                                <button
                                    key={role.id}
                                    onClick={() => setActiveRole(role.id)}
                                    className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition-all flex items-center justify-between ${activeRole === role.id
                                        ? 'bg-primary text-white shadow-md shadow-primary/20'
                                        : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                                        }`}
                                >
                                    {role.name}
                                    {activeRole === role.id && <span className="material-symbols-outlined text-sm">chevron_right</span>}
                                </button>
                            ))}
                            <button onClick={() => setIsRoleModalOpen(true)} className="w-full text-left px-4 py-3 rounded-lg border-2 border-dashed border-slate-300 dark:border-slate-700 text-slate-400 dark:text-slate-500 flex items-center justify-center gap-2 hover:border-primary hover:text-primary transition-all">
                                <span className="material-symbols-outlined">add</span>
                                Yeni Rol Tanımla
                            </button>
                        </div>

                        {/* Permissions Grid */}
                        <div className="lg:col-span-9 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
                            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                                <div>
                                    <h3 className="font-bold text-slate-900 dark:text-white">{roles.find(r => r.id === activeRole)?.name} Yetkileri</h3>
                                    <p className="text-sm text-slate-500">Bu rol için tanımlanmış sistem erişim izinleri.</p>
                                </div>
                                <button className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary hover:text-white transition-all">
                                    Değişiklikleri Kaydet
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                                {/* Stok Management Permissions */}
                                <div>
                                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-sm">inventory_2</span>
                                        Stok Yönetimi
                                    </h4>
                                    <div className="space-y-3">
                                        {['Stok Görüntüleme', 'Stok Düzenleme / Ekleme', 'Envanter Sayımı'].map((perm, i) => (
                                            <label key={i} className="flex items-center gap-3 cursor-pointer group">
                                                <input defaultChecked className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary/20" type="checkbox" />
                                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">{perm}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                {/* Order Management Permissions */}
                                <div>
                                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-sm">local_shipping</span>
                                        Siparişler
                                    </h4>
                                    <div className="space-y-3">
                                        {['Sipariş Oluşturma', 'Sipariş İptali', 'Sipariş Onaylama'].map((perm, i) => (
                                            <label key={i} className="flex items-center gap-3 cursor-pointer group">
                                                <input defaultChecked={activeRole === 'admin'} className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary/20" type="checkbox" />
                                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">{perm}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                {/* Reporting Permissions */}
                                <div>
                                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-sm">bar_chart</span>
                                        Raporlama
                                    </h4>
                                    <div className="space-y-3">
                                        {['Rapor Görüntüleme', 'Rapor Çıktısı Alma (PDF/Excel)'].map((perm, i) => (
                                            <label key={i} className="flex items-center gap-3 cursor-pointer group">
                                                <input defaultChecked className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary/20" type="checkbox" />
                                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">{perm}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                {/* User Management Permissions */}
                                <div>
                                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-sm">admin_panel_settings</span>
                                        Sistem Yönetimi
                                    </h4>
                                    <div className="space-y-3">
                                        {['Kullanıcı Ekleme / Silme', 'Rol Tanımlama'].map((perm, i) => (
                                            <label key={i} className="flex items-center gap-3 cursor-pointer group">
                                                <input defaultChecked={activeRole === 'admin'} className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary/20" type="checkbox" />
                                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">{perm}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <RoleModal
                isOpen={isRoleModalOpen}
                onClose={() => setIsRoleModalOpen(false)}
                onSave={() => {
                    console.log('Role Saved');
                    setIsRoleModalOpen(false);
                }}
            />
        </div>
    );
};

export default UserManagementView;
