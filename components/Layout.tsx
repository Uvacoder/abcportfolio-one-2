import Header from 'components/Header'
import Footer from 'components/Footer'
import Head from 'next/head'
import Favicons from 'components/Favicons'
import Meta from 'components/Meta'

interface Props {
  meta: {
    title: string | null,
    description: string | null,
  }
  children: JSX.Element,
}

const devMode = process.env.NODE_ENV === 'development'

export default function Layout(props: Props) {
  return (
    <>
      <Head>
        <Meta />
        <Favicons />
        <title>{props.meta.title ?? 'Default Title'} | Matt Waler</title>
        <meta name="description" content={props.meta.description ?? 'Default description.'} />
      </Head>
      <div className={`min-h-screen flex flex-col ${devMode && 'debug-screens'}`}>
        <Header />
        <main className="flex-1">
          {props.children}
        </main>
        <Footer />
      </div>
    </>
  )
}
