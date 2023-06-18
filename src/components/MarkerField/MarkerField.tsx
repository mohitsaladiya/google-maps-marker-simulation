import React from 'react';
import { MarkerPath } from '../MarkerPath';
import { CustomMarker } from '../CustomMarker';
import { timeSeriesDataType } from '../../containers/MarkerSimulationMap/timeSeriesData.ts';

export const MarkerField = React.memo(
    ({ path, simulationIndex }: MarkerFieldProps) => (
        <>
            <MarkerPath path={path} />
            <CustomMarker position={path?.[simulationIndex]} />
        </>
    )
);

type MarkerFieldProps = {
    /**
     * path array that contain timeSeries data constituting lat and lng
     */
    path: timeSeriesDataType;

    /**
     * simulation Index number that updates the marker position as per the timeSeries array
     */
    simulationIndex: number;
};
