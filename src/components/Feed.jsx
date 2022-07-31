import { List } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Article from './Article';
import { getArticles } from '../services/fetchArticles';

const Feed = () => {

    const [articlesList, setArticlesList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const articles = await getArticles();
            setArticlesList(articles);
        };
        fetchData();
    }, []);

    const articlesCardsList = articlesList.map((article, key) => (
        <Article key={key} title={article.title} url={article.url}/>)
    );

    return (
        <List>
            {articlesCardsList}
        </List>
    );
};

export default Feed;