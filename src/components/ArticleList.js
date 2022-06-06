import react from "react";
import Article from "./Article";


 function ArticleList(props){
 return (
       <main>
           {props.posts.map((article) => (
        <Article id={props.posts.id} />
      ))}
       </main>
 );
}
export default ArticleList;