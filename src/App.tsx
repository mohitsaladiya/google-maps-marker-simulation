import { LocaleProvider, StyleProvider } from './providers';
import { MarkerSimulationMap } from './containers/MarkerSimulationMap';
import { ReactElement } from 'react';

function App(): ReactElement {
    return (
        <StyleProvider>
            <LocaleProvider>
                <MarkerSimulationMap />
            </LocaleProvider>
        </StyleProvider>
    );
}

export default App;
