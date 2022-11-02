import React from 'react';
import './App.css';
import MyProfile from './images/profile.png';

function App() {
  return (
    <div className="App">
      <div className='profile-body'>
      <img style={{ width: 88, height: 88 }} src={MyProfile}  alt="profile" />
      <div id='twittername'> Joshua Akinola </div>
      </div>
    {/*<div id='slack'> Joshua Akinola </div>*/}

    {/*Links are provided below to different pages */}

    
      <a href='https://twitter.com/jpakinola' id='twitter'>Twitter Link </a>
      <a href='https://training.zuri.team/' id='btn_zuri'>Zuri Team </a>
      <a href='http://books.zuri.team/' id='books'>Zuri Books </a>
      <a href='https://books.zuri.team/python-for-beginners?ref_id=JoshuaAkinola' id='books__python'>Python Books</a>
      <a href='https://background.zuri.team/' id='pitch'> Background Check for Coders </a>
      <a href='https://books.zuri.team/design-rules' id='book__design'>Design Books</a>
      
    </div>
  );
}

export default App;
