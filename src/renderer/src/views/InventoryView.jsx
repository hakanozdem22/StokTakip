import React from 'react';
import { Link } from 'react-router-dom';
import useInventoryViewModel from '../viewmodels/useInventoryViewModel';

const InventoryView = () => {
    const { products, getStatusStyle } = useInventoryViewModel();

    return (
        <div className="flex flex-1 flex-col py-6 px-6 lg:px-20 max-w-[1440px] mx-auto w-full">
            {/* Header Section - Matches HTML Layout */}
            {/* Note: In HTML, the header is part of layout, but here we might want page specific actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3 text-primary">
                    <div className="size-8 bg-primary text-white flex items-center justify-center rounded-lg">
                        <span className="material-symbols-outlined">factory</span>
                    </div>
                    <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">Stok Listesi</h2>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors font-semibold text-sm">
                        <span className="material-symbols-outlined text-lg">filter_list</span>
                        Filtrele
                    </button>
                    <Link to="/inventory/new" className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all font-semibold text-sm shadow-md shadow-primary/20">
                        <span className="material-symbols-outlined text-lg">add</span>
                        Yeni Ürün Ekle
                    </Link>
                </div>
            </div>

            {/* Filters & Search Bar Section */}
            <div className="flex flex-col gap-4 mb-6">
                <div className="flex flex-col md:flex-row gap-4">
                    <label className="flex flex-col flex-1">
                        <div className="flex w-full items-stretch rounded-lg h-11 border border-primary/10 bg-white dark:bg-slate-900 shadow-sm">
                            <div className="text-primary/60 flex items-center justify-center pl-4">
                                <span className="material-symbols-outlined">search</span>
                            </div>
                            <input
                                className="flex w-full border-none bg-transparent text-slate-900 dark:text-white focus:ring-0 px-4 text-sm font-normal placeholder:text-slate-400 outline-none"
                                placeholder="Ürün adı veya SKU ile ara..."
                                type="text"
                            />
                        </div>
                    </label>
                    <div className="flex gap-2 flex-wrap md:flex-nowrap">
                        <button className="flex h-11 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-slate-900 border border-primary/10 px-4 text-sm font-medium text-slate-700 dark:text-slate-200">
                            <span className="material-symbols-outlined text-[18px]">category</span>
                            <span>Kategori: Tümü</span>
                            <span className="material-symbols-outlined">expand_more</span>
                        </button>
                        <button className="flex h-11 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-slate-900 border border-primary/10 px-4 text-sm font-medium text-slate-700 dark:text-slate-200">
                            <span className="material-symbols-outlined text-[18px]">verified</span>
                            <span>Durum: Tümü</span>
                            <span className="material-symbols-outlined">expand_more</span>
                        </button>
                    </div>
                </div>
                {/* Category Quick Filters */}
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                    <button className="flex h-8 shrink-0 items-center justify-center rounded-full bg-primary text-white px-4 text-xs font-semibold">Tümü</button>
                    <button className="flex h-8 shrink-0 items-center justify-center rounded-full bg-white dark:bg-slate-900 border border-primary/10 text-slate-600 dark:text-slate-300 px-4 text-xs font-semibold hover:border-primary transition-colors">Hammaddeler</button>
                    <button className="flex h-8 shrink-0 items-center justify-center rounded-full bg-white dark:bg-slate-900 border border-primary/10 text-slate-600 dark:text-slate-300 px-4 text-xs font-semibold hover:border-primary transition-colors">Mamuller</button>
                    <button className="flex h-8 shrink-0 items-center justify-center rounded-full bg-white dark:bg-slate-900 border border-primary/10 text-slate-600 dark:text-slate-300 px-4 text-xs font-semibold hover:border-primary transition-colors">Yedek Parçalar</button>
                </div>
            </div>

            {/* Inventory Table Card */}
            <div className="overflow-hidden rounded-xl border border-primary/10 bg-white dark:bg-slate-900 shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-primary/5 border-b border-primary/10">
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-primary/70">Görsel</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-primary/70">Ürün Adı</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-primary/70">SKU</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-primary/70">Kategori</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-primary/70 text-right">Miktar</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-primary/70">Birim</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-primary/70">Durum</th>
                                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-primary/70 text-center">İşlem</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-primary/5">
                            {products.map(product => {
                                const styles = getStatusStyle(product.status);
                                return (
                                    <tr key={product.id} className="hover:bg-primary/5 transition-colors group">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center overflow-hidden border border-primary/5">
                                                <div
                                                    className="w-full h-full bg-slate-200 bg-center bg-cover"
                                                    style={{ backgroundImage: `url("${product.image}")` }}
                                                    title={product.imageAlt}
                                                ></div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white">{product.name}</td>
                                        <td className="px-6 py-4 text-sm text-slate-500 font-mono">{product.sku}</td>
                                        <td className="px-6 py-4">
                                            <span className="px-2 py-1 text-[11px] font-bold uppercase rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">{product.category}</span>
                                        </td>
                                        <td className={`px-6 py-4 text-sm font-bold text-right ${styles.text}`}>
                                            {product.quantity.toFixed(2)}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-500">{product.unit}</td>
                                        <td className="px-6 py-4">
                                            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${styles.container}`}>
                                                <span className={`w-1.5 h-1.5 rounded-full ${styles.dot}`}></span>
                                                {product.status}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <button className="text-primary hover:bg-primary/10 p-2 rounded-lg transition-colors">
                                                <span className="material-symbols-outlined">edit_square</span>
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Section */}
                <div className="flex items-center justify-between border-t border-primary/10 bg-white dark:bg-slate-900 p-4">
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Toplam <span className="font-bold text-primary">124</span> üründen <span className="font-bold text-primary">1-5</span> arası gösteriliyor
                    </p>
                    <div className="flex items-center gap-1">
                        <button className="flex size-9 items-center justify-center rounded-lg border border-primary/10 text-slate-400 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                        </button>
                        <button className="flex size-9 items-center justify-center rounded-lg bg-primary text-white text-sm font-bold">1</button>
                        <button className="flex size-9 items-center justify-center rounded-lg border border-primary/10 text-slate-600 dark:text-slate-400 hover:text-primary text-sm font-medium transition-colors">2</button>
                        <button className="flex size-9 items-center justify-center rounded-lg border border-primary/10 text-slate-600 dark:text-slate-400 hover:text-primary text-sm font-medium transition-colors">3</button>
                        <span className="flex size-9 items-center justify-center text-slate-400">...</span>
                        <button className="flex size-9 items-center justify-center rounded-lg border border-primary/10 text-slate-600 dark:text-slate-400 hover:text-primary text-sm font-medium transition-colors">25</button>
                        <button className="flex size-9 items-center justify-center rounded-lg border border-primary/10 text-slate-400 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Low Stock Quick Alert Banner */}
            <div className="mt-6 flex items-center justify-between rounded-xl bg-orange-50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-800/30 p-4">
                <div className="flex items-center gap-3">
                    <div className="size-10 flex items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/40 text-orange-600">
                        <span className="material-symbols-outlined">warning</span>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-orange-800 dark:text-orange-400">Kritik Stok Uyarısı</h4>
                        <p className="text-xs text-orange-700 dark:text-orange-500">8 ürün düşük stok seviyesinde. Sipariş verilmesi önerilir.</p>
                    </div>
                </div>
                <button className="px-4 py-2 rounded-lg bg-orange-600 text-white text-xs font-bold hover:bg-orange-700 transition-colors">Detayları Gör</button>
            </div>
        </div>
    );
};

export default InventoryView;
