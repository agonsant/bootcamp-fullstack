import React, { useState } from 'react';

export const AuthContext = React.createContext({
    auth: { isLogged:false },
    changeAuth: () => {}
});


export const AuthProvider = (props) => {
    const [stateAuth, changeStateAuth] = useState({isLogged:false});

    return (
    <AuthContext.Provider value={ { 
        authValue:stateAuth , 
        changeAuth: (newAuth) =>  changeStateAuth(newAuth)
    }}>
        {props.children}
    </AuthContext.Provider>
    )
}