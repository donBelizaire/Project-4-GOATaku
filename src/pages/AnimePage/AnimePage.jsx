import React from 'react';
import { Link } from 'react-router-dom';

const AnimePage = (props) => {
  
    const anime = props.getAnime(props.match.params.idx);
    
    return (
      <div className='AnimePage'>
        {anime ?
          <div className='AnimePage-anime'>
            <span>NAME:</span>
            <span>{anime.name}</span>
            <span>Episode Count:</span>
            <span>{anime.episode_count}</span>
            <span>Cover Image:</span>
            <span>{anime.cover_image}</span>
            <span>Synopsis:</span>
            <span>{anime.synopsis}</span>
            <Link to='/'>RETURN</Link>
          </div>
          :
          <h3>Loading...</h3>
        }
      </div>
    );
  };

export default AnimePage;