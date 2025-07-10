import { actividad, animo, dormir, validateActividad, validateAnimo, validateDormir } from "@/components/Icons"

export function validate(body: any): void {
  const msj = 'Verifica los valores permitidos el objeto type.';
  if (!body.activities || !body.date || !body.img || !body.mood || !body.note || !body.sleep) 
    throw {
      message: `El body no contiene uno de valores obligatorios. Verifica los valores permitidos el objeto type. ${msj}`,
      type: {
        img: "string",
        mood: "string",
        sleep: "string",
        activities: "Array<string>",
        note: "string",
        date: "Date"
      }
    }
  if (validateActividad(body.activities as unknown as string[]) === false) 
    throw {
      message: `El valor de 'actvidades' no corresponde con las opciones validas. ${msj}`,
      type: actividad
    }
  if (typeof body.date != 'string' && isNaN(body.date.getTime())) 
    throw {
      message: `El valor de 'date' no corresponde con las opciones validas. ${msj}`,
      type: "Date"
    }
  if (typeof body.img != 'string') 
    throw {
      message: `El valor de 'img' no corresponde con las opciones validas. ${msj}`,
      type: "string"
    }
  if (validateAnimo(body.mood) === false) 
    throw {
      message: `. ${msj}`,
      type: animo
    }
  if (typeof body.note != 'string') 
    throw {
      message: `El valor de 'note' no corresponde con las opciones validas. ${msj}`,
      type: "string"
    }
  if (validateDormir(body.sleep) === false) 
    throw {
      message: `El valor de 'sleep' no corresponde con las opciones validas. ${msj}`,
      type: dormir
    }
}