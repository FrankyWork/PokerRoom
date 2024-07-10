import React from 'react';
import './Authorization.scss';
import useAuthorization from './useAuthorization';

export const Authorization = () => {
    const {
        login,
        password,
        handleLoginChange,
        handlePasswordChange,
        handleContinueButton
    } = useAuthorization();
    

    return (
        <div className="Authorization">
            <div className="Authorization__inputs">
                <input
                    className="Authorization__inputs__input"
                    placeholder="Login..."
                    title="Login"
                    value={login}
                    onChange={handleLoginChange}
                />
                <input
                    className="Authorization__inputs__input"
                    placeholder="Password..."
                    title="Password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
            </div>
            <button className="Authorization__button_continue" onClick={handleContinueButton}>
                Продолжить
            </button>
        </div>
    );
};
