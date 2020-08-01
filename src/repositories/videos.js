import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND_TOP}/videos`;

const create = (objetoDoVideo) => fetch(`${URL_VIDEOS}?_embed=videos`, {
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify(objetoDoVideo),
})
  .then(async (responseServer) => {
    if (responseServer) {
      const response = await responseServer.json();

      return response;
    }

    throw new Error('Não foi possível recuperar os dados.');
  });

export default {
  create,
};
