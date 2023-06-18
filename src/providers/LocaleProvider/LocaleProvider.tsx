import React, { ReactNode } from 'react';
import { useLocale } from '../../hooks';
import { LOCALE } from '../../hooks/useLocale/useLocale.ts';
import type { locale } from '../../hooks/useLocale/localTypes.ts';

export const LocaleContext = React.createContext<locale>({} as locale);

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
    const localeValues: locale = useLocale(LOCALE.EN_US);
    return (
        <LocaleContext.Provider value={localeValues}>
            {children}
        </LocaleContext.Provider>
    );
};
