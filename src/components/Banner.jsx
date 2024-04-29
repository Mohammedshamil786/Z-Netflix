import React,{useState,useEffect} from 'react'
import tmdbAxiosinstance from '../tmdbAxiosInstance'
import './Banner.css'


function Banner({fetchUrl}) {

    
  const [allMovies,setAllMovies]=useState([])

  const base_url_img='https://image.tmdb.org/t/p/original'

  const fetchData=async ()=>{
    const response=await tmdbAxiosinstance.get(fetchUrl)
    // console.log(response.data.results)
    setAllMovies(response.data.results[Math.floor(Math.random()*response.data.results.length)])
    console.log(Math.floor(Math.random()*response.data.results.length))
  }

  // fetchdata()
  useEffect(()=>{
    fetchData()
  },[])

  console.log(allMovies)

  return (
    <div style={{height:'600px',width:'100%',
    backgroundImage:`url(${base_url_img}${allMovies.backdrop_path})`,backgroundSize:'cover',
    backgroundAttachment:'fixed'
    }}>

        <div className='banner-content'>
            <h1>{allMovies?.name}</h1>
            <h2>{allMovies?.overview}</h2>

        </div>
    
    </div>
  )
}

export default Banner