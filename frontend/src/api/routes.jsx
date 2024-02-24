// Define las URL de tu API
const BASE_URL = 'http://localhost:3000';
const ACCOUNT_URL = '/account';
const USER_URL = '/user';

// Exporta las URL para su uso en otros archivos
export const Routes = {
    checkAccount: `${BASE_URL}${ACCOUNT_URL}/check`,
    createUser: `${BASE_URL}${USER_URL}/create`,
    // Agrega otras URL de la API según sea necesario
};