import styles from './Post.module.css';

export function Post() {
    return (
    
    <article className={styles.post}>
      <header>
         <div className={styles.author}>
            <img className={styles.avatar}src="https://avatars.githubusercontent.com/u/122993323?v=4" />
            <div className={styles.authorInfo}>
               <strong>Carlos Alisson</strong>
               <span>Web Devolper</span> 
            </div>
         </div>

         <time title='11 de Maio ás 08:13h' dateTime='2022-05-11 08:13:30'>Publicado a 1h</time>
      </header>

      <div className={styles.content}> 
          <p> Fala Galera !</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi distinctio omnis, officia delectus, esse, iure possimus consequuntur minus itaque eveniet sed nobis facere natus nihil. Qui magnam voluptas nostrum quo.</p>
          <p><a href="">Lorem ipsum dolor sit amet consectetur </a></p>
          <p>
            <a href="">#Lorem ipsum  </a> {' '}
            <a href="">#Lorem ipsum  </a> {' '}
            <a href="">#Lorem ipsum </a> {' '}
          </p>
      </div>


      <form className={styles.commentForm}>
         <strong>Deixe seu feedback</strong>

         <textarea placeholder="Deixe um comentario"></textarea>
           
        <footer>
        <button type="submit">Enviar</button>
        </footer>
      </form>
    </article>
)}
