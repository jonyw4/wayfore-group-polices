import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wayfore - Políticas de Grupo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl">
          Políticas de Grupo da Wayfore
        </h1>
        <ol>
          <li>Enviar conteúdo pornográfico</li>
          <li>Fazer propaganda, sem a permissão dos moderadores</li>
          <li>
            Envio de links de grupos sem a prévia autorização dos moderadores
          </li>
          <li>
            Postar assuntos que não sejam pertinentes ao propósito do grupo
          </li>
          <li>
            Postar assuntos que sejam racistas, homofóbicos, sexualmente
            explícitos e abusivos
          </li>
          <li>
            Contenha link externo para páginas inadequadas de forma evitar SPAM
          </li>
        </ol>
      </main>
    </div>
  );
}
