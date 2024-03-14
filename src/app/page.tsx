'use client'
import { findMissingLetter } from "@/utils/findMissingLetter";
import { validate } from "@/utils/validate";
import { FormEvent, useState } from "react";

export default function Home() {
  const [letter, setLetter] = useState<string>('')

  const handlerSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const letters: string[] = event.currentTarget.text.value.split('');
    const validation: boolean = validate(letters)
    if (validation) {
      const missingLetter = findMissingLetter(letters)
      console.log(missingLetter)
      setLetter(missingLetter)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h3>Encuentra la palabra perida</h3>
      <form onSubmit={handlerSubmit}>
        <label htmlFor="text">Ingrese la parte del abecedario</label>
        <input type="text" name="text" />
        <button>Encontrar</button>
      </form>
      <section>
        <h2>Letras faltantes: </h2>
        <h1>{letter}</h1>
      </section>
    </main>
  );
}
