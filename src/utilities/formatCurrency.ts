//El resultado del código será un valor formateado en pesos argentinos,
//con el símbolo $ delante y separador de miles y decimales utilizando comas y puntos, respectivamente

const CURRENCY_FORMATTER = new Intl.NumberFormat("es-AR", {
  //representa el español utilizado en Arg
  style: "currency", //formatee valores en moneda
  currency: "ARS", //utilizado el símbolo de peso argentino
  minimumFractionDigits: 2, //asegura que se muestren siempre 2 decimales después de la coma en el valor formateado
});

export function formatCurrency(number: number) {
  //se define un valor numérico que se formateará utilizando el objeto
  return CURRENCY_FORMATTER.format(number); //se utiliza el método format del objeto para formatear el valor
}
