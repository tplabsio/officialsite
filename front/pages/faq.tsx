import Image from 'next/image'
import Dropdown from 'rc-dropdown'
import { useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import langData from '../constants/lang'
import styles from '../styles/faq.module.css'

export default function Faq() {
  const router = useRouter()
  const selectRef = useRef<HTMLSpanElement>(null)
  const { locale } = router
  const lang: any = locale ? langData[locale] : langData["en"]

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <Link href="/" locale={locale}>
            <Image
              style={{ marginTop: 2 }}
              src="/logo.png"
              alt="logo"
              width={256}
              height={57}
            />
          </Link>
          <Dropdown
            trigger={['click']}
            getPopupContainer={() => selectRef?.current || window.document.body}
            overlay={
              <div className={styles.overlay}>
                <Link className={styles.langOption} href="/" locale="en">EngLish</Link>
                <Link className={styles.langOption} href="/" locale="zh">简体中文</Link>
              </div>
            }
          >
            <span className={styles.langSelect} ref={selectRef}>
              <Image src="/earth.png" alt="earth" width={18} height={18} />
              <span className={styles.langSelectText}>{lang.lang}</span>
            </span>
          </Dropdown>
        </div>
      </header>
      <main className={styles.main}>
        <div style={{ margin: '0 auto' }} className={styles.contentWidth}>
          <h1 className={styles.title}>{lang.infoTtitleOne}</h1>
          <ul className={styles.contentList}>
            <li className={styles.content}>
              <div className={styles.contentTitle}>
                {lang.faqContentTitleOne}
              </div>
              <div className={styles.contentText}>
                {lang.faqContentTextOne}
              </div>
            </li>
            <li className={styles.content}>
              <div className={styles.contentTitle}>
                {lang.faqContentTitleOne}
              </div>
              <div className={styles.contentText}>
                {lang.faqContentTextOne}
              </div>
            </li>
          </ul>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.contentWidth} style={{ display: 'flex' }}>
          <div className={styles.moreInfo}>
            <div style={{ width: 120 }}>
              <div className={styles.infoTitle}>{lang.infoTitleOne}</div>
              <ul className={styles.infoList}>
                <li className={styles.infoItem}>
                  <Link className={styles.infoContent} href="/faq" locale={locale}>{lang.infoContentHelp}</Link>
                </li>
              </ul>
            </div>
            <div style={{ width: 120 }}>
              <div className={styles.infoTitle}>{lang.infoTitleTwo}</div>
              <ul className={styles.infoList}>
                <li className={styles.infoItem}>
                  <a className={styles.infoContent} href="#">{lang.infoContentEmail}: hi@tplabs.io</a>
                </li>
                <li className={styles.infoItem}>
                  <a className={styles.infoContent} href="#">{lang.infoContentTwitter}: @tplabsio</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.divider} />
        <div className={styles.copyright}>
          <Image src="/logo.png" alt="icon" width={128} height={28} style={{ marginRight: 6 }} />
          <span>© 2022 - 2022 Tplabs.com. All rights reserved</span>
        </div>
      </footer>
    </div>
  )
}