import Head from 'next/head';

function IndexPage() {
  return (
    <div>
      <Head>
        <title>Foot Caviar</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href={"/static/fonts/Brown2018-Regular.ttf"}></link>
      </Head>
    </div>
  );
}

export default IndexPage;