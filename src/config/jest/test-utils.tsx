import { FC, ReactElement, ReactNode } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LocaleProvider, StyleProvider } from '../../providers';

// Global utility that keeps track of all providers and any additional wrappers
// we might need to render components within our app. As more tests get added, this will
// start to look like the Provider tree we have in `App.tsx`
// https://testing-library.com/docs/react-testing-library/setup#custom-render
const AllTheProviders: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <StyleProvider>
            <LocaleProvider>
                <Router>{children}</Router>
            </LocaleProvider>
        </StyleProvider>
    );
};
const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>
): RenderResult => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export * from '@testing-library/jest-dom';
export { default as userEvent } from '@testing-library/user-event';
export { customRender as render };
