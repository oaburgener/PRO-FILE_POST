export const GET_ARTICLES = 'GET_ARTICLES'
export const GET_SPORT = 'GET_SPORT'
export const GET_ONE_ARTICLE = 'GET_ONE_ARTICLE'
export const LOGIN = 'LOGIN'
export const getArticles = () => {

  return async (dispatch) => {
    const response = await fetch('http://localhost:3001/articles/')
    const json = await response.json()
    const trending =  json.data.sort(function(a,b){
      return (b.likes + b.views) - (a.likes + a.views)
    }).slice(0,3)
    dispatch({
      type: GET_ARTICLES,
      data:json.data,
      trending: trending
    })
 }
}

export const getBySport = (sport)=> {

  return async (dispatch) => {
    const response = await fetch(`http://localhost:3001/articles/${sport}`)
    const json = await response.json()
    dispatch({
      type: GET_SPORT,
      data: json.data,
    })
  }

}

export const getArticleId = (id) => {

  return async (dispatch) => {
    const response = await fetch(`http://localhost:3001/articles/${id}`)
    const json = await response.json()
    dispatch({
      type: GET_ONE_ARTICLE,
      data: json.data
    })
  }
}
export const logInVerify = (user) =>{
console.log(this.username);  return async (dispatch) =>{
    const response = await fetch('http://localhost:3001/users/',{
      method: 'put',
      body:{
        email: `${this.username}`,
        password: `${this.password}`
      }
    })
    const json = await response.json()
    dispatch({
      type: LOGIN,
      //verified:200 ? 404
      data: json.token
    })
  }
}
