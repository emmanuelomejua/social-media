import { createContext, useEffect, useReducer } from "react"
import AuthReducer from "./authReducer"

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    loading: false,
    error: false
}

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, AuthContext)

    useEffect(()=>{
        localStorage.getItem('user', JSON.stringify(state.user))
    }, [state.user])

    return (
        <AuthContext.Provider value={{
            user: state.user, 
            loading: state.loading, 
            error: state.error,
            dispatch
        }}>
        {children}
        </AuthContext.Provider>
    )
}
