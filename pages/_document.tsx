import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

interface Props {
styles: JSX.Element;
}

export default class MyDocument extends Document<Props> {
static async getInitialProps(ctx: DocumentContext) {
const sheet = new ServerStyleSheet();
const originalRenderPage = ctx.renderPage;
try {
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
        {sheet.getStyleElement()}
      </>
    ),
  };
} finally {
  sheet.seal();
}

}

render() {
return (
<Html>
<Head >
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />


<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&family=Raleway&family=Roboto:ital,wght@1,700&display=swap" rel="stylesheet"/> 
</Head>
<body>
<Main />
<NextScript />
</body>
</Html>
);
}
}