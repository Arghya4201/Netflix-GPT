import React from 'react';
import { useSelector } from 'react-redux';
import { IMG_CDN_URL } from '../utils/constants';

const MoreLikeThis = ({ movie }) => {
  const recommendations = useSelector(store => store.moreinfo.Recommendations);
  if (!recommendations || recommendations.length === 0) return null;
    console.log(recommendations)
  const top3Recommendations = [...recommendations]
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <div className='grid grid-rows-3 gap-4 px-10 max-h-[calc(100vh-200px)] overflow-hidden'>
      {top3Recommendations.map((rec, index) => (
        <div key={index} className='row-span-1 grid grid-cols-12 gap-4 items-start'>
          {/* Poster */}
          <div className='col-span-4'>
            <img
              src={IMG_CDN_URL + rec.poster_path}
              alt={rec.title}
              className='w-full h-40 object-cover rounded-lg shadow-md'
            />
          </div>

          {/* Title and Description */}
          <div className='col-span-8'>
            <h3 className='text-lg font-semibold mb-1'>{rec.title || rec.name}</h3>
            <p className='text-gray-300 text-sm line-clamp-3 overflow-hidden'>
              {rec.overview || "No description available."}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoreLikeThis;
