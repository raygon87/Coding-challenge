import React, {useState} from "react";
import defaultPhoto from '../images/default.jpg';

interface Props {
  community: Community,
  averagePrice: number
}

interface Community {
  name: string, 
  imgUrl: string
}

const CommunityItem: React.FC<Props> = ({community, averagePrice}: Props) => {
  let validAvePrice = !isNaN(averagePrice) ? `$${averagePrice.toLocaleString()}` : 'N/A';

  const [src, setSrc] = useState(defaultPhoto);

  const handleImageLoaded = () => {
    setSrc(community.imgUrl)
  }

  const handleImageErrored = () => {
    setSrc(defaultPhoto)
  }

  return (
    <div className='CommunityItem'>
      <div className='card'>
        <h1 className='card-heading'>{community.name}</h1>
        <div className='card-img-box'>
          {community.imgUrl ?
            <img
            src={src}
            onLoad={handleImageLoaded}
            onError={handleImageErrored}
            alt={community.name}
            className='card-img'
            />
            : <img
            src={defaultPhoto}
            alt={community.name}
            className='card-img'
            />
          }
        </div>
        <h2 className='card-text'>Average Home Price <span className='card-avePrice'>{validAvePrice}</span></h2>
      </div>
    </div>
  );
};

export default CommunityItem;