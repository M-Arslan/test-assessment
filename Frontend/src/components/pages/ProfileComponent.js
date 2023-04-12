import React,{useEffect} from 'react';
import {useStyles} from '../../styles/styles';
import {useDispatch, useSelector} from 'react-redux';
import {LoadProfileAction} from '../../redux/actions/ProfileActions';
import MediaCard from '../common/MediaCard';
import SearchForm from './Search';
export default function ProfileView() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const profileResponse = useSelector(state=>state.news);
 
  useEffect(() => {
    debugger;
    dispatch(LoadProfileAction());
    return () => {};
  }, []);

  return (
    <div style={{marginTop:"100px"}}>
    <SearchForm />
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center',marginTop:"50px" }}>
      
      {profileResponse?.news?.length > 0 && profileResponse?.news?.map((item) => (
         <MediaCard item={item}/>
      ))}
    </div>
   </div> 
  )
}
