import "../styles/globals.css";
//1. tailwind class 가져오기
// import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
  <Component {...pageProps} />
  );
}

export default MyApp;
