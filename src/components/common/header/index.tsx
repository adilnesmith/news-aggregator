import { FC } from 'react'
import styles from './Header.module.scss'
import { LOGO_PLACEHOLDER, SEARCH_BTN_TEXT, SEARCH_INPUT_PLACEHOLDER } from 'lib/constants/Header';
import Search from 'components/ui/input';
import Button from 'components/ui/button';

const Header: FC<{}> = ({ }) => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.wrapper__columns__logo}>
        <p>{LOGO_PLACEHOLDER}</p>
      </div>
      <div className={styles.wrapper__columns__searchWrapper}>
        <Search className={styles.wrapper__columns__searchWrapper__searchField} type='text' placeholder={SEARCH_INPUT_PLACEHOLDER} />
        <Button className={styles.wrapper__columns__button} buttonText={SEARCH_BTN_TEXT} />
      </div>
    </header >
  )
}
export default Header;