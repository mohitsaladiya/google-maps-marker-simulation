import { useContext, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { PrimaryButton } from '../design/buttons/PrimaryButton';
import { SecondaryButton } from '../design/buttons/SecondaryButton';
import { LocaleContext } from '../../providers';

export const SimulationControls = ({
    getUpdatedIndex,
}: SimulationControlsProps) => {
    const locale = useContext(LocaleContext);
    const [isSimulating, setIsSimulating] = useState(false);
    const [isSimulationPaused, setIsSimulationPaused] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalIdRef = useRef<any>(null);

    useEffect(() => {
        if (getUpdatedIndex) {
            getUpdatedIndex(currentIndex);
        }
    }, [currentIndex, getUpdatedIndex]);
    const startSimulation = () => {
        setIsSimulating(true);
        if (isSimulationPaused) {
            setIsSimulationPaused(false);
        }
        intervalIdRef.current = setInterval(updateNextIndex, 1000);
    };

    const stopSimulation = () => {
        setIsSimulating(false);
        clearInterval(intervalIdRef.current);
        setCurrentIndex(0);
    };

    const updateNextIndex = () => {
        setCurrentIndex((prevState) => prevState + 1);
    };

    const pauseSimulation = () => {
        setIsSimulationPaused(true);
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = null;
    };

    return (
        <SimulationControlsContainer>
            {!isSimulating && (
                <PrimaryButton
                    width="200px"
                    onClick={startSimulation}
                    text={locale.app.simulationControls.simulateAllBtnText}
                />
            )}
            {isSimulating && (
                <>
                    {!isSimulationPaused && (
                        <SecondaryButton
                            width="150px"
                            onClick={pauseSimulation}
                            text={locale.app.simulationControls.pauseBtnText}
                        />
                    )}
                    {isSimulationPaused && (
                        <SecondaryButton
                            width="150px"
                            onClick={startSimulation}
                            text={locale.app.simulationControls.resumeBtnText}
                        />
                    )}
                    <SecondaryButton
                        width="150px"
                        onClick={stopSimulation}
                        text={locale.app.simulationControls.stopBtnText}
                    />
                </>
            )}
        </SimulationControlsContainer>
    );
};

type SimulationControlsProps = {
    /**
     * Callback func to get the updated index value for simulation
     */
    getUpdatedIndex: (currentIndex: number) => void;
};

const SimulationControlsContainer = styled.div(
    ({ theme: { spacing } }) => css`
        display: flex;
        gap: ${spacing.xl};
        justify-content: center;
        padding: ${spacing.lg};
    `
);
