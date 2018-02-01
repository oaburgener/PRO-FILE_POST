import store from '../store'

export const GET_ARTICLES = 'GET_ARTICLES'
export const GET_SPORT = 'GET_SPORT'
export const GET_ONE_ARTICLE = 'GET_ONE_ARTICLE'
export const DELETE_USER = 'DELETE_USER'
export const GET_USERS = 'GET_USERS'

export const CREATE_ARTICLE='CREATE_ARTICLE'
export const LOGIN = 'LOGIN'
export const UNAUTHORIZED = 'UNAUTHORIZED'
export const SIGNUP = 'SIGNUP'
export const GET_COOKIE = 'GET_COOKIE'


export const getArticles = () => {

  return async (dispatch) => {
    const response = await fetch('http://localhost:3001/articles/')
    const json = await response.json()
    const trending =  json.data.sort(function(a,b){
      return (b.likes + b.views) - (a.likes + a.views)
    }).slice(0,2)
    dispatch({
      type: GET_ARTICLES,
      data:json.data,
      trending: trending
    })
 }
}


export const getBySport = (sport)=> {

  return async (dispatch) => {
    const response = await fetch(`http://localhost:3001/articles/filter/${sport}`)
    const json = await response.json()
    let filtered = store.getState().splash.all_articles.filter(e => e.sport === sport)
    dispatch({
      type: GET_SPORT,
      data: json.data,
      filtered: filtered
    })
  }
}

export const getArticleId = (id) => {

  return async (dispatch) => {
    const response = await fetch(`http://localhost:3001/articles/${id}`)
    const json = await response.json()
    console.log(json.data);

    const body = json.data.body.split('\n')
    dispatch({
      type: GET_ONE_ARTICLE,
      data: json.data,
      body: body
    })
  }
}

export const getUsers = () => {
  return async (dispatch) => {
    const response = await fetch ('http://localhost:3001/users/')
    const json = await response.json()
    console.log(json);
    dispatch({
      type: GET_USERS,
      data: json.data,
    })
  }
}

export const delUser = (id) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:3001/users/${id}`,{
      method: 'DELETE',
      body: {},
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    let remaining = store.getState().admin.all_users.filter(e => e.id !== id)
    dispatch({
      type: DELETE_USER,
      data: remaining
    })
  }
}


export const createArticle = (id) => {

  let title = document.getElementById('title').value
  let summary = document.getElementById('summary').value
  let articleBody = document.getElementById('article-body').value
  let sport = document.getElementById('dropdown').value
  let image = document.getElementById('image').value

  let body = {user_id: id ,title:title, summary:summary, body:articleBody, sport:sport, image_url:image}
  let bitchinbod = JSON.stringify(body)
  return async (dispatch) => {
    const response = await fetch('http://localhost:3001/articles/', {
      method: 'POST',
      body: bitchinbod,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    dispatch({
      type: CREATE_ARTICLE,
      data: [...store.getState().splash.all_articles]
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
        let cookie = {jwt:json.token,admin:json.admin,id:json.id}
        document.cookie = cookie
        dispatch({
         type: LOGIN,
         data: true,
         cookie: cookie,
      })
    }
  }
}

export const SignUpVerify = (user) =>{
let body = JSON.stringify(user)
console.log(body);
return async (dispatch) =>{
    const response = await fetch('http://localhost:3001/users/',{
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
        'Accept': 'application/json'
      },
      body:body
    })

      dispatch({
       type: SIGNUP,
       data: true
    })
  }
  }
