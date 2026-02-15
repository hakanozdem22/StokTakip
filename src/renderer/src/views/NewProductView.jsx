import React from 'react';
import { Link } from 'react-router-dom';
import useNewProductViewModel from '../viewmodels/useNewProductViewModel';

const NewProductView = () => {
    const { formData, handleInputChange, handleSave, handleCancel } = useNewProductViewModel();

    return (
        <div className="flex-1 justify-center py-8 px-4 md:px-10 overflow-y-auto">
            <div className="layout-content-container flex flex-col max-w-[1000px] flex-1 gap-6 mx-auto">
                {/* Page Header */}
                <div className="flex flex-wrap justify-between items-center gap-4">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 text-sm text-[#555a91] dark:text-gray-400 mb-1">
                            <Link to="/inventory" className="hover:text-primary">Stok Listesi</Link>
                            <span className="material-symbols-outlined text-xs">chevron_right</span>
                            <span>Yeni Ürün</span>
                        </div>
                        <h1 className="text-[#0f101a] dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">Yeni Ürün Ekle</h1>
                        <p className="text-[#555a91] dark:text-gray-400 text-base font-normal">Sisteme yeni bir envanter kalemi tanımlayarak stok takibini başlatın.</p>
                    </div>
                    <button onClick={handleCancel} className="flex items-center justify-center rounded-lg h-10 px-4 bg-[#e9e9f2] dark:bg-gray-800 text-[#0f101a] dark:text-white text-sm font-bold border border-transparent hover:border-gray-300 transition-all">
                        <span className="material-symbols-outlined mr-2 text-sm">arrow_back</span>
                        Geri Dön
                    </button>
                </div>

                {/* Main Form Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column: Media & Primary Info */}
                    <div className="lg:col-span-2 flex flex-col gap-6">
                        {/* Card: Basic Information */}
                        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-[#e9e9f2] dark:border-slate-800 p-6">
                            <div className="flex items-center gap-2 mb-6 text-primary">
                                <span className="material-symbols-outlined">info</span>
                                <h3 className="text-lg font-bold text-[#0f101a] dark:text-white">Temel Bilgiler</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-[#0f101a] dark:text-gray-200">Ürün Adı <span className="text-red-500">*</span></label>
                                    <input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="form-input flex w-full rounded-lg border-[#d2d4e5] dark:border-slate-700 bg-white dark:bg-slate-800 text-[#0f101a] dark:text-white h-12 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                                        placeholder="Örn: Çelik Rulman 6205"
                                        type="text"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-[#0f101a] dark:text-gray-200">SKU / Stok Kodu <span className="text-red-500">*</span></label>
                                    <input
                                        name="sku"
                                        value={formData.sku}
                                        onChange={handleInputChange}
                                        className="form-input flex w-full rounded-lg border-[#d2d4e5] dark:border-slate-700 bg-white dark:bg-slate-800 text-[#0f101a] dark:text-white h-12 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                                        placeholder="Örn: CR-6205-A1"
                                        type="text"
                                    />
                                </div>
                                <div className="flex flex-col gap-2 md:col-span-2">
                                    <label className="text-sm font-semibold text-[#0f101a] dark:text-gray-200">Kategori</label>
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleInputChange}
                                        className="form-select flex w-full rounded-lg border-[#d2d4e5] dark:border-slate-700 bg-white dark:bg-slate-800 text-[#0f101a] dark:text-white h-12 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                                    >
                                        <option value="">Kategori Seçin</option>
                                        <option value="raw">Hammadde (Raw Material)</option>
                                        <option value="finished">Mamul (Finished Good)</option>
                                        <option value="spare">Yedek Parça (Spare Part)</option>
                                        <option value="semi">Yarı Mamul</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Card: Image Upload */}
                        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-[#e9e9f2] dark:border-slate-800 p-6">
                            <div className="flex items-center gap-2 mb-4 text-primary">
                                <span className="material-symbols-outlined">image</span>
                                <h3 className="text-lg font-bold text-[#0f101a] dark:text-white">Ürün Görseli</h3>
                            </div>
                            <div className="flex flex-col items-center justify-center border-2 border-dashed border-[#d2d4e5] dark:border-slate-700 rounded-xl p-8 hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group">
                                <div className="bg-primary/10 rounded-full p-4 mb-4 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-primary text-3xl">cloud_upload</span>
                                </div>
                                <p className="text-sm font-bold text-[#0f101a] dark:text-white mb-1">Görsel Yüklemek İçin Tıklayın</p>
                                <p className="text-xs text-[#555a91] dark:text-gray-400 text-center">PNG, JPG veya WEBP (Max 5MB)<br />Önerilen boyut: 800x600px</p>
                                <input accept="image/*" className="hidden" type="file" />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Inventory Details */}
                    <div className="flex flex-col gap-6">
                        {/* Card: Stock Details */}
                        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-[#e9e9f2] dark:border-slate-800 p-6">
                            <div className="flex items-center gap-2 mb-6 text-primary">
                                <span className="material-symbols-outlined">inventory</span>
                                <h3 className="text-lg font-bold text-[#0f101a] dark:text-white">Stok Detayları</h3>
                            </div>
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-[#0f101a] dark:text-gray-200">Birim</label>
                                    <select
                                        name="unit"
                                        value={formData.unit}
                                        onChange={handleInputChange}
                                        className="form-select flex w-full rounded-lg border-[#d2d4e5] dark:border-slate-700 bg-white dark:bg-slate-800 text-[#0f101a] dark:text-white h-12 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                                    >
                                        <option value="piece">Adet (Piece)</option>
                                        <option value="kg">Kilogram (KG)</option>
                                        <option value="liter">Litre (Liter)</option>
                                        <option value="meter">Metre (Meter)</option>
                                        <option value="set">Set</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-[#0f101a] dark:text-gray-200">Başlangıç Stok Miktarı</label>
                                    <input
                                        name="initialStock"
                                        value={formData.initialStock}
                                        onChange={handleInputChange}
                                        className="form-input flex w-full rounded-lg border-[#d2d4e5] dark:border-slate-700 bg-white dark:bg-slate-800 text-[#0f101a] dark:text-white h-12 px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                                        min="0"
                                        placeholder="0"
                                        type="number"
                                    />
                                </div>
                                <div className="flex flex-col gap-2 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
                                    <div className="flex items-center gap-2 mb-1 text-amber-700 dark:text-amber-400">
                                        <span className="material-symbols-outlined text-sm font-bold">warning</span>
                                        <label className="text-sm font-bold">Kritik Stok Eşiği</label>
                                    </div>
                                    <input
                                        name="criticalThreshold"
                                        value={formData.criticalThreshold}
                                        onChange={handleInputChange}
                                        className="form-input flex w-full rounded-lg border-amber-200 dark:border-amber-800 bg-white dark:bg-slate-800 text-[#0f101a] dark:text-white h-10 px-4 focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all outline-none"
                                        placeholder="Uyarı eşiği girin"
                                        type="number"
                                    />
                                    <p className="text-[10px] text-amber-600 dark:text-amber-500 mt-1 italic">Stok bu miktarın altına düştüğünde sistem otomatik uyarı verecektir.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card: Summary Info */}
                        <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-6 border border-primary/10">
                            <h4 className="text-primary font-bold text-sm mb-3">Bilgilendirme</h4>
                            <ul className="flex flex-col gap-2">
                                <li className="flex items-start gap-2 text-xs text-[#555a91] dark:text-gray-400">
                                    <span className="material-symbols-outlined text-sm mt-0.5">check_circle</span>
                                    <span>Girdiğiniz veriler gerçek zamanlı olarak tüm şubelerde güncellenir.</span>
                                </li>
                                <li className="flex items-start gap-2 text-xs text-[#555a91] dark:text-gray-400">
                                    <span className="material-symbols-outlined text-sm mt-0.5">check_circle</span>
                                    <span>SKU kodu sistemde benzersiz olmalıdır.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Sticky Action Footer */}
                <div className="mt-4 flex items-center justify-end gap-3 p-6 bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-[#e9e9f2] dark:border-slate-800">
                    <button onClick={handleCancel} className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 border border-[#d2d4e5] dark:border-slate-700 text-[#0f101a] dark:text-white text-sm font-bold hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                        Vazgeç
                    </button>
                    <button onClick={handleSave} className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all">
                        <span className="material-symbols-outlined mr-2">save</span>
                        Ürünü Kaydet
                    </button>
                </div>

                {/* Footer */}
                <footer className="py-6 px-10 text-center border-t border-[#e9e9f2] dark:border-slate-800">
                    <p className="text-xs text-[#555a91] dark:text-gray-500">© 2024 Envanter Yönetim Paneli - Tüm Hakları Saklıdır.</p>
                </footer>
            </div>
        </div>
    );
};

export default NewProductView;
