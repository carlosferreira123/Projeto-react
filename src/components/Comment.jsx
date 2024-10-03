
import { ThumbsUp, Trash } from '@phosphor-icons/react';
import { Avatar } from './Avatar'
import styles from './Comment.module.css';
import { useState } from 'react';

export function Comment({content, onDeleteComment}) {
   const [likeCount, setLikeCount] = useState(0);
   
   function handledeletecomment() {
     
      onDeleteComment(content);
   }
   
   function handleLikeComment() {
      setLikeCount(likeCount + 1);
   }
   
   return(
       <div className={styles.comment}>
          <img src="https://avatars.githubusercontent.com/u/122993323?v=4" alt="" />
           
           <div className={styles.commentBox}>
              <div className= {styles.commentContent}>
                 <header>
                    <div className={styles.authorAndTime}>
                        <strong>Carlos Santos</strong>
                        <time title="11 de Maio ás 08:13h" dateTime='2022-05-11 08:13:30'>Cerca de 1h atrás</time>

                    </div>
                    
                    <button onClick={handledeletecomment} title="Deletar comentario">
                        <Trash size={23}/>
                    </button>

                 </header>
                 
                 <p>{content}</p>
              </div>
               
               <footer>
                 <button onClick={handleLikeComment}>
                    <ThumbsUp />
                    Aplaudir <span>{likeCount}</span>
                 </button>
               </footer>
           </div>
       
       </div>

    )

}