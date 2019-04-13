import React from 'react'

const BASE_URL = 'https://hummingbirdv1.p.rapidapi.com/';

export default function GetAllShows() {
  return fetch(`${BASE_URL}anime`, {mode: "cors"})
    .then(res => res.json());
}