import styles from './Header.module.css'
import jakeLogo from '../assets/jake-logo.svg'
export function Header() {
    return (
        <div>
            <header className={styles.header}>
                <img src={jakeLogo} alt='Logotipo do jake'/>
                <strong>Ignite Feed</strong>
            </header>
        </div>
    );
}