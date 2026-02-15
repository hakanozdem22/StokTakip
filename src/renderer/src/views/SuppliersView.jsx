import React from 'react';
import useSuppliersViewModel from '../viewmodels/useSuppliersViewModel';

const SuppliersView = () => {
    const { stats, suppliers, renderStars } = useSuppliersViewModel();

    return (
        <div className="flex-1 overflow-y-auto p-8 space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">{stat.title}</span>
                            <span className={`${stat.color} flex items-center text-xs font-bold`}>
                                {stat.change} <span className="material-symbols-outlined text-xs">{stat.icon}</span>
                            </span>
                        </div>
                        <div className="text-2xl font-bold text-slate-800 dark:text-white tracking-tight">{stat.value}</div>
                    </div>
                ))}
            </div>

            {/* Search and Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
                <div className="w-full sm:w-1/2 relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors">search</span>
                    </div>
                    <input
                        className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary text-sm transition-all outline-none dark:text-white"
                        placeholder="Tedarikçi adı, kategori veya ilgili kişi ile ara..."
                        type="text"
                    />
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors font-semibold text-sm">
                        <span className="material-symbols-outlined text-lg">filter_list</span>
                        Filtrele
                    </button>
                    <button className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all font-semibold text-sm shadow-md shadow-primary/20">
                        <span className="material-symbols-outlined text-lg">add</span>
                        Yeni Tedarikçi Ekle
                    </button>
                </div>
            </div>

            {/* Data Table Container */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Tedarikçi Adı</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Kategori</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">İlgili Kişi</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Telefon</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Performans</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Aktif Sipariş</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">İşlemler</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            {suppliers.map(supplier => (
                                <tr key={supplier.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">{supplier.initials}</div>
                                            <span className="font-semibold text-slate-700 dark:text-slate-200">{supplier.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${supplier.categoryColor}`}>{supplier.category}</span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{supplier.contact}</td>
                                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{supplier.phone}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-1">
                                            {renderStars(supplier.rating).map((star, i) => (
                                                <span key={i} className={`material-symbols-outlined text-amber-400 text-lg ${star === 'star_outline' ? 'text-slate-300' : ''}`} style={{ fontVariationSettings: "'FILL' " + (star === 'star' ? '1' : (star === 'star_half' ? '0.5' : '0')) }}>
                                                    {star}
                                                </span>
                                            ))}
                                            <span className="text-xs font-bold ml-1 text-slate-500">{supplier.rating.toFixed(1)}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="font-bold text-slate-700 dark:text-slate-200">{supplier.activeOrders}</span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-1.5 text-slate-400 hover:text-primary dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all" title="Detaylar">
                                                <span className="material-symbols-outlined text-lg">visibility</span>
                                            </button>
                                            <button className="p-1.5 text-slate-400 hover:text-green-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all" title="Düzenle">
                                                <span className="material-symbols-outlined text-lg">edit</span>
                                            </button>
                                            <button className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all" title="Sil">
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
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">10 - 20 / 124 kayıt gösteriliyor</p>
                    <div className="flex items-center gap-1">
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white dark:hover:bg-slate-700 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-all border border-transparent hover:border-slate-200">
                            <span className="material-symbols-outlined text-xl">chevron_left</span>
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-white font-bold text-sm">1</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm transition-all border border-transparent hover:border-slate-200">2</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm transition-all border border-transparent hover:border-slate-200">3</button>
                        <span className="px-2 text-slate-400">...</span>
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm transition-all border border-transparent hover:border-slate-200">12</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white dark:hover:bg-slate-700 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-all border border-transparent hover:border-slate-200">
                            <span className="material-symbols-outlined text-xl">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuppliersView;
