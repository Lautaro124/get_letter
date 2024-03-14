'use client'
import { findMissingLetter } from "@/utils/findMissingLetter";
import { validate } from "@/utils/validate";
import { FormEvent, useState } from "react";

export default function Home() {
  const [letter, setLetter] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const inputText: string = event.currentTarget.text.value.trim();
    if (!inputText) {
      setErrorMessage('Por favor, ingrese algunas letras del abecedario.');
      return;
    }

    const letters: string[] = inputText.split('');
    const validation: boolean = validate(letters);
    if (validation) {
      const missingLetter = findMissingLetter(letters);
      setLetter(missingLetter);
      setErrorMessage('');
    } else {
      setErrorMessage('Por favor, ingrese letras consecutivas del abecedario.');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Encuentra la letra faltante del abecedario</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md w-full">
        <label htmlFor="text" className="font-semibold text-lg">Ingrese una serie de letras del abecedario:</label>
        <input
          id="text"
          name="text"
          type="text"
          placeholder="Ej. ABCDEFGIJKLM"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-black"
        />
        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:bg-blue-600">
          Encontrar letra faltante
        </button>
        {errorMessage && <p className="text-red-600">{errorMessage}</p>}
      </form>
      {letter && (
        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Letra faltante:</h2>
          <h1 className="text-4xl font-bold text-blue-500">{letter}</h1>
        </section>
      )}
    </main>
  );
}

