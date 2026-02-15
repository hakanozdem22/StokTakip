import React from 'react';

const CropModal = ({ isOpen, onClose, onSave, imageSrc }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            {/* Modal Dialog */}
            <div className="w-full max-w-2xl bg-white dark:bg-background-dark rounded-xl shadow-2xl overflow-hidden border border-white/20">
                {/* Modal Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-white/5">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">crop</span>
                        <h3 className="text-lg font-bold text-[#0f101a] dark:text-white">Fotoğrafı Düzenle</h3>
                    </div>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                {/* Modal Body (Cropping Area) */}
                <div className="p-6 flex flex-col items-center">
                    {/* Crop Workspace */}
                    <div className="relative w-full aspect-[4/3] bg-[#f0f0f5] dark:bg-black/20 rounded-lg overflow-hidden flex items-center justify-center border border-gray-200 dark:border-white/10">
                        {/* The actual image */}
                        <img className="absolute max-w-none w-[120%] h-auto object-cover opacity-90 scale-110" src={imageSrc || "https://lh3.googleusercontent.com/aida-public/AB6AXuAP9oEIP_dLO9oY3BLiiAxsibdA6sHtUxYRG3LkM50f5Za4m0vFRoqDJKWuJSMW_VPADUl3QTe5h4zrdgI25XH1RpKkj4lcGg9qxNs2Tf4USjYkW1QFvTn4420VAnGIkHj-66Go8E1lSnW7Hzqf2FvNzDayBmqg-uGI3dPvjq9izfUmiwiFDq_DWcjjrvb1vTZze6LGd4pFRmiHRKEBBl6s82jeXM8hnz486CtPhE0OyPbVFS1NflSSSdeuf_FVQKB20z3El4caZJGH"} alt="Crop preview" />

                        {/* Cropping Overlay Mask */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            {/* Dimmed background outside the crop circle */}
                            <div className="absolute inset-0 bg-black/50"></div>

                            {/* Highlighting Circle (The actual crop area) */}
                            <div className="relative size-64 rounded-full border-4 border-primary shadow-[0_0_0_9999px_rgba(0,0,0,0.4)] flex items-center justify-center">
                                {/* Crop Guide Grids */}
                                <div className="absolute inset-0 flex border-x border-white/20 divide-x divide-white/20">
                                    <div className="flex-1"></div><div className="flex-1"></div>
                                </div>
                                <div className="absolute inset-0 flex flex-col border-y border-white/20 divide-y divide-white/20">
                                    <div className="flex-1"></div><div className="flex-1"></div>
                                </div>
                                {/* Corners (Visual cues for dragging) */}
                                <div className="absolute -top-1 -left-1 size-4 border-t-4 border-l-4 border-white"></div>
                                <div className="absolute -top-1 -right-1 size-4 border-t-4 border-r-4 border-white"></div>
                                <div className="absolute -bottom-1 -left-1 size-4 border-b-4 border-l-4 border-white"></div>
                                <div className="absolute -bottom-1 -right-1 size-4 border-b-4 border-r-4 border-white"></div>
                            </div>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="w-full mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Zoom Control */}
                        <div className="flex flex-col gap-3">
                            <label className="text-sm font-semibold text-gray-500 flex items-center gap-2">
                                <span className="material-symbols-outlined text-lg">zoom_in</span>
                                Yakınlaştır / Uzaklaştır
                            </label>
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-gray-400 text-sm">remove</span>
                                <input className="flex-1 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary" max="100" min="0" type="range" defaultValue="50" />
                                <span className="material-symbols-outlined text-gray-400 text-sm">add</span>
                            </div>
                        </div>

                        {/* Rotation Controls */}
                        <div className="flex flex-col gap-3">
                            <label className="text-sm font-semibold text-gray-500 flex items-center gap-2">
                                <span className="material-symbols-outlined text-lg">rotate_right</span>
                                90° Döndür
                            </label>
                            <div className="flex items-center gap-2">
                                <button className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 text-sm font-medium transition-colors">
                                    <span className="material-symbols-outlined text-xl">rotate_left</span>
                                    Sola
                                </button>
                                <button className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 text-sm font-medium transition-colors">
                                    <span className="material-symbols-outlined text-xl">rotate_right</span>
                                    Sağa
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal Footer */}
                <div className="flex items-center justify-end gap-3 px-6 py-4 bg-gray-50 dark:bg-white/5 border-t border-gray-100 dark:border-white/5">
                    <button onClick={onClose} className="px-5 py-2.5 rounded-lg text-sm font-bold text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors">
                        İptal
                    </button>
                    <button onClick={onSave} className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
                        <span className="material-symbols-outlined text-lg">save</span>
                        Uygula ve Kaydet
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CropModal;
