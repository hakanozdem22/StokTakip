import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
    const location = useLocation();

    // Determine header title based on current path
    const getPageTitle = () => {
        switch (location.pathname) {
            case '/': return 'Gösterge Paneli';
            case '/inventory': return 'Stok Listesi';
            case '/orders': return 'Sipariş Yönetimi';
            case '/customers': return 'Müşteri Yönetimi';
            case '/reports': return 'Stok Raporu';
            case '/users': return 'Kullanıcı Yetkilendirme';
            case '/suppliers': return 'Tedarikçi Yönetimi';
            case '/settings': return 'Ayarlar';
            default: return 'Panel';
        }
    };

    return (
        <div className="flex h-screen overflow-hidden bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans">
            {/* Sidebar Navigation */}
            <aside className="w-64 flex flex-col bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 shrink-0">
                <div className="p-6 flex flex-col h-full">
                    {/* Brand Profile */}
                    <div className="flex items-center gap-3 mb-8">
                        <div className="bg-primary size-10 rounded-lg flex items-center justify-center text-white">
                            <span className="material-symbols-outlined">factory</span>
                        </div>
                        <div className="flex flex-col overflow-hidden">
                            <h1 className="text-slate-900 dark:text-white text-base font-bold leading-tight truncate">
                                Endüstriyel Merkez</h1>
                            <p className="text-slate-500 dark:text-slate-400 text-xs truncate">Tesis #402</p>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex flex-col gap-1 grow">
                        <NavLink
                            to="/"
                            end
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${isActive
                                    ? 'bg-primary text-white'
                                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                                }`
                            }
                        >
                            <span className="material-symbols-outlined">dashboard</span>
                            <p className="text-sm font-medium">Gösterge Paneli</p>
                        </NavLink>

                        <NavLink
                            to="/inventory"
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${isActive
                                    ? 'bg-primary text-white'
                                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                                }`
                            }
                        >
                            <span className="material-symbols-outlined">inventory_2</span>
                            <p className="text-sm font-medium">Stok Listesi</p>
                        </NavLink>

                        <NavLink
                            to="/orders"
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${isActive
                                    ? 'bg-primary text-white'
                                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                                }`
                            }
                        >
                            <span className="material-symbols-outlined">shopping_cart</span>
                            <p className="text-sm font-medium">Siparişler</p>
                        </NavLink>

                        <NavLink
                            to="/suppliers"
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${isActive
                                    ? 'bg-primary text-white'
                                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                                }`
                            }
                        >
                            <span className="material-symbols-outlined">local_shipping</span>
                            <p className="text-sm font-medium">Tedarikçiler</p>
                        </NavLink>

                        <NavLink
                            to="/customers"
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${isActive
                                    ? 'bg-primary text-white'
                                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                                }`
                            }
                        >
                            <span className="material-symbols-outlined">group</span>
                            <p className="text-sm font-medium">Müşteri Yönetimi</p>
                        </NavLink>

                        <NavLink
                            to="/reports"
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${isActive
                                    ? 'bg-primary text-white'
                                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                                }`
                            }
                        >
                            <span className="material-symbols-outlined">bar_chart</span>
                            <p className="text-sm font-medium">Raporlar</p>
                        </NavLink>

                        <NavLink
                            to="/users"
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${isActive
                                    ? 'bg-primary text-white'
                                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                                }`
                            }
                        >
                            <span className="material-symbols-outlined">group</span>
                            <p className="text-sm font-medium">Kullanıcılar</p>
                        </NavLink>

                        <NavLink
                            to="/settings"
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${isActive
                                    ? 'bg-primary text-white'
                                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                                }`
                            }
                        >
                            <span className="material-symbols-outlined">settings</span>
                            <p className="text-sm font-medium">Ayarlar</p>
                        </NavLink>
                    </nav>

                    {/* Sidebar Footer Action */}
                    <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                        <button className="w-full flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold transition-opacity hover:opacity-90">
                            <span className="material-symbols-outlined text-sm">add_circle</span>
                            <span>Yeni Sipariş</span>
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-y-auto">
                {/* Header */}
                <header className="flex items-center justify-between bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-8 py-4 sticky top-0 z-10">
                    <div className="flex items-center gap-8">
                        <h2 className="text-slate-900 dark:text-white text-xl font-bold tracking-tight">{getPageTitle()}</h2>
                        <div className="relative w-64">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
                            <input
                                className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary outline-none"
                                placeholder="Stokta ara..."
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined">notifications</span>
                        </button>
                        <button className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined">help_outline</span>
                        </button>
                        <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-700 mx-2"></div>
                        <div className="flex items-center gap-3">
                            <img
                                className="size-9 rounded-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-lh5lV-ynbSb47Cq1cUwtjQ8VL3Z8ZOAvkLg7IzRQB0OLXe_8ZzJdOAleTtrQE7smPsa3y4Gt3VYzWVlq9MCus-km54N2lOGxo8GrHlSDfylav_xwzZYWCRKt6QIaNltg-jRAiIo6oQm0CovRvP3vg_yMQPHhmaik760neQ7Qb6Zji9BVu42cfl0cY7ydwagsngn36aKY6bBNG7TymJIT7e_2RRl6GSAXhZFGH_puKV5WfdkIKXnmii5S7ywsEciwagllN7aBigzx"
                                alt="User profile avatar"
                            />
                            <div className="hidden lg:block text-right">
                                <p className="text-sm font-semibold dark:text-white">Alex Johnson</p>
                                <p className="text-xs text-slate-500">Kat Sorumlusu</p>
                            </div>
                        </div>
                    </div>
                </header>

                {/* View Content */}
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
