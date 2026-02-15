import { useState } from 'react';

const useStockReportViewModel = () => {
    // KPI Data
    const [kpis] = useState([
        {
            title: 'Toplam Stok Değeri',
            value: '₺4.280.500',
            change: '+12%',
            note: 'Geçen aya göre',
            isPositive: true,
            icon: 'account_balance_wallet',
            color: 'text-emerald-600',
            bg: 'bg-emerald-50',
            overlay: 'bg-primary/5'
        },
        {
            title: 'Stok Devir Hızı',
            value: '4.2x',
            change: '+0.5%',
            note: 'Endüstri ortalamasının üzerinde',
            isPositive: true,
            icon: 'sync_alt',
            color: 'text-blue-600',
            bg: 'bg-blue-50',
            overlay: 'bg-blue-500/5'
        },
        {
            title: 'Stok Doğruluk Oranı',
            value: '%98.5',
            change: '-0.2%',
            note: 'Son sayım verisi',
            isPositive: false,
            icon: 'fact_check',
            color: 'text-amber-600',
            bg: 'bg-amber-50',
            overlay: 'bg-amber-500/5'
        }
    ]);

    // Stock Distribution Data (Pie Chart Mock)
    const [distribution] = useState([
        { label: 'Hammadde', percentage: '45%', color: 'bg-primary' },
        { label: 'Bitmiş Ürün', percentage: '30%', color: 'bg-blue-500' },
        { label: 'Yarı Mamul', percentage: '25%', color: 'bg-slate-400' }
    ]);

    // Top Movers Data
    const [topMovers] = useState([
        {
            id: 'ST-00492',
            name: 'Çelik Rulo - A102',
            sku: 'ST-00492',
            type: 'Giriş',
            typeIcon: 'south_west',
            typeColor: 'bg-emerald-100 text-emerald-700',
            amountChange: '+1,200 birim',
            remaining: '4,500 kg',
            progress: 75,
            progressColor: 'bg-emerald-500'
        },
        {
            id: 'AL-00812',
            name: 'Alüminyum Panel',
            sku: 'AL-00812',
            type: 'Çıkış',
            typeIcon: 'north_east',
            typeColor: 'bg-rose-100 text-rose-700',
            amountChange: '-450 birim',
            remaining: '820 adet',
            progress: 30,
            progressColor: 'bg-amber-500'
        },
        {
            id: 'CH-00122',
            name: 'Endüstriyel Boya - Gri',
            sku: 'CH-00122',
            type: 'Çıkış',
            typeIcon: 'north_east',
            typeColor: 'bg-rose-100 text-rose-700',
            amountChange: '-120 lt',
            remaining: '45 lt',
            progress: 10,
            progressColor: 'bg-red-500'
        },
        {
            id: 'PH-00554',
            name: 'Polimer Hammadde',
            sku: 'PH-00554',
            type: 'Giriş',
            typeIcon: 'south_west',
            typeColor: 'bg-emerald-100 text-emerald-700',
            amountChange: '+3,000 birim',
            remaining: '12,500 kg',
            progress: 90,
            progressColor: 'bg-emerald-500'
        }
    ]);

    return {
        kpis,
        distribution,
        topMovers
    };
};

export default useStockReportViewModel;
