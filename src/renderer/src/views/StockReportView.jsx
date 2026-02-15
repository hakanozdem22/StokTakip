import React from 'react';
import useStockReportViewModel from '../viewmodels/useStockReportViewModel';

const StockReportView = () => {
    const { kpis, distribution, topMovers } = useStockReportViewModel();

    return (
        <div className="flex-1 max-w-7xl mx-auto w-full p-4 md:p-8 space-y-8 overflow-y-auto">
            {/* Page Title and Export Actions */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="space-y-1">
                    <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Stok Raporu</h1>
                    <p className="text-slate-500 dark:text-slate-400 font-medium">Fabrika envanter durumuna genel bakış ve operasyonel analiz.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-300 text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                        <span className="material-symbols-outlined text-xl">description</span>
                        Excel'e Aktar
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined text-xl">picture_as_pdf</span>
                        PDF Olarak İndir
                    </button>
                </div>
            </div>

            {/* Filters Section */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 min-w-max">
                    <span className="material-symbols-outlined text-slate-400">calendar_month</span>
                    <div className="flex items-center bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-1.5 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 transition-all">
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">01 Eki 2023 - 31 Eki 2023</span>
                        <span className="material-symbols-outlined text-slate-400 ml-2">expand_more</span>
                    </div>
                </div>
                <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 hidden md:block"></div>
                <select className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-1.5 text-sm font-semibold text-slate-700 dark:text-slate-300 focus:ring-primary focus:border-primary outline-none">
                    <option>Tüm Kategoriler</option>
                    <option>Hammadde</option>
                    <option>Yarı Mamul</option>
                    <option>Bitmiş Ürün</option>
                </select>
                <select className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-1.5 text-sm font-semibold text-slate-700 dark:text-slate-300 focus:ring-primary focus:border-primary outline-none">
                    <option>Tüm Depolar</option>
                    <option>Merkez Depo</option>
                    <option>Bursa Lojistik</option>
                    <option>Antrepo-A</option>
                </select>
                <div className="flex-1"></div>
                <button className="text-primary text-sm font-bold flex items-center gap-1 hover:underline">
                    <span className="material-symbols-outlined text-lg">filter_alt_off</span>
                    Filtreleri Temizle
                </button>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {kpis.map((kpi, index) => (
                    <div key={index} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
                        <div className={`absolute right-[-20px] top-[-20px] size-24 ${kpi.overlay} rounded-full group-hover:scale-110 transition-transform`}></div>
                        <div className="flex items-center gap-4 mb-4">
                            <div className={`size-12 rounded-lg ${kpi.bg} ${kpi.color} flex items-center justify-center`}>
                                <span className="material-symbols-outlined text-2xl">{kpi.icon}</span>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{kpi.title}</p>
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white leading-none">{kpi.value}</h3>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className={`${kpi.isPositive ? 'text-emerald-600' : 'text-red-500'} text-sm font-bold flex items-center`}>
                                <span className="material-symbols-outlined text-sm">{kpi.isPositive ? 'trending_up' : 'trending_down'}</span> {kpi.change}
                            </span>
                            <span className="text-slate-400 text-xs font-medium">{kpi.note}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Line Chart */}
                <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Zaman İçinde Stok Seviyeleri</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Son 30 günlük genel envanter trendi</p>
                        </div>
                        <div className="flex items-center gap-4 text-xs font-bold text-slate-500 dark:text-slate-400">
                            <div className="flex items-center gap-1.5">
                                <span className="size-3 rounded-full bg-primary"></span> Giriş
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="size-3 rounded-full bg-blue-300"></span> Çıkış
                            </div>
                        </div>
                    </div>
                    <div className="h-64 flex items-end justify-between gap-1 relative pt-4">
                        {/* Simulated Chart Bars/Lines with Tailwind */}
                        <div className="absolute inset-0 border-b border-slate-100 dark:border-slate-800 flex flex-col justify-between pointer-events-none">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="border-b border-slate-100 dark:border-slate-800 w-full h-0"></div>
                            ))}
                        </div>
                        {[40, 55, 45, 70, 60, 80, 50, 35, 65, 90, 85, 40].map((h, i) => (
                            <div key={i} className={`flex-1 ${i % 2 === 0 ? 'bg-primary' : 'bg-primary/40'} hover:opacity-80 transition-all rounded-t`} style={{ height: `${h}%` }}></div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-4 px-1 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                        <span>01 Eki</span>
                        <span>07 Eki</span>
                        <span>14 Eki</span>
                        <span>21 Eki</span>
                        <span>28 Eki</span>
                    </div>
                </div>

                {/* Pie Chart */}
                <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Stok Dağılımı</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">Kategorilere göre hacim dağılımı</p>
                    <div className="relative size-48 mx-auto mb-8">
                        {/* SVG Simulated Pie Chart */}
                        <svg className="size-full -rotate-90" viewBox="0 0 32 32">
                            <circle cx="16" cy="16" fill="transparent" r="16" stroke="#1a227f" strokeDasharray="45 100" strokeWidth="32"></circle>
                            <circle cx="16" cy="16" fill="transparent" r="16" stroke="#3b82f6" strokeDasharray="30 100" strokeDashoffset="-45" strokeWidth="32"></circle>
                            <circle cx="16" cy="16" fill="transparent" r="16" stroke="#94a3b8" strokeDasharray="25 100" strokeDashoffset="-75" strokeWidth="32"></circle>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="size-24 rounded-full bg-white dark:bg-slate-800 flex flex-col items-center justify-center shadow-inner">
                                <span className="text-xs font-bold text-slate-400 uppercase">Toplam</span>
                                <span className="text-lg font-black text-slate-900 dark:text-white">14.2k</span>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-3">
                        {distribution.map((item, index) => (
                            <div key={index} className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span className={`size-3 rounded ${item.color}`}></span>
                                    <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">{item.label}</span>
                                </div>
                                <span className="text-sm font-bold text-slate-900 dark:text-white">{item.percentage}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Data Table Section */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">En Çok Hareket Gören Ürünler</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Son 30 günün en yoğun operasyonları</p>
                    </div>
                    <button className="text-primary text-sm font-bold hover:underline">Hepsini Gör</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50 dark:bg-slate-800/50">
                            <tr>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Ürün Adı</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">SKU</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Hareket</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Miktar Değişimi</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Kalan Miktar</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Durum</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            {topMovers.map((item) => (
                                <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="size-8 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                                                <span className="material-symbols-outlined text-sm">inventory_2</span>
                                            </div>
                                            <span className="text-sm font-bold text-slate-900 dark:text-white">{item.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-slate-500 dark:text-slate-400">{item.sku}</td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${item.typeColor}`}>
                                            <span className="material-symbols-outlined text-xs mr-1">{item.typeIcon}</span> {item.type}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-white">{item.amountChange}</td>
                                    <td className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-white">{item.remaining}</td>
                                    <td className="px-6 py-4">
                                        <div className="w-24 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                            <div className={`h-full ${item.progressColor}`} style={{ width: `${item.progress}%` }}></div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400">Gösteriliyor: 1-4 / Toplam 42 hareket</p>
                    <div className="flex gap-2">
                        <button className="size-8 rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-lg">chevron_left</span>
                        </button>
                        <button className="size-8 rounded border border-primary bg-primary flex items-center justify-center text-white font-bold text-xs">1</button>
                        <button className="size-8 rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-primary transition-colors font-bold text-xs">2</button>
                        <button className="size-8 rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-lg">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StockReportView;
