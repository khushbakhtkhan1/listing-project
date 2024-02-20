import { Provider } from 'react-redux';
import { store } from '../store/store'; 
import { CssBaseline } from '@mui/material';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';


function MyApp({ Component, pageProps }) {
  
  return (
    <>
    <Head>
        <title>Next Js Listing Project</title>
      </Head>
    <Provider store={store}>
      <CssBaseline />
      <ToastContainer />
      <Component {...pageProps} />
    </Provider>
    </>
  );
}

export default MyApp;
