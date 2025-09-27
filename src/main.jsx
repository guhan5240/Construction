import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '@styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import { WishlistProvider } from './Context/WishlistContext.jsx';
import { WishlistProvider } from './Context/WishlistContext.jsx';
import axios from 'axios';
{/*import axios from 'axios';
const token="eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJST0xFX0FETUlOIl0sInN1YiI6ImFkbWluQGV4YW1wbGUuY29tIiwiaWF0IjoxNzU4OTUxMDc2LCJleHAiOjE3NTkwMzc0NzZ9.UZANpAerl5-Gy2lAzEpivSNCTfMNP3uoSDNd6pkw8lWE5mSrqUqGGUblqCtpuJu-AYgBx4Ip3xSs_oqv5xbNdw"
axios.interceptors.request.use((config)=>{console.log("guhan config",config);
  return{
    ...config,
    headers:{...config.headers,Authorization:`Bearer ${token}` }
  };
}, (error)=>console.log("error",error));

const token1="eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJST0xFX0FETUlOIl0sInN1YiI6ImFkbWluQGV4YW1wbGUuY29tIiwiaWF0IjoxNzU4OTYyMjQ3LCJleHAiOjE3NTkwNDg2NDd9.Z3OTZzb3U1TqSHwaME0uNcU-9z5fvZKnxsKlKT_z04iEPAqGm1cPBP7s7mDgi2rv0Btr4VUdrLwjOQbhCuOwqA";
axios.defaults.baseURL="http://localhost:8080/api/v1/admin";
axios.defaults.headers={
  "Content-Type": "application/json",
Authorization: `Bearer ${token1}`,
};*/}
ReactDOM?.createRoot(document.getElementById('root'))?.render(
  <WishlistProvider>
    <App />
  </WishlistProvider>
);
