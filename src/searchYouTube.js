import fetch from 'node-fetch';

export const searchYouTube = ({ key, query, max = 5 }, callback) => {
  fetch(
    // eslint-disable-next-line max-len
    `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${key}&q=${query}&maxResult=${max}&type=video&videoEmbeddable=true`,
    {
      method: 'GET',
    }
  )
    .then((resp) => resp.json())
    .then(({ items }) => {
      callback(items);
    });
};
