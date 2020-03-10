import React, {useEffect} from 'react';
import CommunityItem from './CommunityItem';

interface Props {
  sortedCommunities: Community[],
  homes: Homes[]
}

interface CommunityAndAvePrice {
  community: Community,
  averagePrice: number
}

interface Community {
  id: number,
  name: string,
  group: string,
  imgUrl: string
}

interface Homes {
  id: number,
  communityId: number,
  price: number,
  area: number,
  type: string
}

const Community: React.FC<Props> = ({sortedCommunities, homes}: Props) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const communitiesWithAvePrice: CommunityAndAvePrice[] = [];
  
  sortedCommunities.forEach(community => {
    let price: number = 0;
    let counter: number = 0;
    let avePrice: number;
    
    let obj: {
      averagePrice: number,
      community: Community
      } = 
      {averagePrice: 0, community: {
        id: 0, 
        name: '',
        group: '',
        imgUrl: ''
      }};

    homes.forEach(home => {
      if (community.id == home.communityId) {
        price += home.price;
        counter++;
      }
    });

    avePrice = Math.round(price / counter);

    obj.averagePrice = avePrice;
    obj.community = community;

    communitiesWithAvePrice.push(obj);
  });

  return (
    <div className='Community'>
      {communitiesWithAvePrice && 
        communitiesWithAvePrice.map((community: CommunityAndAvePrice) => (
        <CommunityItem community={community.community} averagePrice={community.averagePrice} key={community.community.id}/>
      ))}
    </div>
  )
}

export default Community;
