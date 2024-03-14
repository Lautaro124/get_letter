export function findMissingLetter(array:string[]):string {
  const alfabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  const lowIndex = alfabet.indexOf(array[0])
  const highIndex = alfabet.indexOf(array[array.length - 1])

  const result = alfabet.filter((letter, index) => {
    if(index >= lowIndex && index <= highIndex){
      return !array.includes(letter)
    }
    return false
  })

  return result.join('')
}