import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
render() {
    return (
        <Html lang="en">
            <Head>
                <meta charset="utf-8" />
                <meta name="description" content="A site for my programming portfolio" />
                <meta name="robots" content="noindex, nofollow" />
                <meta name="viewport" content="width=device-width" />

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"/>
            </Head>

            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"></link>

            <body>
                <Main />
                <NextScript />
            </body>
<style global jsx>{`
body {
    font-family: 'Roboto', sans-serif;
}
`}</style>
        </Html>
    )
  }   
}