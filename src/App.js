import React ,{useEffect,useState} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards'
import wordsToNumbers from 'words-to-numbers'
const alanKey = 'e6774e559898a224d3b0ac9e9a3b9d162e956eca572e1d8b807a3e2338fdd0dc/stage'

const App=()=>{
    const [newsArticles,setNewArticles] = useState([])
    const [activeArticle, setActiveArticle] = useState(-1);


    useEffect(()=>{
        alanBtn({
            key : alanKey,
            onCommand :({command,articles,number})=>{
                if(command==='newHeadlines'){
                    setNewArticles(articles);
                    setActiveArticle(-1);
                }else if(command ==='highlight'){
                    setActiveArticle((prevActiveAryicle)=>prevActiveAryicle+1)
                }else if(command ==='open'){
                    const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > 20) {
            alanBtn().playText('Please try that again...');
          } else if (article) {
            window.open(article.url, '_blank');
            alanBtn().playText('please wait');
          } else {
            alanBtn().playText('Please try that again...');
          }
                }
            }
        })
    },[])
    return(
         <div>
             <br/>
             <br/>
              <NewsCards articles={newsArticles} activeArticle={activeArticle} />
         </div>
    )
}

export default App;