import { useRef } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import { useRouter } from 'next/router'
import Dropdown from 'rc-dropdown'
import Link from 'next/link'

import langData from '../constants/lang'
import styles from '../styles/Home.module.css'
import 'swiper/css'
import "swiper/css/pagination"

export default function Home() {
  const router = useRouter()
  const selectRef = useRef<HTMLSpanElement>(null)
  const { locale } = router
  const lang: any = locale ? langData[locale] : langData["en"]

  return (
    <div className={`${lang} ${styles.wrapper}`}>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <Link href="/" locale={locale}>
            <Image
              style={{ marginTop: 2 }}
              src="/logo.png"
              alt="logo"
              width={200}
              height={40}
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
      <main>
        <section className={styles.sectionOne}>
          <div className={styles.contentWidth}>
            <h1 className={styles.title}>{lang.title}</h1>
            <div className={styles.slogan}>{lang.slogan}</div>
            <p className={styles.supplement}>{lang.supplement}</p>
            <a className={styles.useButton} href="https://twitter.com/tplabsio" target="_blank">
              <span>{lang.try}</span>
            </a>
          </div>
        </section>
        <section className={styles.sectionTwo}>
          <div className={styles.contentWidth} style={{ paddingBottom: 74 }}>
            <h2 className={styles.whyTitle}>{lang.whyTitle}</h2>
            <ul className={styles.whyList}>
              <li className={styles.whyContent}>
                <div className={styles.whyIcon}>
                  <Image src="/technology_page-bits.svg" alt="icon" width={100} height={75} />
                </div>
                <div className={styles.whyContentTitle}>{lang.whyContentTitleOne}</div>
                <p className={styles.whyDescSlogan}>
                  <i>{lang.whyDescSloganOne}</i>
                </p>
                <p className={styles.whyContentDesc}>{lang.whyContentDescOne}</p>
              </li>
              <li className={styles.whyContent}>
                <div className={styles.whyIcon}>
                  <Image src="/Security.svg" alt="icon" width={100} height={75} />
                </div>
                <div className={styles.whyContentTitle}>{lang.whyContentTitleTwo}</div>
                <p className={styles.whyDescSlogan}>
                  <i>{lang.whyDescSloganTwo}</i>
                </p>
                <p className={styles.whyContentDesc}>{lang.whyContentDescTwo}</p>
              </li>
              <li className={styles.whyContent}>
                <div className={styles.whyIcon}>
                  <Image src="/performance.svg" alt="icon" width={100} height={75} />
                </div>
                <div className={styles.whyContentTitle}>{lang.whyContentTitleThree}</div>
                <p className={styles.whyDescSlogan}>
                  <i>{lang.whyDescSloganThree}</i>
                </p>
                <p className={styles.whyContentDesc}>{lang.whyContentDescThree}</p>
              </li>
              {/* <li className={styles.whyContent}>
                <div className={styles.whyIcon}>
                  <Image src="/icon1.png" alt="icon" width={100} height={75} />
                </div>
                <div className={styles.whyContentTitle}>DescOne4</div>
                <p className={styles.whyDescSlogan}>
                  <i>DescTwo4</i>
                </p>
                <p className={styles.whyContentDesc}>DescThree4</p>
              </li> */}
            </ul>
          </div>
        </section>
        <section className={styles.sectionThree}>
          <div className={styles.contentWidth}>
            <h2 className={styles.solutionTitle}>{lang.solutionTitle}</h2>
            <Swiper
              className={styles.swiper}
              slidesPerView={3}
              loop
              centeredSlides={true}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              slideToClickedSlide
              grabCursor
              modules={[Pagination]}
            >
              <SwiperSlide className={styles.swiperCard}>
                <Image className={styles.solutionIcon} src="/Storage-server.svg" alt="icon" width={50} height={50} />
                <div className={styles.solutionContentTitle}>{lang.solutionContentTitleOne}</div>
                <p className={styles.solutionContentDesc}>{lang.solutionContentDescOne}</p>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperCard}>
                <Image className={styles.solutionIcon} src="/Computing-chip.svg" alt="icon" width={50} height={50} />
                <div className={styles.solutionContentTitle}>{lang.solutionContentTitleTwo}</div>
                <p className={styles.solutionContentDesc}>{lang.solutionContentDescTwo}</p>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperCard}>
                <Image className={styles.solutionIcon} src="/IaaS-servers.svg" alt="icon" width={50} height={50} />
                <div className={styles.solutionContentTitle}>{lang.solutionContentTitleThree}</div>
                <p className={styles.solutionContentDesc}>{lang.solutionContentDescThree}</p>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <section className={styles.sectionFour}>
          <div className={styles.contentWidth}>
            <h2 className={styles.customerTitle}>{lang.customerTitle}</h2>
            <p className={styles.customerDesc}>{lang.customerDesc}</p>
          </div>
        </section>
        <section className={styles.sectionFive}>
          <div className={styles.contentWidth}>
            <h2 className={styles.startTitle}>{lang.startTitle}</h2>
            <div className={styles.startContent}>
              <ul className={styles.startList}>
                <li className={styles.startItem}>
                  <div className={styles.startNumber}>1</div>
                  <span className={styles.startStep}>{lang.startStepOne}</span>
                  <p className={styles.startDesc}>{lang.startDescOne}</p>
                </li>
                <li className={styles.startItem}>
                  <div className={styles.startNumber}>2</div>
                  <span className={styles.startStep}>{lang.startStepTwo}</span>
                  <p className={styles.startDesc}>{lang.startDescTwo}</p>
                </li>
                <li className={styles.startItem}>
                  <div className={styles.startNumber}>3</div>
                  <span className={styles.startStep}>{lang.startStepThree}</span>
                  <p className={styles.startDesc}>{lang.startDescThree}</p>
                </li>
                <li className={styles.startItem}>
                  <div className={styles.startNumber}>4</div>
                  <span className={styles.startStep}>{lang.startStepFour}</span>
                  <p className={styles.startDesc}>{lang.startDescFour}</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
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
                  <a className={styles.infoContent} href="https://twitter.com/tplabsio">{lang.infoContentTwitter}: @tplabsio</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.divider} />
        <div className={styles.copyright}>
          <Image src="/logo.png" alt="icon" width={128} height={28} style={{ marginRight: 6 }} />
          <span>© 2019 - 2022 tplabs.io All rights reserved</span>
        </div>
      </footer>
    </div>
  )
}
