import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import AnalyticsTracker from "./analytics-tracker";
export const metadata = {
  title: "Sai Aparanji Nemmani | Full Stack Developer | Cloud & AI Enthusiast",
  description: "Portfolio of Sai Aparanji Nemmani — Full Stack Developer skilled in React.js, AWS Cloud, Data Applications, and Machine Learning Deployment.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <Head>
        <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>

        <script data-goatcounter="https://aparanji.goatcounter.com/count"
        async src="//gc.zgo.at/count.js"></script>
        <script src="https://kit.fontawesome.com/3e854f2b72.js" crossOrigin="anonymous" async></script>
      </Head>
      <body className='body_custom'>
      <Navbar />
       <main className="flex-grow-1">
        {children}</main>
        <Footer />
        
        {/* <AnalyticsTracker /> */}
        </body>
    </html>
  );
}
