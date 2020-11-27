import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Wayfore - Políticas de Grupo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Políticas de Grupo da Wayfore</h1>
        <p>
          Essas são as regras de convivência para todos os grupos os quais são
          gerenciados pela Wayfore nas redes sociais (WhatsApp, Facebook entre
          outros)
        </p>
        <h2>É proibído</h2>
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
      <footer>
        Para mais informações entre em contato nas{' '}
        <a href="https://www.facebook.com/WayforeOfficial">
          redes sociais da Wayfore
        </a>
      </footer>
    </div>
  );
}
