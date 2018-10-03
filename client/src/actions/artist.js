import { push } from "connected-react-router";

export const GET_ONE_ARTIST = "GET_ONE_ARTIST";
export const GOT_ALL_ARTISTS = "GOT_ALL_ARTISTS";

export const getOneArtist = (userId) => dispatch => {
  fetch(`/api/artist/${userId}`)
    .then(res => res.json())
    .then(artist => {
      dispatch({ type: GET_ONE_ARTIST, payload: artist });
      dispatch(push('/artist'))
    });
};

export const getAllArtists = () => dispatch => {

  const header = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }

  fetch('/api/artist/', header )
    .then( response => response.json())
    .then( artists => {
      dispatch(gotAllArtists(artists))
    })
}

export const gotAllArtists = (artists) => {
  return {
    type: GOT_ALL_ARTISTS,
    payload: artists
  }
}