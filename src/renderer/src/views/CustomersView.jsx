import React from 'react';
import useCustomersViewModel from '../viewmodels/useCustomersViewModel';

const CustomersView = () => {
    const { stats, customers } = useCustomersViewModel();

    return (
        <div className="flex-1 overflow-y-auto p-8 space-y-8">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full ${stat.bg} flex items-center justify-center ${stat.color}`}>
                            <span className="material-symbols-outlined">{stat.icon}</span>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.title}</p>
                            <div className="flex items-baseline gap-2">
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</h3>
                                <span className={`text-xs font-bold ${stat.isPositive ? 'text-green-600' : 'text-red-600'}`}>{stat.change}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Data Table */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <h4 className="font-bold text-slate-800 dark:text-white">Müşteri Listesi</h4>
                    <div className="flex gap-2">
                        <button className="px-3 py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">filter_list</span> Filtrele
                        </button>
                        <button className="px-3 py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">download</span> Dışa Aktar
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 uppercase text-[11px] font-bold tracking-wider">
                                <th className="px-6 py-4">Müşteri Adı</th>
                                <th className="px-6 py-4">Sektör</th>
                                <th className="px-6 py-4">İlgili Kişi</th>
                                <th className="px-6 py-4">Telefon</th>
                                <th className="px-6 py-4">Bakiye</th>
                                <th className="px-6 py-4 text-center">Durum</th>
                                <th className="px-6 py-4 text-right">İşlemler</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            {customers.map((customer) => (
                                <tr key={customer.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary font-bold overflow-hidden">
                                                <span className="material-symbols-outlined text-slate-400">{customer.icon}</span>
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-slate-900 dark:text-white leading-none">{customer.name}</p>
                                                <p className="text-[11px] text-slate-500 mt-1">ID: {customer.id}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-xs font-medium text-slate-600 dark:text-slate-300 px-2.5 py-1 bg-slate-100 dark:bg-slate-800 rounded-full">{customer.sector}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{customer.contact}</p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-xs text-slate-600 dark:text-slate-400">{customer.phone}</p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className={`text-sm font-bold ${customer.balanceColor} dark:text-white`}>{customer.balance}</p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex justify-center">
                                            <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold ${customer.statusColor}`}>
                                                <span className={`w-1.5 h-1.5 rounded-full ${customer.dotColor}`}></span>
                                                {customer.status}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-1">
                                            <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                                                <span className="material-symbols-outlined text-lg">visibility</span>
                                            </button>
                                            <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                                                <span className="material-symbols-outlined text-lg">edit</span>
                                            </button>
                                            <button className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                                                <span className="material-symbols-outlined text-lg">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* Pagination */}
                <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Toplam <span className="font-bold text-slate-800 dark:text-white">1,284</span> kayıttan <span className="font-bold text-slate-800 dark:text-white">1-10</span> arası gösteriliyor
                    </p>
                    <div className="flex items-center gap-1">
                        <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-700 text-slate-400 hover:bg-white dark:hover:bg-slate-800 transition-colors">
                            <span className="material-symbols-outlined text-lg">chevron_left</span>
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded border border-primary bg-primary text-white font-bold text-sm">1</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 text-sm font-medium">2</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 text-sm font-medium">3</button>
                        <span className="px-2 text-slate-400">...</span>
                        <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 text-sm font-medium">12</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-700 text-slate-400 hover:bg-white dark:hover:bg-slate-800 transition-colors">
                            <span className="material-symbols-outlined text-lg">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomersView;
