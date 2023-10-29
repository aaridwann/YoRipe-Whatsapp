import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './src/Redux/Store/Store';
import Navigator from './src/Navigation/SubNavigator/SubtNavigator';

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Navigator />
                {/* {Navigator()} */}
            </PersistGate>
        </Provider>
    );
}
