import { FC, CSSProperties, useEffect, useState} from 'react'
import './App.css'
import {Layout, Typography} from 'antd';
import { getNews } from './libs/get-news';
import ListWrap from './components/ListWrapper';
import DetailContent from './components/DetailContent';
import ListItemNews from './components/ListItemNews';

const {Header, Content, Footer} = Layout
const {Title} = Typography

const HeaderStyle: CSSProperties = {
  backgroundColor: 'white',
  marginBottom: '10px'
}

const LayoutStyle: CSSProperties = {
  padding: '10px',
  margin: 0,
  
}


const App: FC = () => {

  const [detail, setDetail] = useState(false)
  const [detailProps, setDetailProps] = useState({
    author: "News",
    publishedAt: "Tanggal",
    title: "Judul",
    url: "Lngk berita"
  })
  const [listNews, SetListNews] = useState([]);

  useEffect(() => {
    let mounted: boolean = true;
    const list: any = []
    let idKey = 0  
    getNews()
    .then(items => {
      items.articles.map((news: news) => {
        news.key = idKey ++
        list.push(news)
      });
      mounted && SetListNews(list)
    });

   console.log(listNews)
  },[])

  interface news {
    key: number
  }

  interface sourceNews {
    name: string,
    id: string
  };

  interface ListType {
    title: string,
    url: string,
    source: sourceNews,
    author: string,
    key: number
  };

  const ListNewComponent = listNews.map((news: ListType) => 
    <ListItemNews OnTap={() => getDetailPages(news.key)} key={news.key} author={news.author}  title={news.title} />
    )

  const ListNewsCompnentWrapper = <ListWrap>{ListNewComponent}</ListWrap>
  const DetailNews = <DetailContent onTap={() => setDetail(false)} {...detailProps}  />
  const DetailRendering = detail? DetailNews:ListNewsCompnentWrapper
  
  function getDetailPages(keys:number) {
    interface Elm {
      key: number
    }
    let news = listNews.filter((elm:Elm) => elm.key == keys)[0];
    setDetailProps(news)
    setDetail(true)
  }
  
  return (
    <Layout style={LayoutStyle}>
      <Header style={HeaderStyle}>
        <div>
        </div>
      </Header>
      <Content>
        {DetailRendering}
      </Content>
    </Layout>
  )
}

export default App
