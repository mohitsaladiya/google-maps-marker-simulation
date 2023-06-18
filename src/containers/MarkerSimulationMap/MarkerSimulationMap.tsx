import { useCallback, useContext, useMemo, useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { SimulationControls } from '../../components/SimulationControls';
import { Upload } from '../../components/Upload';
import { timeSeriesData } from './timeSeriesData.ts';
import { MarkerField } from '../../components/MarkerField';
import styled, { css } from 'styled-components';
import { LoadingDots } from '../../components/design/loaders/LoadingDots';
import { LocaleContext } from '../../providers';

export const MarkerSimulationMap = () => {
    const locale = useContext(LocaleContext);
    const [simulationIndex, setSimulationIndex] = useState(0);
    const [pathList, setPathList] = useState([timeSeriesData]);
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: import.meta.env.GOOGLE_MAPS_API_KEY as string,
    });

    const onLoad = (map: google.maps.Map) => {
        const bounds = new window.google.maps.LatLngBounds();
        timeSeriesData?.forEach(({ lat, lng }) => {
            bounds.extend(new window.google.maps.LatLng(lat, lng));
        });
        map.fitBounds(bounds);
    };

    const center = useMemo(
        () => ({
            lat: 19.07609,
            lng: 72.877426,
        }),
        []
    );
    const mapOptions = useMemo(
        () => ({
            // mapId: 'ba213cae3a4d4dc9',
            disableDefaultUI: true,
            clickableIcons: false,
        }),
        []
    );

    const updateSimulationIndex = useCallback((currentIndex: number) => {
        setSimulationIndex(currentIndex);
    }, []);

    return (
        <Container>
            {isLoaded ? (
                <>
                    <GoogleMap
                        mapContainerStyle={{ height: '90%', width: '100%' }}
                        center={center}
                        zoom={5}
                        onLoad={onLoad}
                        options={mapOptions}
                    >
                        {pathList?.map((path, index) => {
                            return (
                                <MarkerField
                                    key={path?.length + index}
                                    path={path}
                                    simulationIndex={
                                        simulationIndex <= path?.length - 1
                                            ? simulationIndex
                                            : path?.length - 1
                                    }
                                />
                            );
                        })}
                    </GoogleMap>
                    <SimulationControls
                        getUpdatedIndex={updateSimulationIndex}
                    />
                    <UploadContainer>
                        <Upload
                            getExtractedData={(data) => {
                                setPathList([...pathList, data]);
                            }}
                            label={locale?.markerSimulationMap?.uploadBtnLabel}
                            width="200px"
                        />
                    </UploadContainer>
                    <UploadHint>
                        {locale?.markerSimulationMap?.fileUploadHint}
                    </UploadHint>
                </>
            ) : (
                <LoadingDots />
            )}
        </Container>
    );
};

const Container = styled.div`
    height: 80vh;
    width: 100%;
`;

const UploadContainer = styled.div`
    display: flex;
    justify-content: center;
`;
const UploadHint = styled.div(
    ({ theme: { fontSize, color } }) => css`
        display: flex;
        justify-content: center;
        font-size: ${fontSize._12};
        color: ${color.bodyTextSecondary};
    `
);
