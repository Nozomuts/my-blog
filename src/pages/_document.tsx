import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="ja-JP" dir="ltr">
        <Head>
          <meta name="application-name" content="nozomuのブログ" />
          <meta name="theme-color" content="#282c34" />
          <meta name="description" content="適当に記事書きます" />
          <meta
            name="google-site-verification"
            content="xz6HjTcUg_PqUvkBnB8PPaVBsrHFr-cHT_qp91woOmE"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
