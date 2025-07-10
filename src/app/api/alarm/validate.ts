export function validate(body: any): void {
  const msj = 'Verifica los valores permitidos el objeto type.';
  if (!body.title || !body.time || !body.when) 
    throw {
      message: `El body no contiene uno de valores obligatorios. Verifica los valores permitidos el objeto type. ${msj}`,
      type: {
        title: "string",
        time: "Date",
        when: "Array<string> | Date",
      }
    }
  if (typeof body.title != 'string') 
    throw {
      message: `El valor de 'title' no corresponde con las opciones validas. ${msj}`,
      type: "string"
    }
  if (!isDate(body.time))
    throw {
      message: `El valor de 'time' no corresponde con las opciones validas. ${msj}`,
      type: "Date"
    }
  if (!isDate(body.when) && !(body.when instanceof Array))
    throw {
      message: `El valor de 'when' no corresponde con las opciones validas. ${msj}`,
      type: "Array<string> | Date"
    }
}

export function isDate(str: any): boolean {
  if (typeof str != 'string') return false
  var d = new Date(str);
  return d instanceof Date && !isNaN(d as unknown as number);
}