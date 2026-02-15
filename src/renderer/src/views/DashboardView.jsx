import React from 'react';
import useDashboardViewModel from '../viewmodels/useDashboardViewModel';

const DashboardView = () => {
    const {
        stats,
        criticalStock,
        transactions // Renamed from recentTransactions to be consistent
    } = useDashboardViewModel();

    return (
        <div className="p-8 space-y-8 max-w-[1400px] mx-auto w-full">
            {/* Top-level KPIs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.title}</p>
                            <span className={`material-symbols-outlined ${stat.iconColor}`}>{stat.icon}</span>
                        </div>
                        <div className="flex items-end gap-2">
                            <h3 className={`text-2xl font-bold dark:text-white ${stat.valueColor || ''}`}>{stat.value}</h3>
                            <span className={`text-xs font-bold mb-1 ${stat.isPositive ? 'text-emerald-600' : 'text-rose-600'}`}>
                                {stat.change}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                {/* Critical Stock Alerts Table */}
                <div className="xl:col-span-2 space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold dark:text-white flex items-center gap-2">
                            <span className="material-symbols-outlined text-rose-500">error_outline</span>
                            Kritik Stok Uyarıları
                        </h3>
                        <a className="text-sm font-medium text-primary hover:underline" href="#">Tümünü Gör</a>
                    </div>
                    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Ürün Adı</th>
                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">SKU</th>
                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-center">Mevcut Seviye</th>
                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-center">Min Eşik</th>
                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-right">İşlem</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                    {criticalStock.map((item) => (
                                        <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                                            <td className="px-6 py-4 text-sm font-medium dark:text-white">{item.name}</td>
                                            <td className="px-6 py-4 text-sm text-slate-500 font-mono">{item.sku}</td>
                                            <td className="px-6 py-4 text-sm text-center">
                                                <span className="px-2.5 py-1 rounded-full bg-rose-100 text-rose-700 font-bold">{item.current}</span>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-center text-slate-500">{item.min}</td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-lg hover:opacity-90 transition-opacity">Sipariş Ver</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Recent Transactions Summary */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold dark:text-white">Son İşlemler</h3>
                        <button className="p-1 rounded-md text-slate-400 hover:text-primary">
                            <span className="material-symbols-outlined text-lg">more_horiz</span>
                        </button>
                    </div>
                    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-6">
                        {/* Simple Chart Visualization */}
                        <div className="h-40 flex items-end gap-3 pb-2 border-b border-slate-100 dark:border-slate-800">
                            {/* Static Chart Bars for Visual - Could be dynamic later */}
                            <div className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-t h-1/2 relative group">
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity mb-2">320</div>
                            </div>
                            <div className="flex-1 bg-primary/40 dark:bg-primary/20 rounded-t h-3/4 relative group">
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity mb-2">540</div>
                            </div>
                            <div className="flex-1 bg-primary rounded-t h-full relative group">
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity mb-2">720</div>
                            </div>
                            <div className="flex-1 bg-primary/60 dark:bg-primary/30 rounded-t h-[60%] relative group">
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity mb-2">410</div>
                            </div>
                            <div className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-t h-1/3 relative group">
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity mb-2">210</div>
                            </div>
                        </div>
                        {/* Transaction List */}
                        <div className="space-y-4">
                            {transactions.map((tx) => (
                                <div key={tx.id} className="flex items-center gap-3">
                                    <div className={`p-2 rounded-lg ${tx.isPositive ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600' : 'bg-rose-100 dark:bg-rose-900/30 text-rose-600'}`}>
                                        <span className="material-symbols-outlined text-sm">{tx.isPositive ? 'add_circle' : 'remove_circle'}</span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-semibold dark:text-white truncate">{tx.type}: {tx.name}</p>
                                        <p className="text-xs text-slate-500">{tx.time}</p>
                                    </div>
                                    <p className={`text-sm font-bold ${tx.isPositive ? 'text-emerald-600' : 'text-rose-600'}`}>{tx.amount}</p>
                                </div>
                            ))}
                        </div>
                        <button className="w-full py-2 text-sm font-bold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 transition-colors">
                            Tüm Kayıtları Gör
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardView;
