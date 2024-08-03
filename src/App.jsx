import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css'



export function App() {
  
  return (
    <div>
    
    <Header/>
    <div className={styles.wrapper}>
      
     <Sidebar />

       <main>
      <Post 
       author = "Carlos Alisson" 
       content = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, quasi tempore aspernatur facere illo tempora et, iste est fugit fuga similique reiciendis at vel esse. Voluptates sint atque accusantium totam."/>
     
     <Post
       author = "Fernando Lima"
       content = "Um novo post muito legal"
       />
       </main>
     </div>
    
    
    </div>
  )
}


