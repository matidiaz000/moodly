export function validatePUT(body: any): void {
  const msj = 'Verifica los valores permitidos el objeto type.';
  if (body.fullName && typeof body.fullName != 'string') 
    throw {
      message: `El valor de 'title' no corresponde con las opciones validas. ${msj}`,
      type: "string"
    }
  if (body.password && typeof body.password != 'string') 
    throw {
      message: `El valor de 'password' no corresponde con las opciones validas. ${msj}`,
      type: "string"
    }
  if (body.image && typeof body.image != 'string') 
    throw {
      message: `El valor de 'image' no corresponde con las opciones validas. ${msj}`,
      type: "string"
    }
}

export function validatePOST(body: any): void {
  const msj = 'Verifica los valores permitidos el objeto type.';
  if (!body.email || !body.fullName || !body.password) 
    throw {
      message: `El body no contiene uno de valores obligatorios. Verifica los valores permitidos el objeto type. ${msj}`,
      type: {
        email: "string",
        fullName: "string",
        password: "string",
      }
    }
  if (typeof body.email != 'string') 
    throw {
      message: `El valor de 'email' no corresponde con las opciones validas. ${msj}`,
      type: "string"
    }
  if (typeof body.fullName != 'string') 
    throw {
      message: `El valor de 'fullName' no corresponde con las opciones validas. ${msj}`,
      type: "string"
    }
  if (typeof body.password != 'string') 
    throw {
      message: `El valor de 'password' no corresponde con las opciones validas. ${msj}`,
      type: "string"
    }
}