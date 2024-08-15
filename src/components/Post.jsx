
import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';


export function Post({ author }) {
  

    return (
    
    <article className={styles.post}>
      <header>
         <div className={styles.author}>
            <Avatar hasBorder={true} src="https://avatars.githubusercontent.com/u/122993323?v=4"/>
            <div className={styles.authorInfo}>
               <strong>{author.name}</strong>
               <span>{author.role}</span> 
            </div>
         </div>

         <time title='11 de Maio ás 08:13h' dateTime='2022-05-11 08:13:30'>Publicado a 1h</time>
      </header>

      <div className={styles.content}> 
         
      </div>


      <form className={styles.commentForm}>
         <strong>Deixe seu feedback</strong>

         <textarea placeholder="Deixe um comentario"></textarea>
           
        <footer>
          <button type="submit">Enviar</button>
        </footer>
      </form>
       
       <div className={styles.commentList}>
         <Comment /> 
         <Comment />
         <Comment />
         
      </div> 
    </article>
)}
