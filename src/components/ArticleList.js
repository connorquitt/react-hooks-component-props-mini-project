import blogData from "../data/blog";
import Article from './Article'
function ArticleList({}) {
    return (
      <main>
      {blogData.posts.map((post)=> <Article title={post.title} date={post.date} preview={post.preview} key={post.id}/>)}
      </main>
    )
  }


export default ArticleList