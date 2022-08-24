import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { articleType } from './articlesReducer';

export const ARTICLES_ACTIONS = {
  ADD_ARTICLES: 'articles/add_articles',
  FETCH_BY_TAG: 'articles/fetch_by_tag'
};

export type articleActionType<T> = {
  type: string;
  payload: T;
};

export const fetchArticles = createAsyncThunk(
  ARTICLES_ACTIONS.FETCH_BY_TAG,
  async () => {
    const response = await axios.get(
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/tag/React'
    );
    console.log(response.data);
    return response.data.items as articleType[];
  }
);
