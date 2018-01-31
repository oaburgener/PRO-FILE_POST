export const GET_ARTICLES = 'GET_ARTICLES'
export const GET_SPORT = 'GET_SPORT'
export const GET_ONE_ARTICLE = 'GET_ONE_ARTICLE'
export const LOGIN = 'LOGIN'
export const UNAUTHORIZED = 'UNAUTHORIZED'

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
    const body = json.data.body.split('\n')
    dispatch({
      type: GET_ONE_ARTICLE,
      data: json.data,
      body: body
    })
  }
}

export const logInVerify = (user) =>{
  let body = JSON.stringify(user)
  return async (dispatch) =>{
      const response = await fetch('http://localhost:3001/users/',{
        method: 'PUT',
        headers: {
          'Content-Type' : 'application/json',
          'Accept': 'application/json'
        },
        body:body
      })
      if(response.status===401){
        console.log(401);
        dispatch({
        type: UNAUTHORIZED,
        data: true
        })
      }else{
        const json = await response.json()
        let cookie = `jwt=${json.token}`
        document.cookie = cookie
        console.log(json);
        dispatch({
         type: LOGIN,
         data: true
      })
    }
  }
}
