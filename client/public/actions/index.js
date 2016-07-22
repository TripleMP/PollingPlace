import axios from 'axios';
import { browserHistory } from 'react-router';

export const SUBMIT_GAME = 'SUBMIT-GAME';
export const GET_GAMES = 'GET-GAMES';
export const SEARCH_GAMES = 'SEARCH-GAMES';
export const SUBMIT_PLAYER = 'SUBMIT-PLAYER'; 
export const POSSIBLE_LOCATIONS = 'POSSIBLE-LOCATIONS';
export const DETERMINED_LOCATION = 'DETERMINED-LOCATION';
export const CLEAR_LOCATIONS = 'CLEAR-LOCATIONS';
export const FILTER_GAMES = 'FILTER-GAMES';
export const FILTER_SEARCH = 'FILTER-SEARCH';
export const CREATE_GRAPH = 'CREATE-GRAPH';

export let graphData;

export function clearPossibleLocations() {
  return function(dispatch) {
    dispatch({ type: CLEAR_LOCATIONS, payload: [] })
  }
}

export function searchGames(searchObj) {
  
  return function(dispatch) {
    let locationResponse
  axios({
    method: 'GET',
    url: 'https://maps.googleapis.com/maps/api/geocode/json',
    params: {address: searchObj.location, miles: searchObj.miles , key: 'AIzaSyAlCGs74Skpymw9LLAjkMg-8jQ1gIue9n8'}
  })
    .then(function(response) {
      if(response.data.results.length > 1) {
        dispatch({ type: POSSIBLE_LOCATIONS, payload: response.data.results })
        throw new Error('error on search in actions')
      } else {
          searchObj.lat = response.data.results[0].geometry.location.lat
          searchObj.lng = response.data.results[0].geometry.location.lng
          searchObj.address = response.data.results[0].formatted_address
          searchObj.name = response.data.results[0].formatted_address

          locationResponse = searchObj;

          let determinedLocation = {address: response.data.results[0].formatted_address, lat: response.data.results[0].geometry.location.lat, lng: response.data.results[0].geometry.location.lng}
          dispatch({ type: DETERMINED_LOCATION, payload: determinedLocation })
          console.log(searchObj,'inside real search')
          return axios.get('/api/games', {
            params:searchObj
          })
      }
    })
      .then(function(response) {
        createGraphData(response, locationResponse);
        browserHistory.push('/SearchHome')
        dispatch({ type: SEARCH_GAMES, payload: response.data })
      })
      .catch(function(error) {
        console.log(error);
        console.log('error in the search games axios calls')
      })
  }
}

export function filterGame(filteredGames) {
  console.log("filtering game");
  return {
    type: FILTER_GAMES,
    payload: filteredGames
  };
}

export function filterSearch(filterOption) {
  return {
    type: FILTER_SEARCH,
    payload: filterOption
  };
}


export function submitGame(gameObj) {
  return function(dispatch) {
    axios({
      method: 'GET',
      url: 'https://maps.googleapis.com/maps/api/geocode/json',
      params: {address: gameObj.location, key: 'AIzaSyAlCGs74Skpymw9LLAjkMg-8jQ1gIue9n8'}
    })
      .then(function(response) {
        if(response.data.results.length > 1) {
          dispatch({ type: POSSIBLE_LOCATIONS, payload: response.data.results })
          throw new Error('jist an error')
        } else {
          gameObj.lat = response.data.results[0].geometry.location.lat
          gameObj.lng = response.data.results[0].geometry.location.lng
          gameObj.address = response.data.results[0].formatted_address
          gameObj.name = response.data.results[0].formatted_address
          return axios.post('/api/games', gameObj)
        }
      })
            .then(function(response) {
             return axios.get('/api/games')
            })
            .then(function(response) {
              browserHistory.push('/GameListHome')
              dispatch({ type: GET_GAMES, payload: response.data })
            })
            .catch(function(error) {
              console.log(error, 'there was an error in the submit game action')
            })
      .catch(function(error) {
        console.log(error, 'the error for the maps get call')
      })
  }
}

export function submitPlayer(playerObj) {
  return function(dispatch) {
    axios.put('/api/games', playerObj)
      .then(function(response) {
        dispatch({ type: SUBMIT_PLAYER, payload: response.data})
      })
      .catch(function(error) {
      })
  }
}

export function createGraphData(response, location) {
  graphData = { type: CREATE_GRAPH, payload: response.data, location: location };
}