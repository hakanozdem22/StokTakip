import React from 'react';

const RoleModal = ({ isOpen, onClose, onSave }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm px-4">
            {/* Modal Container */}
            <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
                {/* Modal Header */}
                <div className="px-8 py-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Yeni Rol Tanımla</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Sisteme yeni bir görev tanımı ve yetki seti ekleyin.</p>
                    </div>
                    <button onClick={onClose} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                {/* Modal Content (Scrollable) */}
                <div className="p-8 overflow-y-auto space-y-8">
                    {/* General Info */}
                    <div className="grid grid-cols-1 gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300" htmlFor="role-name">Rol Adı</label>
                            <input className="w-full h-11 px-4 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" id="role-name" placeholder="Örn: Kalite Kontrol Sorumlusu" type="text" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300" htmlFor="role-desc">Rol Açıklaması</label>
                            <textarea className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none" id="role-desc" placeholder="Bu rolün görev ve sorumluluklarını kısaca açıklayın..." rows="2"></textarea>
                        </div>
                    </div>

                    {/* Permission Selection */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-primary border-b border-primary/10 pb-2">Yetki Tanımlamaları</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Category: Stok Yönetimi */}
                            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="material-symbols-outlined text-slate-400 text-lg">inventory_2</span>
                                    <span className="font-bold text-slate-800 dark:text-white text-sm">Stok Yönetimi</span>
                                </div>
                                <div className="space-y-3">
                                    {['Görüntüle', 'Düzenle'].map((perm, i) => (
                                        <label key={i} className="flex items-center gap-3 cursor-pointer group">
                                            <input className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
                                            <span className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">{perm}</span>
                                        </label>
                                    ))}
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
                                        <span className="text-sm text-red-600 dark:text-red-400 font-medium group-hover:text-red-700 dark:group-hover:text-red-300">Sil</span>
                                    </label>
                                </div>
                            </div>

                            {/* Category: Sipariş Yönetimi */}
                            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="material-symbols-outlined text-slate-400 text-lg">shopping_cart</span>
                                    <span className="font-bold text-slate-800 dark:text-white text-sm">Sipariş Yönetimi</span>
                                </div>
                                <div className="space-y-3">
                                    {['Oluştur', 'Onayla'].map((perm, i) => (
                                        <label key={i} className="flex items-center gap-3 cursor-pointer group">
                                            <input className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
                                            <span className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">{perm}</span>
                                        </label>
                                    ))}
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
                                        <span className="text-sm text-red-600 dark:text-red-400 font-medium group-hover:text-red-700 dark:group-hover:text-red-300">İptal Et</span>
                                    </label>
                                </div>
                            </div>

                            {/* Category: Müşteri ve Tedarikçi */}
                            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="material-symbols-outlined text-slate-400 text-lg">groups</span>
                                    <span className="font-bold text-slate-800 dark:text-white text-sm">Müşteri ve Tedarikçi</span>
                                </div>
                                <div className="space-y-3">
                                    {['Ekle', 'Düzenle'].map((perm, i) => (
                                        <label key={i} className="flex items-center gap-3 cursor-pointer group">
                                            <input className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
                                            <span className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">{perm}</span>
                                        </label>
                                    ))}
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
                                        <span className="text-sm text-red-600 dark:text-red-400 font-medium group-hover:text-red-700 dark:group-hover:text-red-300">Sil</span>
                                    </label>
                                </div>
                            </div>

                            {/* Category: Raporlama */}
                            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="material-symbols-outlined text-slate-400 text-lg">bar_chart</span>
                                    <span className="font-bold text-slate-800 dark:text-white text-sm">Raporlama</span>
                                </div>
                                <div className="space-y-3">
                                    {['Görüntüle', 'Dışa Aktar'].map((perm, i) => (
                                        <label key={i} className="flex items-center gap-3 cursor-pointer group">
                                            <input className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
                                            <span className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">{perm}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal Footer */}
                <div className="p-8 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-4 bg-slate-50 dark:bg-slate-800/50">
                    <button onClick={onClose} className="px-6 h-11 rounded-lg text-slate-600 dark:text-slate-300 font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                        İptal
                    </button>
                    <button onClick={onSave} className="px-8 h-11 rounded-lg bg-primary text-white font-bold hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">save</span>
                        Rolü Oluştur
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RoleModal;
