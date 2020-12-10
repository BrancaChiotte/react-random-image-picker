import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 2CHr2PpEvi-6nHt2tVPS96JefosFYJtDdNE7b6OMTtc',
  },
});
