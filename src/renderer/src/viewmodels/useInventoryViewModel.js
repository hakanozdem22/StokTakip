import { useState } from 'react';

const useInventoryViewModel = () => {
    const [products] = useState([
        {
            id: 1,
            name: 'Çelik Alaşım Plate X-1',
            sku: 'CH-102-ST',
            category: 'Hammadde',
            quantity: 1500.00,
            unit: 'KG',
            status: 'Stokta Var',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAh_C8R-5dp1G-9cdB7icS4LwQwoEPj3E5-hADHFX1-w8QhmQUIJeQZziZcrp6IUVHYW2cDSV4W5pLdiyY6PgxHkfPg-_lVhM_ZK61xUK52xX9tCfi7OmrfyWnQE1tCHkVGgq5yOS-GlVqaqwS2c3iM30o_-pidxSDgn6EDq81UQVBRj4IAAj3hdWRHJrpaUWVhuSdlGK7eawn8a6Hd-JULJ_dExGitxk6TsLawPkEdJE6CDnpjN_zKxizaZ08mHby-Y_RcUUuGueb',
            imageAlt: 'Raw chemical material in blue industrial barrel'
        },
        {
            id: 2,
            name: 'Hidrolik Pompa P-44',
            sku: 'RP-442-HP',
            category: 'Yedek Parça',
            quantity: 12.00,
            unit: 'Adet',
            status: 'Düşük Stok',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDk9KAzX20UwdIG-Hw3Bu3FbsXuPQ_MshDrgojg8GndPD2dlu28tB_KjcPTH5_fuq2HoP6kcr65WGJnmQUUUUrueneXJG5HwS0Vu9uB0aVzX20-FxUWgBEtA2X3orHSQQ4QtzX6jjeIGKvMrnhtyxAXtF27XfATNomVgIvEOXyryDk45dNSe9mEecWf0nQJjF6Vc5ePcPOu_n7YKWFE5g5btstNVZ4xn_cj_69Z7zwkvDvfCDyE3pbWM9r5oeLBiAT8k7XOZsEfnFvW',
            imageAlt: 'Mechanical industrial pump spare part component'
        },
        {
            id: 3,
            name: 'Elektrikli Motor M-9',
            sku: 'EM-99-EL',
            category: 'Mamul',
            quantity: 0.00,
            unit: 'Adet',
            status: 'Stokta Yok',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMl91dP_G8GZrjuFVloDd1SlT0g9lOD76QEyVH-14SY4eeOHPBOnNJS3ZEwNZBzgz5CZbm45SUp9_n5MLNIugAGEnuH7aKsyUj_n0ipsyNXMsC95SmGhef2GuyJ0s3Bu63-rIYA-qG9dY6-OUK2cL-4ZH_WHMzZ1g05hV0VyiQriPqCLLwl1x70e-1sP4W6hXvGvnycQRMcv-2TzKsHSyyLIzc9AwRWlcTiQBwerzYee1DcFwpP_tm5FXowcwGjptZVaGY2aZSVv_d',
            imageAlt: 'Electric motor component casing assembly'
        },
        {
            id: 4,
            name: 'Hidrolik Yağ SY-5',
            sku: 'HY-05-OIL',
            category: 'Hammadde',
            quantity: 250.00,
            unit: 'Litre',
            status: 'Stokta Var',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2ylWEF1mNbuUebokQbpUJSE6G8uSabM02Wb5FoOKyefbpETMIs_SNOmtkPS5nGRKJOfkGtShTNG7rJICDufHVss_Ocz1oKeQD7qNbV2DkBB6Wdy_uEvqRbbNV97HhmYGYxscv50LILPKUrdM52EPyT8MIKrgRqeiPpaHHa03hZ7dcaEaPNnXGga7xjKINgp2zOlS5YNMd5rFFuBvEMRMX1qqFnreaTjXdAdjpBIX2Wwf9ikKKiFv05hOLd2EUH2VwaSXH9Lplv9hP',
            imageAlt: 'Blue industrial liquid chemical in tank'
        },
        {
            id: 5,
            name: 'Sızdırmazlık Takımı ST-88',
            sku: 'ST-88-PKG',
            category: 'Yedek Parça',
            quantity: 45.00,
            unit: 'Paket',
            status: 'Stokta Var',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSCwbMT0COAVJapdNysigQJbhWIRM4g4F6wV49-9DNAtY1bmFtsdPi6DVh_czEzBI1t8wBhvVePU24Dz3oTonPNsYRMqACoGhNQD3neZkImR-dKOCvBLe7A7kyGwfoe0m7xGNsoMSJAbAG7z-RZxuuLZuydr9pkyKMvXpVH15Ue7FflLw6bPO56nXq6TkwXOmx_iZdTfBXpNtmhzZRWcIj0gxNSC99dBwN2J3m6Vy2TfNrlqA4GsvK6qTno_ZF8ZHTIqOxwjVGlbkh',
            imageAlt: 'Cardboard industrial packaging box stacked'
        }
    ]);

    const getStatusStyle = (status) => {
        switch (status) {
            case 'Stokta Var':
                return {
                    container: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
                    dot: 'bg-emerald-500 animate-pulse',
                    text: 'text-slate-900 dark:text-white' // Quantity text color
                };
            case 'Düşük Stok':
                return {
                    container: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
                    dot: 'bg-orange-500',
                    text: 'text-orange-600 dark:text-orange-400'
                };
            case 'Stokta Yok':
                return {
                    container: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400',
                    dot: 'bg-rose-500',
                    text: 'text-rose-600 dark:text-rose-400'
                };
            default:
                return {
                    container: 'bg-slate-100 text-slate-700',
                    dot: 'bg-slate-500',
                    text: 'text-slate-900'
                };
        }
    };

    return {
        products,
        getStatusStyle
    };
};

export default useInventoryViewModel;
