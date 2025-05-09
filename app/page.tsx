"use client";

import styles from '../styles/Home.module.css';
import Image from "next/image";

export default function Page() {
    return (
        <div className={styles.container}>
            <main className="dark text-foreground bg-background">
                <Image src={'/logo3500x2200.svg'} alt={'TYIC Logo'} height={455} width={286} priority
                       style={{borderRadius: '20px'}}/>

                <hr style={{width: "100%"}}/>
                <h1 style={{margin: 0}}>相關連結</h1>
                <div className={styles.grid}>
                    <a href="https://www.instagram.com/tyic_4th/" className={styles.card}>
                        <Image src={'/instagram_logo.svg'} alt={'Instagram Logo'} height={24}
                               width={24} style={{margin: '0 5px 0 0'}}/>
                        <h2 style={{display: 'inline-block'}}>Instagram &rarr;</h2>
                        <p>歡迎追蹤我們的 IG 喔！</p>
                    </a>

                    <a href="https://github.com/TYSHIC" className={styles.card}>
                        <Image src={'/github_logo.svg'} alt={'Github Logo'} height={24}
                               width={24} style={{margin: '0 5px 0 0'}}/>
                        <h2 style={{display: 'inline-block'}}>Github &rarr;</h2>
                        <p>歡迎追蹤我們的 Github 喔！</p>
                    </a>

                    <a href="https://github.com/TYSHIC/slides" className={styles.card}>
                        <h2>上課投影片 &rarr;</h2>
                        <p>歡迎任何非商業使用、修改</p>
                    </a>

                    <a href="https://github.com/TYSHIC/Java_Code" className={styles.card}>
                        <h2>範例程式碼 &rarr;</h2>
                        <p>配合上課投影片</p>
                    </a>
                </div>
                <hr style={{width: "100%"}}/>
                <h1 style={{margin: 0}}>社團課程規劃</h1>
                <div className={styles.grid}>
                    <div style={{
                        border: '1px solid #eaeaea',
                        margin: '1rem',
                        padding: '1rem',
                        borderRadius: '25px'
                    }}>
                        <h2 style={{margin: 0}}>上學期：</h2>
                        <p>1. 相見歡 + 程式語言 + 編輯器</p>
                        <p>2. Java: 基礎語法</p>
                        <p>3. Java: 基礎語法 + IntelliJ IDEA + Java: 流程控制</p>
                        <p>4. Java: 流程控制</p>
                        <p>5. Java: 流程控制</p>
                        <p>6. Java: 流程控制 + 陣列</p>
                        <p>7. Kahoot 大賽</p>
                    </div>
                    <div style={{
                        border: '1px solid #eaeaea',
                        margin: '1rem',
                        padding: '1rem',
                        borderRadius: '25px'
                    }}>
                        <h2 style={{margin: 0}}>下學期：</h2>
                        <p>1. 靜態成員 + 類別與物件</p>
                        <p>2. Java: 類別與物件</p>
                        <p>3. Java: 套件與存取修飾子 + 包裝類別與工具類別(1) + 空值與參考 + 介面</p>
                        <p>4. Java: 介面 + 泛型 + 工具類別(2) + 資料結構</p>
                        <p>5. Kahoot 大賽</p>
                        <p>（註：剩下的教不完）</p>
                    </div>
                </div>
                <hr style={{width: "100%"}}/>
                <h1 style={{margin: 0}}>社團簡介</h1>
                <div style={{margin: "0 1rem 0 1rem"}}>
                    <p style={{textIndent: '2rem', margin: "0.5rem"}}>
                        {
                            "我們的社團致力於基礎 Java 語法的教學，" +
                            "專為對程式設計有興趣的同學量身打造。無論你是初學者或已有一定基礎的同學，我們都能夠引導你深入了解程式語言的語法，並且學會如何撰寫程式碼與應用。" +
                            "每次課程結束前都會安排自由時間，同時提供飲料供大家享用。而學期末，我們更會舉辦有獎的小型競賽，鼓勵社員們展現所學。"
                        }
                    </p>
                    <p style={{textIndent: '2rem', margin: "0.5rem"}}>
                        {
                            "    在社內，我們營造輕鬆愉快的氛圍，希望大家在互相學習的過程中能享受到學習的樂趣。我們會根據社員的反饋和需求調整教學方向，並提供學長親自輔導的機會，讓學習更有效率。" +
                            "加入我們的社團，不僅能獲得程式語言學習的指導和同伴的支持，也能在準備 APCS 考試時共同討論、解決難題。無論是追求程式設計技能還是準備考試，我們都歡迎你的加入！如有興趣，請隨時私訊我們詢問更多詳情。(╯✧∇✧)╯"
                        }
                    </p>
                </div>
                <hr style={{width: "100%"}}/>
                <h1 style={{margin: 0}}>歷屆社團網站</h1>
                <div style={{margin: "0 1rem 0 1rem"}}>
                    <span><a href="https://sites.google.com/view/tyic2021/">2021(已失效)</a>&nbsp;</span>
                    <span><a href="https://hackmd.io/@lin09140914/S1LjNlq-s">2022</a>&nbsp;</span>
                    <span><a href="https://sites.google.com/view/tyic2023/">2023</a>&nbsp;</span>
                    <span><a href="#">2024</a>&nbsp;</span>
                </div>
            </main>

            <footer>
                <a
                    href="https://youtu.be/dQw4w9WgXcQ"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <p>Powered by&nbsp;</p>
                    <p style={{color: 'orange'}}>TYIC 桃高資訊社</p>
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
                }
            `}</style>

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&display=swap');

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