import React,{useEffect} from 'react';
import {useStyles} from '../../styles/styles';
import {useDispatch, useSelector} from 'react-redux';
import {LoadProfileAction} from '../../redux/actions/ProfileActions';
import MediaCard from '../common/MediaCard';
import SearchForm from './Search';
export default function ProfileView() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const profileResponse = useSelector(state=>state.userDetails.userProfile);
 
  useEffect(() => {
    dispatch(LoadProfileAction());
    return () => {};
  }, [])

  return (
    <>
    <SearchForm />
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {profileResponse?.map((item) => (
         <MediaCard item={item}/>
      ))}
    </div>
   </> 
  )
}
