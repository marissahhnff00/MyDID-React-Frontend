import React from 'react';
import { KeycloakProvider, useKeycloak } from '@react-keycloak/web';

const App = () => {
    const { keycloak, initialized } = useKeycloak();

    if (!initialized) {
        return <div>Loading...</div>;
    }

    if (!keycloak.authenticated) {
        return <div>Not authenticated</div>;
    }

    return (
        <div>
            <p>Welcome, {keycloak.tokenParsed.name}</p>
            <button onClick={() => keycloak.logout()}>Logout</button>
        </div>
    );
};

const keycloakConfig = {
    realm: 'diddev',
    url: 'your-keycloak-url',
    clientId: 'sso-react',
    clientSecret: "mlHaSlm5lbdrNITCJcH63hBvjMKV8wX3"
};

const WrappedApp = () => (
    <KeycloakProvider keycloakConfig={keycloakConfig}>
        <App />
    </KeycloakProvider>
);

export default WrappedApp;
