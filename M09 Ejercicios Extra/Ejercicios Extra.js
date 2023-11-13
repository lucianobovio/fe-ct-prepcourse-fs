/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   ok = Object.keys(objeto)

   res = ok.map((e) => [e, objeto[e]]);
   
   return res
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   o = string.split('').sort()

   res = {}

   for (i = 0; i < o.length; i++) {
       if (res.hasOwnProperty(o[i])){
           res[o[i]]++;
       }
       else {
           res[o[i]]=1
       }
}

   return res

}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   o = string.split('')
   may = ''
   min = ''

   for (i = 0; i < o.length; i++) {
       if (o[i]==o[i].toUpperCase())
      {
       may = may+o[i]
      }
      else {
       min = min+o[i]
      }
      
   }
   return may+min
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   o = frase.split(' ')
   ss = []

   for (i=0; i<o.length; i++){
       a = o[i].split('')
       ra = a.reverse()
       re = ra.join('')
       ss.push(re)
   }

   res = ss.join(' ')
   return res
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   s = numero.toString()

   n = s.split('').toString()  
   r = s.split('').reverse().toString()

   if (n===r){
       return 'Es capicua'
   }
   else {return 'No es capicua'}
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   s = string.split('')
   res = ''
   console.log(s)

   for (i=0; i<s.length; i++){
      l = s[i]
      if (l!=='a' && l!=='b' && l!=='c'){
         res = res+s[i]
      }
   }
   return res
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   d = arrayOfStrings
   oa = d.sort((a, b) => a.length - b.length);
   return oa

}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   res = array1.filter(e => array2.includes(e));


   return res
}


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
