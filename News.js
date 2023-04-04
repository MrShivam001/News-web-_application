import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 5,
    category: 'general'
  }

  static propType = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  captialFirst = (string) => {
    return string.charAt(0).toUppercase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    }
    document.title = `${this.props.category}-News`;
  }

  async update() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c2ee5d6e41c2484eafa2174fb7ab4ff9&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(50);
    let parseData = await data.json()
    this.props.setProgress(100);
    this.setState({ articles: parseData.articles, totalResults: parseData.totalResults, loading: false })

  }
  async componentDidMount() {
    //this.props.setProgress(10);
    //let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c2ee5d6e41c2484eafa2174fb7ab4ff9&page=1&pageSize=${this.props.pageSize}`;
    //this.setState({ loading: true });
    //let data = await fetch(url);
    //this.props.setProgress(50);
    //let parseData = await data.json()
    //this.props.setProgress(100);
    //this.setState({ articles: parseData.articles, totalResults: parseData.totalResults, loading: false })
    this.update();
  }
  prevpage = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c2ee5d6e41c2484eafa2174fb7ab4ff9&page=${this.state.page - 1}&pageSize${this.props.pageSize}`;
    //this.setState({ loading: true });
    //let data = await fetch(url);
    //let parseData = await data.json()
    //this.setState({
    // page: this.state.page - 1,
    //articles: parseData.articles,
    //totalResults: parseData.totalResults,
    //loading: false

    // })
    this.setState({ page: this.state.page - 1 })
    this.update();
  }
  nextpage = async () => {
    // (!(this.state.page + 1 > Math.ceil(this.totalResults / this.props.pageSize))) {
    //let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c2ee5d6e41c2484eafa2174fb7ab4ff9&page=${this.state.page + 1}&pageSize${this.props.pageSize}`;
    //this.setState({ loading: true });
    //let data = await fetch(url);
    //let parseData = await data.json()
    //this.setState({
    //  page: this.state.page + 1,
    //  articles: parseData.articles,
    //  totalResults: parseData.totalResults,
    //  loading: false

    //})
    this.setState({ page: this.state.page + 1 })
    this.update();
  }
  fetchMoreData= async () =>{
    this.setState({page: this.state.page + 1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c2ee5d6e41c2484eafa2174fb7ab4ff9&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.props.setProgress(50);
    let parseData = await data.json()
    this.props.setProgress(100);
    this.setState({ articles:this.state.articles.concat( parseData.articles), totalResults: parseData.totalResults})
  }


  render() {
    return (
      <>
        <h2 className="text-center">Top Headlines On {this.props.category}</h2>
        {this.state.loading && <Spinner />}{/* this .state.loading.&& means agar loading true h to news me import kar do*/}
     
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner />}
        >
          <div className='container'>
          <div className='row'>
            {this.state.articles.map((element) => {
              return <div className='col-md-4' key={element.url}>
                <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageurl={element.urlToImage} newsurl={element.url}
                  author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>

            })}
          </div>
          </div>
        </InfiniteScroll>
        

      </>
    )
  }
}

export default News