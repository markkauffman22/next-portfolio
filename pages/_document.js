// Custom Document, _document.js
// A custom Document is commonly used to augment your application's <html> and <body> tags.
// This is necessary because Next.js pages skip the definition of the
// surrounding document's markup.
// https://nextjs.org/docs/advanced-features/custom-document

import Document, { Html, Head, Main, NextScript } from 'next/document'

// The code below is the default Document added by Next.js. Feel free to
// remove the getInitialProps or render function from MyDocument if you don't need to change them

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="A site for programming portfolio" />
          <meta charSet="utf-8" />
          <meta name="robots" content="noindex, nofollow" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Chilanka&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />
          <p>I AM IN '_document' -> Yay ;=) </p>
          <NextScript />
        </body>
        <style jsx>{`
          body {
            font-family: 'Chilanka', cursive;
          }
        `}</style>
      </Html>
    )
  }
}
