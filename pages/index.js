import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Synthoframe - High-Fidelity Prototyping Tool for the AI Era</title>
        <meta name="description" content="Synthoframe is an innovative high-fidelity prototyping tool designed for the AI era, helping you bring your ideas to life quickly and efficiently." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="title">
          Welcome to <a href="https://synthoframe.com">Synthoframe!</a>
        </h1>

        <p className="description">
          An innovative high-fidelity prototyping tool for the AI era
        </p>

        <div className="grid">
          <a href="https://synthoframe.com/docs" className="card">
            <h3>Documentation &rarr;</h3>
            <p>Check our detailed documentation to get started</p>
          </a>

          <a href="https://synthoframe.com/features" className="card">
            <h3>Features &rarr;</h3>
            <p>Discover all the features Synthoframe offers</p>
          </a>

          <a
            href="https://synthoframe.com/contact"
            className="card"
          >
            <h3>Contact Us &rarr;</h3>
            <p>Have questions? Our team is here to help</p>
          </a>

          <a
            href="https://synthoframe.com/pricing"
            className="card"
          >
            <h3>Pricing &rarr;</h3>
            <p>View our flexible pricing plans</p>
          </a>
        </div>
      </main>

      <footer className="footer">
        <a
          href="https://synthoframe.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Synthoframe
        </a>
      </footer>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .footer img {
          margin-left: 0.5rem;
        }

        .footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  )
}