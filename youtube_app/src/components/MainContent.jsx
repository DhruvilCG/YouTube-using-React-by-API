// import { useEffect, useState } from 'react'
// import './maincontent.css'

// function maincontent () {

    // const [video , setVideo] = useState([]) ;
    // useEffect(()=>{
    //     fetch('http://localhost:3000/youTube')
    //     .then((response) => response.json())
    //     .then((data) => setVideo(data)) 
    // } , [])


// return (
//         <>
//         <div className="mainCon">
        // <div className="navbar">
        //         <div className="nav1">
        //             <input type="text" name="" id="" placeholder=' Search' />
        //             <div>
        //                 <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true" alt="" />
        //             </div>
        //             <div style={{backgroundColor: '#181818'}}>
        //                 <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true" alt="" />
        //             </div>
        //             <div className="create" style={{backgroundColor: '#181818'}}>
        //                 <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true" alt="" />
        //             </div>
        //             <div className="more" style={{backgroundColor: '#181818'}}>
        //                 <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true" alt="" />
        //             </div>
        //             <div className="bell" style={{backgroundColor: '#181818'}}>
        //                 <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true" alt="" />
        //             </div>
        //             <div className="profile" style={{backgroundColor: '#181818'}}>
        //                 <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true" alt="" />
        //             </div>
//                 </div>
//                 <hr />
//             </div>
//             <div className="video">
//                 {video.map((i) => (
//                     <div className="videoSec">
//                         <div className="thumbnail">
//                             <img src={i.img_url1} alt="" />
//                         </div>
//                         <div className="description">
//                             <div className="logoTitle">
//                                 <img src={i.img_url2} alt="" />
//                                 <p>{i.t1}</p>
//                             </div>
//                             <div className="channelName">
//                                 <p className='p1'>{i.t2}</p>
//                                 <p className='p1'>{i.t3}</p>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//         </>
//     )
// }

// export default maincontent


import { useState } from "react";
import "./maincontent.css";

function MainContent() {
  const [videos, setVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // const API_KEY = "AIzaSyCmTcbBHvE3bLirycwGrIJt85p1XjvuVo8";
  const API_KEY = "AIzaSyCB-4LRB71zBut2rxWwzm_Nkfw0FYMtXfE";
  
  const fetchVideos = () => {
    if (searchQuery == "") {
      alert("Please enter a search term!");
      return;
    }

    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchQuery}&key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        const videoData = data.items.map((item) => ({
          id: item.id.videoId,
          thumbnail: item.snippet.thumbnails.medium.url,
          title: item.snippet.title,
          channel: item.snippet.channelTitle,
          description: item.snippet.description,
        }));
        setVideos(videoData);
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
      });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchVideos();
  };

  return (
    <div className="mainCon">
      <div className="navbar">
        <div className="nav1">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">
              <img
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true"
                alt="Search"
              />
            </button>
          </form>
          <div style={{ backgroundColor: "#181818" }}>
            <img
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true"
              alt="Mic"
            />
          </div>
          <div className="create" style={{ backgroundColor: "#181818" }}>
            <img
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true"
              alt="Create"
            />
          </div>
          <div className="more" style={{ backgroundColor: "#181818" }}>
            <img
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true"
              alt="More"
            />
          </div>
          <div className="bell" style={{ backgroundColor: "#181818" }}>
            <img
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true"
              alt="Bell"
            />
          </div>
          <div className="profile" style={{ backgroundColor: "#181818" }}>
            <img
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true"
              alt="Profile"
            />
          </div>
        </div>
        <hr />
      </div>
      <div className="video">
        {videos.length > 0 ? (
          videos.map((video) => (
            <div className="videoSec" key={video.id}>
              <div className="thumbnail">
                <img src={video.thumbnail} alt={video.title} />
              </div>
              <div className="description">
                <div className="logoTitle">
                  <p>{video.title}</p>
                </div>
                <div className="channelName">
                  <p className="p1">{video.channel}</p>
                  <p className="p1">{video.description}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No videos found. Try searching for something!</p>
        )}
      </div>
    </div>
  );
}

export default MainContent;
