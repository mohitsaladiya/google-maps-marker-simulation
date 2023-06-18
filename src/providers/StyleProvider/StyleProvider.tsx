import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles.tsx';
import { defaultTheme } from '../../themes/defaultTheme';
import { ReactNode } from 'react';

export const StyleProvider = ({ children }: { children: ReactNode }) => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyles />
            {children}
        </ThemeProvider>
    );
};
