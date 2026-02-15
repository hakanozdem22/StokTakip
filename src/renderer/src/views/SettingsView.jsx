import React, { useState } from 'react';
import useSettingsViewModel from '../viewmodels/useSettingsViewModel';
import CropModal from '../components/modals/CropModal';

const SettingsView = () => {
    const {
        notificationsEnabled,
        darkModeEnabled,
        userProfile,
        setUserProfile,
        handleSaveProfile,
        handleToggleNotification,
        handleToggleDarkMode
    } = useSettingsViewModel();
    const [isCropModalOpen, setIsCropModalOpen] = useState(false);

    return (
        <div className="flex flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-8">
            <div className="max-w-4xl mx-auto w-full">
                {/* Page Header */}
                <div className="mb-8 flex justify-between items-end">
                    <div>
                        <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Ayarlar</h2>
                        <p className="text-slate-500 mt-1">Sistem ve profil tercihlerinizi buradan yönetebilirsiniz.</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-6 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm font-semibold hover:bg-slate-50 transition-colors dark:text-white">İptal</button>
                        <button onClick={handleSaveProfile} className="px-6 py-2 rounded-lg bg-primary text-white text-sm font-semibold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors">Değişiklikleri Kaydet</button>
                    </div>
                </div>

                <div className="grid gap-6">
                    {/* Section: User Profile */}
                    <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                        <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">person</span>
                            <h3 className="font-bold text-slate-800 dark:text-white">Kullanıcı Profili</h3>
                        </div>
                        <div className="p-6">
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="relative">
                                    <div className="size-24 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden ring-4 ring-slate-50 dark:ring-slate-800">
                                        <img
                                            className="w-full h-full object-cover"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7q9-Np_RZgyhkYTKafmosUAS3HPy3yasOKNiH2pZxwaapH4sa9xhREoR-Kdj-LjrV4-0s_CFaKoT_lWVZwrEn3CphHjFLo24-2WfUa2QApFML56yj-GfnaPDhlCvlIsNyYCyA27bLrRu_u66r1Z7Q2nmNko_mbDIZ_S8IWradPE8YiObH8cGXn3ofT20X3v8cjK5PxB2QPGEWKRJWjOhBXXZ6qhR3TLi7DMRtLDG3l5ZzWOGiA3d9Ap4l12I-K6i8R-ix61NX48eq"
                                            alt="Profil"
                                        />
                                    </div>
                                    <button onClick={() => setIsCropModalOpen(true)} className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full shadow-lg border-2 border-white dark:border-slate-800 hover:bg-primary/90 transition-all">
                                        <span className="material-symbols-outlined text-sm">edit</span>
                                    </button>
                                </div>
                                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-slate-500 uppercase">Ad Soyad</label>
                                        <input
                                            className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary focus:ring-primary text-sm px-3 py-2 outline-none dark:text-white"
                                            type="text"
                                            value={userProfile.name}
                                            onChange={(e) => setUserProfile({ ...userProfile, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-slate-500 uppercase">E-posta Adresi</label>
                                        <input
                                            className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary focus:ring-primary text-sm px-3 py-2 outline-none dark:text-white"
                                            type="email"
                                            value={userProfile.email}
                                            onChange={(e) => setUserProfile({ ...userProfile, email: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-slate-500 uppercase">Rol</label>
                                        <input
                                            className="w-full rounded-lg border border-slate-200 bg-slate-50 dark:bg-slate-800/50 dark:border-slate-700 text-slate-500 text-sm px-3 py-2"
                                            disabled
                                            type="text"
                                            value={userProfile.role}
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-slate-500 uppercase">Telefon</label>
                                        <input
                                            className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary focus:ring-primary text-sm px-3 py-2 outline-none dark:text-white"
                                            type="text"
                                            defaultValue="+90 (555) 000 00 00"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section: Security */}
                    <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">security</span>
                            <h3 className="font-bold text-slate-800 dark:text-white">Güvenlik</h3>
                        </div>
                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-tight">Mevcut Şifre</label>
                                    <input className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary focus:ring-primary text-sm px-3 py-2 outline-none dark:text-white" placeholder="••••••••" type="password" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-tight">Yeni Şifre</label>
                                    <input className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary focus:ring-primary text-sm px-3 py-2 outline-none dark:text-white" placeholder="••••••••" type="password" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-tight">Şifreyi Onayla</label>
                                    <input className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary focus:ring-primary text-sm px-3 py-2 outline-none dark:text-white" placeholder="••••••••" type="password" />
                                </div>
                            </div>
                            <p className="mt-4 text-xs text-slate-400">Şifreniz en az 8 karakter uzunluğunda olmalı ve en az bir büyük harf ile bir rakam içermelidir.</p>
                        </div>
                    </section>

                    {/* Section: System Preferences */}
                    <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">language</span>
                            <h3 className="font-bold text-slate-800 dark:text-white">Sistem Tercihleri</h3>
                        </div>
                        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-tight">Dil Seçimi</label>
                                <select className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary focus:ring-primary text-sm px-3 py-2 outline-none dark:text-white">
                                    <option defaultValue>Türkçe (TR)</option>
                                    <option>English (US)</option>
                                    <option>Deutsch (DE)</option>
                                </select>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-tight">Para Birimi</label>
                                <select className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary focus:ring-primary text-sm px-3 py-2 outline-none dark:text-white">
                                    <option defaultValue>TRY (₺)</option>
                                    <option>USD ($)</option>
                                    <option>EUR (€)</option>
                                </select>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-tight">Zaman Dilimi</label>
                                <select className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary focus:ring-primary text-sm px-3 py-2 outline-none dark:text-white">
                                    <option defaultValue>(UTC+03:00) İstanbul</option>
                                    <option>(UTC+01:00) Berlin</option>
                                    <option>(UTC+00:00) London</option>
                                </select>
                            </div>
                        </div>
                    </section>

                    {/* Section: Notification Settings */}
                    <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm mb-12">
                        <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">notifications</span>
                            <h3 className="font-bold text-slate-800 dark:text-white">Bildirim Ayarları</h3>
                        </div>
                        <div className="p-6 space-y-4">
                            {/* Toggle Item */}
                            <div className="flex items-center justify-between py-2">
                                <div>
                                    <p className="text-sm font-semibold text-slate-800 dark:text-white">E-posta Bildirimleri</p>
                                    <p className="text-xs text-slate-500">Sipariş ve stok güncellemelerini e-posta ile al.</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer custom-toggle"
                                        checked={notificationsEnabled}
                                        onChange={handleToggleNotification}
                                    />
                                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                </label>
                            </div>
                            <hr className="border-slate-100 dark:border-slate-800" />
                            {/* Toggle Item */}
                            <div className="flex items-center justify-between py-2">
                                <div>
                                    <p className="text-sm font-semibold text-slate-800 dark:text-white">SMS Bildirimleri</p>
                                    <p className="text-xs text-slate-500">Kritik hatalar ve acil durum uyarılarını SMS ile al.</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer custom-toggle" />
                                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                </label>
                            </div>
                            <hr className="border-slate-100 dark:border-slate-800" />
                            {/* Toggle Item */}
                            <div className="flex items-center justify-between py-2">
                                <div>
                                    <p className="text-sm font-semibold text-slate-800 dark:text-white">Uygulama İçi Bildirimler</p>
                                    <p className="text-xs text-slate-500">Sistem içindeki tüm bildirimleri panel üzerinden takip et.</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer custom-toggle" defaultChecked />
                                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                </label>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <CropModal
                isOpen={isCropModalOpen}
                onClose={() => setIsCropModalOpen(false)}
                onSave={() => {
                    console.log('Image Cropped');
                    setIsCropModalOpen(false);
                }}
            />
        </div>
    );
};

export default SettingsView;
