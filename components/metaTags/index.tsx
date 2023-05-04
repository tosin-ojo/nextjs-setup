import Head from "next/head";

interface Props {}

const HeadTag: React.FC<Props> = () => {
  return (
    <Head>
      <title>Next Project Setup</title>

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadTag;
