import { useState } from 'react';

const useSettingsViewModel = () => {
    // Settings State
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [darkModeEnabled, setDarkModeEnabled] = useState(false);
    const [userProfile, setUserProfile] = useState({
        name: 'Alex Johnson',
        role: 'Tesis Müdürü',
        email: 'alex.j@industrialhub.com',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbxsZHnNi_c9Yz4bJzJasHKKgG00WCH1fTEGbL1BfUgVR_wPTbUY5S0T1U4DMsI6UOY4iqm5z6MjmBkviZyLuwv-YU4RIWvQDds8p8R03hH3MfEGQKl9PmnoUQdtyrsOt-3gKF2HTtbIUHNVGpE7F8SxTdy2LIdj7iYgnMYESjibX3vnxtvvcLfXHwfQjFgQeAOiLwianmjb3JFn72vTrxI8Xk4RSIWJiqYtYe7SRbXBk3x9foMmipvSSiA63nC4uh6_Ne1lZBNxzu'
    });

    const handleSaveProfile = () => {
        // Implement save logic here
        console.log('Profile saved', userProfile);
        alert('Profil kaydedildi!');
    };

    const handleToggleNotification = () => setNotificationsEnabled(!notificationsEnabled);
    const handleToggleDarkMode = () => setDarkModeEnabled(!darkModeEnabled);

    return {
        notificationsEnabled,
        darkModeEnabled,
        userProfile,
        setUserProfile,
        handleSaveProfile,
        handleToggleNotification,
        handleToggleDarkMode
    };
};

export default useSettingsViewModel;
