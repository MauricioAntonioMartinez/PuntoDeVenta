import Main from "../Layouts/Main";
import "../styles/antd.less";
import NextNprogress from "nextjs-progressbar";
import { DefaultSeo } from "next-seo";
import seoConfig from "../../seo.config";
import { withApollo } from "../lib/withApollo";

function MyApp({ Component, pageProps }: any) {
  return (
    <Main>
      <NextNprogress options={{ easing: "ease", speed: 500 }} />
      <DefaultSeo {...seoConfig} />
      <Component {...pageProps} />
    </Main>
  );
}

export default withApollo()(MyApp);
