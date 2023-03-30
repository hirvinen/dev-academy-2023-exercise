import Header from './Header';
import Head from 'next/head';
import type { PropsWithChildren } from 'react';

type LayoutProps = PropsWithChildren<{
  title: string;
  description?: string;
}>;

const Layout: React.FunctionComponent<LayoutProps> = (props: LayoutProps) => (
  <div className="layout">
    <Head>
      <title>{props.title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {props.description && (
        <meta name="description" content={props.description} />
      )}
    </Head>
    <Header />
    {props.children}
  </div>
);

export default Layout;
