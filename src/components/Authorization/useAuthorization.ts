import React, {useState} from 'react';

const useAuthorization = () => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleContinueButton = () => {
        console.log('Login:', login);
        console.log('Password:', password);
    };

    return {
        login,
        password,
        handleLoginChange,
        handlePasswordChange,
        handleContinueButton
    };
};

export default useAuthorization;