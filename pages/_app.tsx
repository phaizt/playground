import "styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
			<ToastContainer autoClose={2000}/>
		</>
	);
}

export default MyApp;
