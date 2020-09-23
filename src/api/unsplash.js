// import React from 'react';
import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 
      'Client-ID nfTl_8EkoXQqcWPQpF6d3xNtdy29FZze38j8dpnOxfA'
  }
});

