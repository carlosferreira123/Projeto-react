import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';


import styles from './App.module.css';

import './global.css'


// author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// Content: string

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/122993323?v=4',
      name: 'Carlos Alisson', 
      role: 'Desenvolvedor front end'   
    },
    content: [
     { type: 'paragraph', content: 'Fala galera',},
     { type: 'paragraph', content: 'Subir mais um projeto, É um projeto com React e estou aprendendo como funciona seus components.'},
     { type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date ('2024-08-11 20:00:00'),
  },


{
  id: 2,
  author: {
    avatarUrl: 'https://avatars.githubusercontent.com/u/122993323?v=4',
    name: 'Thayanne Santos', 
    role: 'Contabilidade'   
  },
  content: [
   { type: 'paragraph', content: 'Fala galera',},
   { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur'},
   { type: 'link', content: 'jane.design/doctorcare'}
  ],
  publishedAt: new Date ('2022-08-9 20:00:00'),
},
];

export function App() {
  
  return (
    <div>
    
    <Header/>
    <div className={styles.wrapper}>
      
     <Sidebar />

       <main>
          {posts.map(post => {
            return (
            <Post
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}  
            />
          )
          })}
       </main>
     </div>
    s
    
    </div>
  )
}


