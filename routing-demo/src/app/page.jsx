import Head from 'next/head'; // Import Head component for SEO

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Homepage</title> {/* Set a descriptive page title */}
        <meta name="description" content="Welcome to my homepage!" /> {/* Add a meta description for SEO */}
        <link rel="icon" href="/favicon.ico" /> {/* Link to favicon */}
      </Head>

      <main> {/* Wrap main content in a <main> tag for semantic HTML */}
        <h1>Welcome Home!</h1>
        <p>This is my homepage.</p> {/* Add some more content */}
      </main>
    </div>
  );
}