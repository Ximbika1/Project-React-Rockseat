
import {PencilLine} from '@phosphor-icons/react'
import styles from './Sidebar.module.css'
import { Avatar } from './Avatar.jsx'
export function Sidebar() {
    return (
        <div>
            <aside className={styles.sidebar}>
                <img className={styles.cover} src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=40" />
                <div className={styles.profile}>
                    <Avatar src="https://yt3.googleusercontent.com/D_E16BHqHTrPWU93uyvHXsh1j1wC3QiFXivbWkpjGIqK9sQzwiPyPirG8fqfQN5rJ5u6wYJyNJY=s176-c-k-c0x00ffffff-no-rj" />
                    <strong> 
                        Pedro Augusto
                    </strong>
                    <span>
                        Web Developer
                    </span>
                </div>
                <footer>
                    <a href="#">
                        <PencilLine size='20' />
                        Editar seu perfil
                    </a>
                </footer>
            </aside>
        </div>
    );
}