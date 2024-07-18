"use client";

import { getAccessToken } from "@/app/actions/authActions";
import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";

type AuthProviderProps = {
    children?: ReactNode;
};
type IAuthContext = {
    state: string | null;
    setState: (prev: string) => void;
};
const initialValue = {
    state: null,
    setState: () => {},
};

const AuthContext = createContext<IAuthContext>(initialValue);

export default function AuthProvider({ children }: AuthProviderProps) {
    const [state, setState] = useState<string | null>(initialValue.state);
    useEffect(() => {
        const fetchMe = async () => {
            try {
                const resp = await getAccessToken();
                if (resp) {
                    return setState(resp);
                }
                setState(null);
            } catch (error) {
                setState(null);
                console.log(error);
            }
        };
        fetchMe();
    }, []);
    return (
        <AuthContext.Provider value={{ state, setState }}>
            {children}
        </AuthContext.Provider>
    );
}
//
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw Error("useAuth must be used inside AuthProvider");
    }
    return context;
};
