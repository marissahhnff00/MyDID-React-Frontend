import Keycloak from 'keycloak-js';

const config = new Keycloak({
    realm: 'diddev',
    url: 'https://sso.digital-id.my/',
    clientId: 'sso-react'
    // clientSecret: "mlHaSlm5lbdrNITCJcH63hBvjMKV8wX3",
    // grantType: "password"
}();

const keycloak = new Keycloak(config)

// keycloak.init({ onLoad: 'check-sso' })
//   .then(authenticated => {
//     console.log(authenticated ? 'Authenticated' : 'Not authenticated');
//   })
//   .catch(error => console.error('Keycloak initialization failed', error));


export default keycloak;
