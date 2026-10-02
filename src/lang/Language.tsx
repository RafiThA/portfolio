import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

import es from './es.json';
import en from './en.json';

const languages = {
	es,
	en
};

const DEFAULT_LANGUAGE = 'es';

const LanguageContext = createContext<LanguageContextValue | null>(null);

interface LanguageContextValue {
    language: string;
    setLanguage: (lang: string) => void;
    translate: (key: string) => string;
}

export function LanguageProvider({ children }: { children: ReactNode }) {

    const [language, setLanguageState] = useState<string>(DEFAULT_LANGUAGE);

    // Function to translate a key based on the current language
    const translate = (key: string) => {
	
        const keys = key.split('/');

        let value = (languages as any)[language];

        for (const k of keys) {
            value = value?.[k];
        }

        return value || key;
    }

    // Use useCallback to memoize the setLanguage function
    const setLanguage = useCallback((lang: string) => {

        setLanguageState(lang);

    }, []);

    // Provide the context value to children components
    return (
        <LanguageContext.Provider value={{ language, setLanguage, translate }}>
            {children}
        </LanguageContext.Provider>
    );
}

// Custom hook to use the LanguageContext
export const useLanguage = () => {

    const context = useContext(LanguageContext);

    if (!context) throw new Error('useLanguage debe usarse dentro de LanguageProvider');
        return context;
};




