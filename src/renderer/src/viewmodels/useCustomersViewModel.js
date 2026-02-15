import { useState } from 'react';

const useCustomersViewModel = () => {
    // Stats Data
    const [stats] = useState([
        { title: 'Toplam Müşteri', value: '1,284', change: '+12%', isPositive: true, icon: 'groups', color: 'text-blue-600', bg: 'bg-blue-50' },
        { title: 'Aktif Müşteriler', value: '1,150', change: '+5%', isPositive: true, icon: 'person_check', color: 'text-green-600', bg: 'bg-green-50' },
        { title: 'Toplam Alacak', value: '₺450.200', change: '-2%', isPositive: false, icon: 'account_balance_wallet', color: 'text-amber-600', bg: 'bg-amber-50' },
        { title: 'Son 30 Günlük Satış', value: '₺85.400', change: '+18%', isPositive: true, icon: 'trending_up', color: 'text-primary', bg: 'bg-primary/10' }
    ]);

    // Customers Data
    const [customers] = useState([
        {
            id: 'CUST-8821',
            name: 'ABC Otomotiv Ltd.',
            icon: 'corporate_fare',
            sector: 'Otomotiv',
            contact: 'Ahmet Yılmaz',
            phone: '0532 123 45 67',
            balance: '₺12.500,00',
            balanceColor: 'text-slate-900',
            status: 'AKTİF',
            statusColor: 'bg-green-100 text-green-700',
            dotColor: 'bg-green-600'
        },
        {
            id: 'CUST-7422',
            name: 'Tekno Lojistik A.Ş.',
            icon: 'precision_manufacturing',
            sector: 'Lojistik',
            contact: 'Mehmet Demir',
            phone: '0544 987 65 43',
            balance: '₺0,00',
            balanceColor: 'text-slate-900',
            status: 'AKTİF',
            statusColor: 'bg-green-100 text-green-700',
            dotColor: 'bg-green-600'
        },
        {
            id: 'CUST-4410',
            name: 'Global İnşaat Sanayi',
            icon: 'architecture',
            sector: 'İnşaat',
            contact: 'Ayşe Kaya',
            phone: '0212 555 12 34',
            balance: '-₺4.200,00',
            balanceColor: 'text-red-600',
            status: 'PASİF',
            statusColor: 'bg-slate-100 text-slate-500',
            dotColor: 'bg-slate-400'
        },
        {
            id: 'CUST-9011',
            name: 'Yıldız Tekstil A.Ş.',
            icon: 'apparel',
            sector: 'Tekstil',
            contact: 'Caner Öz',
            phone: '0533 444 22 11',
            balance: '₺8.900,00',
            balanceColor: 'text-slate-900',
            status: 'AKTİF',
            statusColor: 'bg-green-100 text-green-700',
            dotColor: 'bg-green-600'
        }
    ]);

    return {
        stats,
        customers
    };
};

export default useCustomersViewModel;
