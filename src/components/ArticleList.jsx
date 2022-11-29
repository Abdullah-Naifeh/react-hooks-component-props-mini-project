import React from 'react';
import Article from './Article';

function ArticleList({posts}) {
    console.log(posts)
    const post = posts.map((e )=> 
   {return( <Article key={e.id} title={e.title} date={e.date} preview=
    
    {e.preview } minutes = {e.minutes}/> )})
        
    return (
        <main>
            {post}
        </main>
    );
}

export default ArticleList;