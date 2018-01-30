export const GET_ARTICLES = 'GET_ARTICLES'
export const GET_ONE_ARTICLE = 'GET_ONE_ARTICLE'

export const getArticles = () => {

  return async (dispatch) => {
    const response = await fetch('http://localhost:3001/articles')
    const json = await response.json()
    const trending = await json.data.sort(function(a,b){
      return (b.likes + b.views) - (a.likes + a.views)
    }).slice(0,3)
    dispatch({
      type: GET_ARTICLES,
      data:json.data,
      trending: trending
    })
  }

}

export const getArticleId = (id) => {

  return async (dispatch) => {
    const response = await fetch(`http://localhost:3001/articles/${id}`)
    const json = await response.json()
    const body = json.data.body.split('\n')
    dispatch({
      type: GET_ONE_ARTICLE,
      data: json.data,
      body: body
    })
  }
}
