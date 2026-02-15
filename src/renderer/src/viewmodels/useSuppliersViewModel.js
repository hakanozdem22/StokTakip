import { useState } from 'react';

const useSuppliersViewModel = () => {
    // Stats Data
    const [stats] = useState([
        { title: 'Toplam Tedarikçi', value: '124', change: '+5%', isPositive: true, icon: 'trending_up', color: 'text-green-500' },
        { title: 'Aktif Siparişler', value: '42', change: '+12%', isPositive: true, icon: 'trending_up', color: 'text-green-500' },
        { title: 'Ort. Performans', value: '4.8/5.0', change: '+2%', isPositive: true, icon: 'trending_up', color: 'text-blue-500' },
        { title: 'Geciken Teslimat', value: '3', change: '-1%', isPositive: false, icon: 'trending_down', color: 'text-red-500' }
    ]);

    // Suppliers Data
    const [suppliers] = useState([
        {
            id: 1,
            initials: 'AC',
            name: 'ABC Çelik A.Ş.',
            category: 'Hammadde',
            categoryColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
            contact: 'Ahmet Yılmaz',
            phone: '+90 212 555 0101',
            rating: 4.0,
            activeOrders: 12
        },
        {
            id: 2,
            initials: 'LP',
            name: 'Lojistik Pro',
            category: 'Lojistik',
            categoryColor: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
            contact: 'Ayşe Demir',
            phone: '+90 216 444 0202',
            rating: 5.0,
            activeOrders: 8
        },
        {
            id: 3,
            initials: 'PD',
            name: 'Paketleme Dünyası',
            category: 'Ambalaj',
            categoryColor: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
            contact: 'Mehmet Can',
            phone: '+90 232 333 0303',
            rating: 3.0,
            activeOrders: 5
        },
        {
            id: 4,
            initials: 'YP',
            name: 'Yedek Parça Market',
            category: 'Yedek Parça',
            categoryColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300',
            contact: 'Fatma Kaya',
            phone: '+90 312 222 0404',
            rating: 4.5,
            activeOrders: 15
        }
    ]);

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push('star');
        }
        if (hasHalfStar) {
            stars.push('star_half');
        }
        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars.push('star_outline'); // Or just empty star logic if needed, but HTML used filled stars with specific settings
        }

        // Note: The original HTML used font-variation-settings 'FILL' 1 for full stars.
        // We will return an array of objects to render in View to keep ViewModel pure data/logic if possible, 
        // but returning string names for icons is fine.
        return stars;
    };

    return {
        stats,
        suppliers,
        renderStars
    };
};

export default useSuppliersViewModel;
