/* Lenguajes soportados*/
import es from './es.json' with { type: 'json' };
import en from './en.json' with { type: 'json' };

const languages = {
	es,
	en
};


export const translate = (key: string) => {
	
	const keys = key.split('/');

	let value = (languages as any)[sessionStorage.getItem("language") || "es"];

	for (const k of keys) {
	    value = value?.[k];
	}

	return value || key;
}

export const setLanguage = (lang: string) => {
    
    sessionStorage.setItem("language", lang);
}