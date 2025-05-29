import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'https://your-keycloak-server/auth', // Replace with your Keycloak URL
  realm: 'your-realm',
  clientId: 'your-client-id',
});

export default keycloak;
