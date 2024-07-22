"use client";

import styles from '../styles/Home.module.css';
import Image from "next/image";
import {useState} from "react";

export default function Page() {
    const [width, setWidth] = useState<number>(0);
    return (
        <div className={styles.container}>
            <main className="dark text-foreground bg-background">
                {/*<h1 className={styles.title}>*/}
                {/*    TYIC 桃高資訊社*/}
                {/*</h1>*/}
                <Image src={'/logo3500x2200.svg'} alt={'TYIC Logo'} height={350} width={220} priority
                       style={{borderRadius: '20px'}}/>

                <p className={styles.description}>
                    一個學習程式的地方
                </p>

                <div className={styles.grid}>
                    <a href="https://www.instagram.com/tyic_4th/" className={styles.card}>

                        <Image src={'/instagram_logo.svg'} alt={'Instagram Logo'} height={24}
                               width={24} style={{margin: '0 5px 0 0'}}/>
                        <h3 style={{display: 'inline-block'}}>Instagram &rarr;</h3>
                        <p>歡迎追蹤喔！</p>
                    </a>

                    <a href="https://github.com/TYSHIC/slides" className={styles.card}>
                        <h3>上課投影片 &rarr;</h3>
                        <p>歡迎任何非商業使用、修改</p>
                    </a>

                    <a href="https://github.com/TYSHIC/Java_Code" className={styles.card}>
                        <h3>範例程式碼 &rarr;</h3>
                        <p>配合上課投影片</p>
                    </a>
                </div>
            </main>

            <footer>
                <a
                    href="https://youtu.be/dQw4w9WgXcQ"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by TYIC 桃高資訊社
                </a>
            </footer>

            <style jsx>{`
                main {
                    padding: 1rem 0;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                footer {
                    width: 100%;
                    height: 100px;
                    border-top: 1px solid #eaeaea;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                footer img {
                    margin-left: 0.5rem;
                }

                footer a {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-decoration: none;
                    color: inherit;
                }

                code {
                    background: #fafafa;
                    border-radius: 5px;
                    padding: 0.75rem;
                    font-size: 1.1rem;
                    font-family: "Fira Code",
                    "Noto Sans TC",
                    sans-serif;
                }
            `}</style>

            <style jsx global>{`
                html,
                body {
                    padding: 0;
                    margin: 0;
                    font-family: "Fira Code",
                    "Noto Sans TC",
                    sans-serif;
                }

                * {
                    box-sizing: border-box;
                }
            `}</style>
        </div>
    );
}