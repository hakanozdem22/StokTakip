import { useState } from 'react';

const useDashboardViewModel = () => {
    // Stats Data
    const [stats] = useState([
        { title: 'Toplam Ürün', value: '12,450', change: '+2.5%', isPositive: true, icon: 'inventory_2', iconColor: 'text-primary' },
        { title: 'Toplam Değer', value: '₺1.2M', change: '-0.8%', isPositive: false, icon: 'payments', iconColor: 'text-primary' }, // Changed $ to ₺
        { title: 'Düşük Stok Uyarısı', value: '18', change: '+5%', isPositive: false, icon: 'warning', iconColor: 'text-rose-500', valueColor: 'text-rose-600' },
        { title: 'Bekleyen Siparişler', value: '42', change: '-12%', isPositive: false, icon: 'schedule', iconColor: 'text-primary' }
    ]);

    // Critical Stock Data - Translated
    const [criticalStock] = useState([
        { id: 1, name: 'Çelik Cıvata (M8)', sku: 'SB-902', current: '45 adet', min: '100 adet' },
        { id: 2, name: 'Hidrolik Yağ AW46', sku: 'HO-44', current: '12 L', min: '50 L' },
        { id: 3, name: 'Bakır Kablo 2.5mm', sku: 'CW-12', current: '5 rulo', min: '20 rulo' },
        { id: 4, name: 'Sanayi Rulmanı 6204', sku: 'BR-220', current: '8 adet', min: '25 adet' },
    ]);

    // Transactions Data - Translated
    const [transactions] = useState([
        { id: 1, type: 'Stok Girişi', name: 'Alüminyum Kaplama', time: 'Bugün, 09:45', amount: '+120', isPositive: true },
        { id: 2, type: 'Kullanım', name: 'Montaj Hattı 4', time: 'Bugün, 08:30', amount: '-45', isPositive: false },
        { id: 3, type: 'Stok Girişi', name: 'Çelik Cıvatalar', time: 'Dün, 16:15', amount: '+500', isPositive: true },
        { id: 4, type: 'Kullanım', name: 'Bakım Merkezi', time: 'Dün, 14:20', amount: '-12', isPositive: false },
    ]);

    return {
        stats,
        criticalStock,
        transactions
    };
};

export default useDashboardViewModel;
