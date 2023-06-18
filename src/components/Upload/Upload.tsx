import styled, { css } from 'styled-components';
import { timeSeriesDataType } from '../../containers/MarkerSimulationMap/timeSeriesData.ts';
import { ChangeEvent } from 'react';

export const Upload = ({
    getExtractedData,
    label = 'Upload',
    width,
}: UploadProps) => {
    const handleFileChange = async (event: ChangeEvent) => {
        const target = event.target as HTMLInputElement;
        const file = (target.files as FileList)[0];
        const fileData = await parseJsonFile(file);
        if (fileData?.length) {
            getExtractedData(fileData);
        }
    };

    async function parseJsonFile(file: File): Promise<timeSeriesDataType> {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.onload = (event) =>
                resolve(JSON.parse(event?.target?.result as string));
            fileReader.onerror = (error) => reject(error);
            fileReader.readAsText(file);
        });
    }

    return (
        <Button width={width}>
            <Label htmlFor="upload-input">{label}</Label>
            <Input
                id="upload-input"
                type="file"
                accept="application/JSON"
                onChange={handleFileChange}
            />
        </Button>
    );
};

type UploadProps = {
    /**
     * Callback func to be called to get the data from file.
     */
    getExtractedData: (fileData: timeSeriesDataType) => void;

    /**
     * Upload button text/label
     */
    label?: string;

    /**
     * Custom width for the button
     */
    width?: string;
};

const Button = styled.button<{ width?: string }>(
    ({ width, disabled, theme: { color, boxShadow } }) => css`
        border: none;
        border-radius: 30px;
        height: 56px;
        width: ${width || 'auto'};
        cursor: ${disabled ? 'not-allowed' : 'auto'};
        background: ${color.primaryButtonBg};
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

const Label = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
`;

const Input = styled.input`
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    cursor: pointer;
`;
