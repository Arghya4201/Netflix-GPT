import React from 'react'
import { useSelector } from 'react-redux'
import { IMG_CDN_URL } from '../utils/constants'

const Overview = ({ movie }) => {
  const data = useSelector(store => store.moreinfo)
  const recommendations = data.Recommendations
  if(!recommendations) return
  const top3Recommendations = recommendations.slice(0, 3);

  return (
    <div className='mt-10'>
      <div>
        <p>{data.overview}</p>
        <div className='grid grid-cols-12 mt-10'>
          <div className='col-span-3 space-y-4 font-bold opacity-50'>
            <h1>Starring</h1>
            <h1>Created By</h1>
            <h1>Genre</h1>
          </div>

          <div className='col-span-9 space-y-4 font-bold'>
            <h1 className="flex flex-wrap gap-x-4">
              {data.cast?.map((name, idx) => (
                <span key={idx}>
                  {name}{idx < data.cast.length - 1 ? ',' : ''}
                </span>
              ))}
            </h1>

            <h1 className="flex flex-wrap gap-x-4">
              {data.createdby?.map((name, idx) => (
                <span key={idx}>
                  {name}{idx < data.createdby.length - 1 ? ',' : ''}
                </span>
              ))}
            </h1>

            <h1 className="flex flex-wrap gap-x-4">
              {data.Genre?.map((name, idx) => (
                <span key={idx}>
                  {name}{idx < data.Genre.length - 1 ? ',' : ''}
                </span>
              ))}
            </h1>
          </div>
        </div>

        <div className="flex space-x-4 mt-10 w-full">
          {top3Recommendations.map((movie, index) => (
            <div
              key={index}
              className="flex-1 transform transition-transform duration-300 hover:scale-105 hover:z-20"
            >
              <img
  alt={`Recommendation ${index + 1}`}
  className="w-full h-[300px] object-cover rounded"
  src={IMG_CDN_URL + movie.poster_path}
/>

            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Overview