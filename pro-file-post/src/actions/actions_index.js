export const GET_ARTICLES = 'GET_ARTICLES'

export const getArticles = () => {

  return async (dispatch) => {
    const response = await fetch('http://localhost:3001/articles')
    const json = await response.json()
    dispatch({
      type: GET_ARTICLES,
      data:json
    })
  }

}
