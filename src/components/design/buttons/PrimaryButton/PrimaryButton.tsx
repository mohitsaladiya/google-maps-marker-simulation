import styled, { css } from 'styled-components';

export const PrimaryButton = ({
    onClick,
    type = 'button',
    disabled,
    width,
    text = 'button',
    dataTestId,
}: PrimaryButtonProps) => {
    return (
        <StyledPrimaryButton
            width={width}
            onClick={onClick}
            type={type || 'button'}
            disabled={disabled}
            data-testid={dataTestId}
        >
            {text}
        </StyledPrimaryButton>
    );
};

type PrimaryButtonProps = {
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

const StyledPrimaryButton = styled.button<{ width?: string }>(
    ({ width, disabled, theme: { color, boxShadow } }) => css`
        border: none;
        border-radius: 30px;
        height: 56px;
        width: ${width || 'auto'};
        cursor: ${disabled ? 'not-allowed' : 'auto'};
        background: ${color.primaryButtonBg};
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        transition: 0.1s ease all;
        color: ${color.white};

        &:hover {
            background: ${disabled
                ? color.buttonDisabled
                : color.primaryButtonHover};
            cursor: ${disabled ? 'not-allowed' : 'pointer'};
            box-shadow: ${disabled ? 'none' : boxShadow.button};
        }

        &:focus {
            outline: none;
            background: ${color.primaryButtonHover};
            border: ${' 2px solid ' + color.primaryButtonFocusBorder};
            color: ${color.primaryButtonFocusText};
        }
    `
);
