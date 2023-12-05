import clipboardCopy from 'clipboard-copy';

export const copiarEnlaceProyecto = (id) => {
  clipboardCopy(`https://www.rickbroken.com/#/proyectos#${id}`).then(()=>{console.log('Enlace copiado')})
}