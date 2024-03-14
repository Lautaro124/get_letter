'use client'
import { FormEvent, useState } from "react";

export default function Home() {
  const [letter, setLetter] = useState<string>('')

  const handlerSubmit = (event: FormEvent<HTMLFormElement>) => {
    
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form onSubmit={(e) => { }}>
        <input type="text" />
        <button>Encontrar</button>
      </form>
      {
        letter.length != 0 ?? (
          <section>
            <h2>La letra encontrada es: </h2>
            <h1>{letter}</h1>
          </section>
        )
      }
    </main>
  );
}
