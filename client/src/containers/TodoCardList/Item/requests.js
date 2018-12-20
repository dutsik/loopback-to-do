import axios from 'axios'

export default {
  card: {
    completion: {
      create: async (card, responseHandler, errorHandler) => {
        try {
          responseHandler(
            await axios.post(`http://localhost:5000/api/v1/cards/${card.id}/completion`),
          )
        } catch (error) {
          errorHandler(error)
        }
      },
      destroy: async (card, responseHandler, errorHandler) => {
        try {
          responseHandler(
            await axios.delete(`http://localhost:5000/api/v1/cards/${card.id}/completion`),
          )
        } catch (error) {
          errorHandler(error)
        }
      },
    },
  },
}