import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
    realm: 'diddev',
    url: 'https://sso.digital-id.my',
    clientId: 'sso-react'
    // clientSecret: "mlHaSlm5lbdrNITCJcH63hBvjMKV8wX3",
    // grantType: "password"
});

export default keycloak;
