/**
 * Este archivo realiza las operaciones con mis datos de usuario, es decir,
 * CRUD de BBDD o filesystem o objetos en memoria (va a ser en este caso)
 */

/** 
 * LISTA DE USUARIOS EN MEMORIA COMO SI FUESE UNA COLLECTION DE 
 * BBDD
 */
const userList = [
    {
        email: 'blabla@bla.com',
        password: '123456',
        age: 21
    },
    {
        email: 'bleble@ble.com',
        password: '1234567',
        age: 22
    }
]


/**
 * Esta función va a buscar los datos a 
 * mi sistema de persistencia de datos y devuelve la entidad
 * usuario que corresponda o undefined si no lo encuentra
 */
export const getUserInfoById = (userId) => {
    return userList.find(u => u.email.toLowerCase() === userId?.toLowerCase());
}
