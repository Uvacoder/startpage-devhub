import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { articleType } from './articlesReducer';

export const ARTICLES_ACTIONS = {
  ADD_ARTICLES: 'articles/add_articles',
  FETCH_ARTICLES: 'articles/add_articles'
};

export type articleActionType<T> = {
  type: string;
  payload: T;
};

export const addArticles = (articles: articleType[]) => ({
  type: ARTICLES_ACTIONS.ADD_ARTICLES,
  payload: articles
});

export const fetchArticles = createAsyncThunk(
  ARTICLES_ACTIONS.FETCH_ARTICLES,
  async () => {
    const response = await axios.get(
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/tag/React'
    );
    return response.data;
  }
);
