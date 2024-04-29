import React,{useState,useEffect} from 'react'
import tmdbAxiosinstance from '../tmdbAxiosInstance'
import './Row.css'

function Row({title,fetchUrl}) {
  
  const [allMovies,setAllMovies]=useState([])

  const base_url_img='https://image.tmdb.org/t/p/original'

  const fetchData=async ()=>{
    const response=await tmdbAxiosinstance.get(fetchUrl)
    // console.log(response.data.results)
    setAllMovies(response.data.results)
  }

  // fetchdata()
  useEffect(()=>{
    fetchData()
  },[])

  console.log(allMovies)

  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className='movies-row'>
        {
          allMovies?.map((item)=>(
            <img className='movie' src={`${base_url_img}${item.backdrop_path}`} alt="no-image" />
          ))
        }
      </div>
    </div>
  )
}

export default Row