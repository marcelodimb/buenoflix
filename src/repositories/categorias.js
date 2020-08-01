import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias`;

const getAll = () => fetch(`${URL_CATEGORIES}`)
  .then(async (responseServer) => {
    if (responseServer) {
      const response = await responseServer.json();

      return response;
    }

    throw new Error('Não foi possível recuperar os dados.');
  });

const getAllWithVideos = () => fetch(`${URL_CATEGORIES}?_embed=videos`)
  .then(async (responseServer) => {
    if (responseServer) {
      const response = await responseServer.json();

      return response;
    }

    throw new Error('Não foi possível recuperar os dados.');
  });

export default {
  getAll,
  getAllWithVideos,
};
