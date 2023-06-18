import { useEffect, useState } from 'react';
import { locale } from './localTypes.ts';

export const LOCALE = {
    EN_US: 'en-us',
};
export const useLocale = (locale = LOCALE.EN_US) => {
    const [strings, setStrings] = useState<locale>({} as locale);
    useEffect(() => {
        (async () => {
            const { default: updatedStrings } = await import(
                `../../locale/${locale}.json`
            );
            setStrings({ ...updatedStrings });
        })();
    }, [locale]);

    return strings;
};
