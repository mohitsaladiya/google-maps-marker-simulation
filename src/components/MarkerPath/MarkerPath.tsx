import React from 'react';
import { Polyline } from '@react-google-maps/api';
import { timeSeriesDataType } from '../../containers/MarkerSimulationMap/timeSeriesData.ts';

export const MarkerPath = React.memo(({ path }: MarkerPathProps) => {
    // TODO: generate darker colors instead for better path visibility
    const randomColor = () => {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        return 'rgb(' + r + ' ,' + g + ',' + b + ')';
    };

    const arrowSymbol = {
        path: 'M 1.5 1 L 1 0 L 1 2 M 0.5 1 L 1 0',
        fillColor: 'black',
        strokeColor: 'black',
        strokeWeight: 2,
        strokeOpacity: 1,
    };
    const options = {
        strokeColor: randomColor(),
        fillColor: 'black',
        strokeOpacity: 0.8,
        strokeWeight: 5,
        icons: [
            {
                icon: arrowSymbol,
                offset: '25px',
                repeat: '150px',
            },
        ],
    };

    return <Polyline path={path} options={options} />;
});

type MarkerPathProps = {
    /**
     * path array that contain timeSeries data constituting lat and lng
     */
    path: timeSeriesDataType;
};
