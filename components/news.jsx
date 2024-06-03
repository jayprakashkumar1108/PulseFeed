import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Button from '@mui/material/Button';
import './newsitem.css';
import SlowSpeed from './SlowSpeed';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component'; // Import InfiniteScroll

export default class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 6,
        category: 'general'
    };

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    };

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResult: 0,
            pageSize: 6
        };
    }

    async componentDidMount() {
        this.setState({ loading: true });
        await this.fetchData(this.state.page);
        this.setState({ loading: false });
    }

    fetchData = async (page) => {
        let API_URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=91e6fd56662a4134bcc83125aaa6f8a5&page=${page}&pageSize=${this.state.pageSize}`;
        let data = await fetch(API_URL);
        let parseData = await data.json();
        this.setState({ articles: [...this.state.articles, ...parseData.articles], totalResult: parseData.totalResults });
    };

    fetchMoreData = async () => {
        await this.fetchData(this.state.page + 1);
        this.setState(prevState => ({
            page: prevState.page + 1
        }));
    };

    render() {
        const { articles } = this.state;

        return (
            <div className='container' style={{ marginTop: '6%' }}>
                <div>
                    <h1 style={{ color: 'red', textAlign: 'center', marginTop: '6%', '@media (max-width: 768px)': { marginTop: '6%' } }}>PulseFeed - Top Headline</h1>
                    {this.state.loading && <SlowSpeed />}
                </div>
                <InfiniteScroll
                    dataLength={articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.page * this.state.pageSize < this.state.totalResult}
                    loader={<h4>Loading...</h4>}
                >
                    <div className="row">
                        {articles.map((article, index) => (
                            <div key={index} className="col-md-4"> {/* Use index as the key */}
                                <NewsItem
                                    title={article.title ? article.title : ""}
                                    description={article.description ? article.description : ""}
                                    imageUrl={article.urlToImage ? article.urlToImage : "https://images.unsplash.com/photo-1562155847-c05f7386b204?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                                    newsUrl={article.url}
                                    author={article.author}
                                    date={article.publishedAt}
                                    source={article.source.name}
                                />
                            </div>
                        ))}
                    </div>
                </InfiniteScroll>

            </div>
        );
    }
}
