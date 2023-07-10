// JSX = JavaScript + XML (HTML)
import { Header } from "./components/Header";
import { Post } from './components/Post';
import { Sidebar } from "./components/Sidebar";
// author: { avatar_url: '', name: '', role: ''}
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://yt3.googleusercontent.com/D_E16BHqHTrPWU93uyvHXsh1j1wC3QiFXivbWkpjGIqK9sQzwiPyPirG8fqfQN5rJ5u6wYJyNJY=s176-c-k-c0x00ffffff-no-rj",
      name: 'Pedro Augusto',
      role: 'CTO @rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare'},
      {type: 'link', content: 'Jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare'},
      {type: 'link', content: 'Jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
];

import styles from './App.module.css';
import "./global.css"

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
              // eslint-disable-next-line react/jsx-key
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

