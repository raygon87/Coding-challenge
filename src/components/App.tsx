import React, {useState, useEffect} from 'react';
import '../App.css';
import api from '../api';
import dynamicSort from '../helper/dynamicSort';
import Community from './Community';
import LoadingComponent from './LoadingComponent'
import ErrorPage from './ErrorPage';
import Header from './Header';

interface ICommunity {
  id: number,
  name: string,
  group: string,
  imgUrl: string
}

const App:React.FC = () => {

  const [communities, setCommunities] = useState([])
  const [homes, setHomes] = useState([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)

  const fetchCommunities = () => {
    setIsLoading(true)

    api.get('/communities')
      .then(response => {
        setCommunities(response.data)
        setIsLoading(false)
      })
      .catch(error => {
        setIsError(true)
      })
  }

  const fetchHomes = () => {
    setIsLoading(true)

    api.get('/homes')
      .then(response => {
        setHomes(response.data)
        setIsLoading(false)
      })
      .catch(error => {
        setIsError(true)
      })
  }

  useEffect(() => {
    fetchCommunities();
    fetchHomes();
  }, [])

  let sortedCommunities: ICommunity[];

  if (communities && communities.length > 0) {
    sortedCommunities = communities.sort(dynamicSort('name'))
  }
  

  let toShow = () => {
    if (sortedCommunities && homes && !isLoading && sortedCommunities.length && homes.length && !isError) {
      return <Community sortedCommunities={sortedCommunities} homes={homes} />
    } else if (isError) {
      return <ErrorPage />
    } else {
      return <LoadingComponent message={'Loading...'} />
    }
  }

  return (
    <div className="App">
      <Header />
      {toShow()}
    </div>
  );
}

export default App;
