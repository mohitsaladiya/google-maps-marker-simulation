export type theme = {
    breakpoints: {
        mobile: string;
        /** 501 px and up. */
        tabletUp: string;
        /** 768 px and down */
        tabletDown: string;
        /** 801 px and up. */
        desktopUp: string;
    };
    borderRadius: {
        /** 2px; 0.125rem **/
        checkbox: string;
        /** 4px; 0.25rem */
        md: string;
        /** 4px; 0.25rem */
        btn: string;
        card: string;
    };
    boxShadow: {
        /* Standard Shadow - Light */
        standard: string;
        button: string;
    };
    spacing: {
        /** 2px; 0.125rem */
        xxs: string;
        /** 4px; 0.25rem */
        xs: string;
        /** 8px; 0.5rem */
        sm: string;
        /** 16px; 1rem */
        md: string;
        /** 24px; 1.5rem */
        lg: string;
        /** 32px; 2rem */
        xl: string;
        /** 40px; 2.5rem */
        xxl: string;
        /** 48px; 3rem */
        xxxl: string;
        /** 56px; 3.5rem */
        xxxxl: string;
        /** 64px; 4rem */
        xxxxxl: string;
    };
    baseFont: string;
    fontSize: {
        _56: string;
        _36: string;
        _32: string;
        _24: string;
        _21: string;
        _18: string;
        _16: string;
        _14: string;
        _12: string;
        _10: string;
        _8: string;
    };
    weight: {
        light: number;
        regular: number;
        medium: number;
        semi: number;
        bold: number;
    };
    color: {
        /* ---- GENERAL ---- */
        white: string;
        black: string;

        /* ---- BODY ---- */
        body: string;
        bodyText: string;
        bodyTextSecondary: string;

        /* ---- HEADER ---- */
        headerText: string;
        headerTextSecondary: string;

        /* ---- LINKS ---- */
        link: string;
        linkVisited: string;
        linkHover: string;
        linkActive: string;
        linkSelected: string;
        linkDisabled: string;
        linkArrow: string;
        linkArrowText: string;

        /* ---- BUTTONS ---- */
        primaryButtonBg: string;
        primaryButtonHover: string;
        primaryButtonFocusBorder: string;
        primaryButtonFocusText: string;
        secondaryButtonBg: string;
        secondaryButtonColor: string;
        secondaryButtonBorder: string;
        secondaryButtonFocusBorder: string;
        secondaryButtonFocusText: string;
        buttonDisabled: string;

        /* ---- LOADING ---- */
        loadingDot: string;

        /* ---- FOOTER ---- */
        footer: string;
        footerCopyright: string;
    };
};
