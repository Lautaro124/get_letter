import { alfabet } from "@/constants/alfabet"

export const validate = (array: string[]) => {
  const lowIndex = alfabet.indexOf(array[0])
  const highIndex = alfabet.indexOf(array[array.length - 1])
  let isLetter = true

  array.forEach(letter =>{
    if(letter.charCodeAt(0) !== 0){
      isLetter = false
    }
  })
  
  if(isLetter){
    return isLetter
  }

  return lowIndex < highIndex
}