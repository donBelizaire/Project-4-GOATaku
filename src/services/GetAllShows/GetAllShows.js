// import React from 'react'

const BASE_URL = 'https://kitsu.io/api/edge/anime?';

export default function GetAllShows() {
  return fetch(`${BASE_URL}`, {mode: "cors"})
    .then(res => res.json());
}