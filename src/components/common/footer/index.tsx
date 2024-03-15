import { FC } from 'react';
import styles from './Footer.module.scss';
import { APP_TITLE } from 'lib/constants';
import { COPYRIGHT, CURRENT_YEAR } from 'lib/constants/Footer';
const Footer: FC<{}> = () => {
  return (
    <>
      <footer className={styles.wrapper}>
        <p className={styles.wrapper__copyright}>{`\u00A9 ${CURRENT_YEAR} ${APP_TITLE}. ${COPYRIGHT}`}</p>
      </footer>
    </>
  )
}
export default Footer;