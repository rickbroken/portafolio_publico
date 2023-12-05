import clipboardCopy from 'clipboard-copy';

export const copiarEnlacePublicacion = (id) => {
  clipboardCopy(`https://www.rickbroken.com/#/#${id}`).then(()=>{console.log('Enlace copiado')})
}