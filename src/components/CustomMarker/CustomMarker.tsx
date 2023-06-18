import React from 'react';
import { Marker } from '@react-google-maps/api';

export const CustomMarker = React.memo(({ position }: CustomMarkerProps) => (
    <Marker position={position} icon={'/map-marker.webp'} />
));

type CustomMarkerProps = {
    /**
     * marker position object having lat and lng values as per the timeSeries data.
     */
    position: {
        lat: number;
        lng: number;
    };
};
