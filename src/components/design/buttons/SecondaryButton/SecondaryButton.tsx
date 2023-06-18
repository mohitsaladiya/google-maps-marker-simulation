import styled, { css } from 'styled-components';

export const SecondaryButton = ({
    onClick,
    type = 'button',
    disabled,
    width,
    text,
    dataTestId,
}: SecondaryButtonProps) => {
    return (
        <StyledSecondaryButton
            width={width}
            onClick={onClick}
            type={type || 'button'}
            disabled={disabled}
            data-testid={dataTestId}
        >
            {text}
        </StyledSecondaryButton>
    );
};

type SecondaryButtonProps = {
    /**
     * Callback func triggers on click of button
     */
    onClick?: () => void;

    /**
     * Specify button type "button" | "submit"
     */
    type?: 'button' | 'submit';

    /**
     * Disables the button if true
     */
    disabled?: boolean;

    /**
     * Custom width for the button
     */
    width?: string;

    /**
     * Button text
     */
    text: string;

    /**
     * ID applicable for unit tests.
     */
    dataTestId?: string;
};
const StyledSecondaryButton = styled.button<{ width?: string }>(
    ({ width, disabled, theme: { color, boxShadow } }) => css`
        border: 2px solid ${color.secondaryButtonColor};
        border-radius: 30px;
        height: 56px;
        width: ${width || 'auto'};
        cursor: ${disabled ? 'not-allowed' : 'auto'};
        background: ${color.secondaryButtonBg};
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        transition: 0.1s ease all;
        color: ${color.secondaryButtonColor};

        &:hover {
            background: ${disabled ? color.buttonDisabled : color.white};
            cursor: ${disabled ? 'not-allowed' : 'pointer'};
            box-shadow: ${disabled ? 'none' : boxShadow.button};
        }

        &:focus {
            outline: none;
            background: ${color.white};
            border: ${' 2px solid ' + color.secondaryButtonFocusBorder};
            color: ${color.secondaryButtonFocusText};
        }
    `
);
