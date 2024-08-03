import { PencilLine } from '@phosphor-icons/react' 

import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
      <aside className={styles.sidebar}>
        <img 
        className={styles.cover} src="https://images.unsplash.com/photo-1721704095123-3e7dc4fba556?fm=jpg&q=40&w=300&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ1fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D" />
      
        <div className={styles.profile}>
            <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/122993323?v=4" />
            
            <strong>Carlos Alisson</strong>
            <span>Web Devolper</span>

        </div>

         <footer>
            <a href="#">
               <PencilLine/>
                Editar seu perfil
            </a>
         </footer>
      </aside>
    );
}