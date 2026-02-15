import { useState } from 'react';

const useOrdersViewModel = () => {
    // Sample Orders Data matching HTML structure
    const [orders] = useState([
        {
            id: 'ORD-8291',
            supplier: 'Endüstriyel Çelik A.Ş.',
            items: 'H-Profil, L-Demir (12 kalem)',
            date: '12 May 2024',
            deliveryDate: '18 May 2024',
            total: '₺142.500,00',
            status: 'Bekliyor',
        },
        {
            id: 'ORD-8285',
            supplier: 'Global Lojistik Ekipman',
            items: 'Forklift Yedek Parça (3 kalem)',
            date: '10 May 2024',
            deliveryDate: '14 May 2024',
            total: '₺28.450,00',
            status: 'Yolda',
        },
        {
            id: 'ORD-8277',
            supplier: 'Teknik Parça Ltd.',
            items: 'Sensör Grubu, Kablo (24 kalem)',
            date: '08 May 2024',
            deliveryDate: '12 May 2024',
            total: '₺12.180,00',
            status: 'Teslim Edildi',
        },
        {
            id: 'ORD-8272',
            supplier: 'Mega Pnömatik Sistemler',
            items: 'Valf Takımı, Hava Tankı',
            date: '05 May 2024',
            deliveryDate: '09 May 2024',
            total: '₺67.900,00',
            status: 'İşleniyor',
        }
    ]);

    const getStatusStyle = (status) => {
        switch (status) {
            case 'Bekliyor':
                return {
                    container: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-500',
                    dot: 'bg-amber-500'
                };
            case 'Yolda':
                return {
                    container: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-500',
                    dot: 'bg-blue-500'
                };
            case 'Teslim Edildi':
                return {
                    container: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-500',
                    dot: 'bg-emerald-500'
                };
            case 'İşleniyor':
                return {
                    container: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-500',
                    dot: 'bg-purple-500'
                };
            default:
                return {
                    container: 'bg-slate-100 text-slate-700',
                    dot: 'bg-slate-500'
                };
        }
    };

    return {
        orders,
        getStatusStyle
    };
};

export default useOrdersViewModel;
