import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Layout from "../../components/layout";
import styles from "../../components/layout.module.css";

export default function FirstPost() {
    return (
        <Layout></Layout>
        // <div>
        //     <Head>
        //         <title>First Post</title>
        //         <link rel="icon" href="/Profile.png" />
        //         {/* <script src="https://connect.facebook.net/en_US/sdk.js" /> */}
        //     </Head>
        //     {/* <Script 
        //         src="https://connect.facebook.net/en_US/sdk.js"
        //         strategy="lazyOnload"
        //         onLoad={()=>console.log('script loaded correctly, window.FB has been populated')}
        //     /> */}
        //     <h1 className={styles.post}>First Post</h1>
        //     <h2 className={styles.textunder}><Link href="/">Back to Home</Link></h2>
        //     <Image 
        //         src="/images/layout.jpg"
        //         alt="layout"
        //         height={144}
        //         width={144}
        //         // layout="fill"
        //     />
        // </div>
    );
}