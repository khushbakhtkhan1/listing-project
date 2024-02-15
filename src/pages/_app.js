import { Provider } from 'react-redux';
import { store } from '../store/store'; 
import { CssBaseline } from '@mui/material';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
        <title>Next Js Listing Project</title>
      </Head>
    
    <Provider store={store}>
      <CssBaseline />
      <Component {...pageProps} />
    </Provider>
    </>
  );
}

export default MyApp;
