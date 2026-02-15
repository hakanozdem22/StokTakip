import { useState } from 'react';

const useNewProductViewModel = () => {
    const [formData, setFormData] = useState({
        name: '',
        sku: '',
        category: '',
        unit: 'piece',
        initialStock: '',
        criticalThreshold: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSave = () => {
        console.log('Product Saved:', formData);
        // Here you would typically make an API call to save the product
    };

    const handleCancel = () => {
        console.log('Cancelled');
        // Navigate back or reset form
        window.history.back();
    };

    return {
        formData,
        handleInputChange,
        handleSave,
        handleCancel
    };
};

export default useNewProductViewModel;
