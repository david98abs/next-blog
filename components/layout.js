import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
// import Profile from '../../public/images/Profile.png';
import Link from 'next/link';

const name = "David Boon";
export const siteTitle = "Next.js Sample Website";

export default function Layout({children, home}) {
    console.log("gererds")
    return (
        <div className={`${home?'fx':''}`}>
            <Head>
                <link rel='icon' href='' />
                <meta name='description' content='build personal blog using next.js' />
            </Head>
            <header>
                {home?(
                    <>
                        <Image 
                            // src={Profile}
                            src="/images/profile.png"
                            alt="profile"
                            height={144}
                            width={144}
                        />
                        <h1>{name}</h1>
                    </>
                ):(
                    <>
                        <Image 
                            src="/images/user.png"
                            alt="user"
                            height={144}
                            width={144}
                        />
                        <h1>
                            <Link href="/">
                                <a>{name}</a>
                            </Link>
                        </h1>
                    </>
                )}
            </header>
            {children&&<main className={styles.main}>
                {children}
            </main>}
            {/* {!home && (
                <div>
                    <Link href="/">
                        Back to Home
                    </Link>
                </div>
            )} */}
        </div>
    );
}