import React from 'react';
import useOrdersViewModel from '../viewmodels/useOrdersViewModel';

const OrdersView = () => {
    const { orders, getStatusStyle } = useOrdersViewModel();

    return (
        <div className="flex flex-1 flex-col min-w-0">
            {/* Note: The Header in HTML is distinct from Layout. Layout has sidebar. 
                 The page specific header (search, add btn) is inside <main>.
                 We implemented generic header in Layout.jsx. 
                 However, HTML has "Sipariş Yönetimi" title and "Yeni Sipariş Oluştur" button specifically here.
                 We will implement the sub-header and content here.
             */}

            <div className="p-8 space-y-8">
                {/* Page Header Actions - Supplementing Layout Header */}
                {/* Since Layout has a generic header, we might want to hide it or customize it. 
                     For now, let's stick to the content body structure. 
                     The original HTML had a Title + Search + Actions in the top bar.
                     Our Layout.jsx handles the Top Bar generic structure.
                     We can add the specific page actions (like filters and stats) below.
                 */}

                {/* Stat Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                <span className="material-symbols-outlined">orders</span>
                            </div>
                            <span className="text-emerald-500 text-xs font-bold bg-emerald-50 px-2 py-1 rounded">+12.5%</span>
                        </div>
                        <p className="text-slate-500 text-sm font-medium">Toplam Sipariş</p>
                        <h3 className="text-2xl font-bold mt-1 dark:text-white">1,284</h3>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-amber-500/10 rounded-lg text-amber-600">
                                <span className="material-symbols-outlined">pending_actions</span>
                            </div>
                            <span className="text-amber-500 text-xs font-bold bg-amber-50 px-2 py-1 rounded">+5%</span>
                        </div>
                        <p className="text-slate-500 text-sm font-medium">Bekleyen Siparişler</p>
                        <h3 className="text-2xl font-bold mt-1 dark:text-white">42</h3>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-600">
                                <span className="material-symbols-outlined">local_shipping</span>
                            </div>
                            <span className="text-rose-500 text-xs font-bold bg-rose-50 px-2 py-1 rounded">-2%</span>
                        </div>
                        <p className="text-slate-500 text-sm font-medium">Yolda Olanlar</p>
                        <h3 className="text-2xl font-bold mt-1 dark:text-white">18</h3>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-600">
                                <span className="material-symbols-outlined">task_alt</span>
                            </div>
                            <span className="text-emerald-500 text-xs font-bold bg-emerald-50 px-2 py-1 rounded">+15%</span>
                        </div>
                        <p className="text-slate-500 text-sm font-medium">Tamamlananlar</p>
                        <h3 className="text-2xl font-bold mt-1 dark:text-white">1,224</h3>
                    </div>
                </div>

                {/* Table Section */}
                <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                    {/* Filters Bar */}
                    <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex flex-wrap gap-4 items-center justify-between">
                        <div className="flex flex-wrap gap-3">
                            <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700">
                                <span className="text-xs font-bold text-slate-500 uppercase">Durum:</span>
                                <select className="bg-transparent border-none text-sm font-medium focus:ring-0 p-0 pr-8 dark:text-white outline-none">
                                    <option>Tümü</option>
                                    <option>Bekliyor</option>
                                    <option>İşleniyor</option>
                                    <option>Yolda</option>
                                    <option>Teslim Edildi</option>
                                </select>
                            </div>
                            <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700">
                                <span className="text-xs font-bold text-slate-500 uppercase">Tedarikçi:</span>
                                <select className="bg-transparent border-none text-sm font-medium focus:ring-0 p-0 pr-8 dark:text-white outline-none">
                                    <option>Tüm Tedarikçiler</option>
                                    <option>Endüstriyel Çelik A.Ş.</option>
                                    <option>Global Lojistik</option>
                                    <option>Teknik Parça Ltd.</option>
                                </select>
                            </div>
                            <button className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-700 dark:text-slate-300">
                                <span className="material-symbols-outlined text-lg">calendar_month</span>
                                <span>Tarih Aralığı</span>
                            </button>
                        </div>
                        <div className="flex items-center gap-2">
                            <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                                <span className="material-symbols-outlined">filter_list</span>
                            </button>
                            <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                                <span className="material-symbols-outlined">download</span>
                            </button>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 text-xs font-bold uppercase tracking-wider">
                                    <th className="px-6 py-4">Sipariş No</th>
                                    <th className="px-6 py-4">Tedarikçi</th>
                                    <th className="px-6 py-4">Ürünler</th>
                                    <th className="px-6 py-4">Sipariş Tarihi</th>
                                    <th className="px-6 py-4">Tahmini Teslimat</th>
                                    <th className="px-6 py-4">Toplam Tutar</th>
                                    <th className="px-6 py-4">Durum</th>
                                    <th className="px-6 py-4 text-right">İşlemler</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                {orders.map(order => {
                                    const styles = getStatusStyle(order.status);
                                    return (
                                        <tr key={order.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                                            <td className="px-6 py-4 font-semibold text-primary">{order.id}</td>
                                            <td className="px-6 py-4 font-medium dark:text-white">{order.supplier}</td>
                                            <td className="px-6 py-4 text-slate-500 text-sm max-w-xs">{order.items}</td>
                                            <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{order.date}</td>
                                            <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{order.deliveryDate}</td>
                                            <td className="px-6 py-4 font-bold dark:text-white">{order.total}</td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${styles.container}`}>
                                                    <span className={`size-1.5 rounded-full ${styles.dot}`}></span>
                                                    {order.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right space-x-2">
                                                <button className="p-1.5 text-slate-400 hover:text-primary transition-colors" title="Detaylar">
                                                    <span className="material-symbols-outlined text-xl">visibility</span>
                                                </button>
                                                <button className="p-1.5 text-slate-400 hover:text-rose-500 transition-colors" title="İptal Et" disabled={order.status === 'Teslim Edildi'}>
                                                    <span className="material-symbols-outlined text-xl">cancel</span>
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="p-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                        <p className="text-sm text-slate-500">Toplam <b>1,284</b> siparişten <b>1-10</b> arası gösteriliyor</p>
                        <div className="flex items-center gap-1">
                            <button className="size-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-700 text-slate-400 hover:bg-slate-50 transition-colors">
                                <span className="material-symbols-outlined text-sm">chevron_left</span>
                            </button>
                            <button className="size-8 flex items-center justify-center rounded bg-primary text-white font-bold text-sm shadow-sm shadow-primary/20">1</button>
                            <button className="size-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 transition-colors text-sm">2</button>
                            <button className="size-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 transition-colors text-sm">3</button>
                            <span className="px-2 text-slate-400">...</span>
                            <button className="size-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 transition-colors text-sm">129</button>
                            <button className="size-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-700 text-slate-400 hover:bg-slate-50 transition-colors">
                                <span className="material-symbols-outlined text-sm">chevron_right</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrdersView;
