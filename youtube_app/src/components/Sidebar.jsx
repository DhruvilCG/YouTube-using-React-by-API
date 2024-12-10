import './sidebar.css'

function sidebar () {

    const data2 = [
        {id: 1 , img_url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/explore.png?raw=true" , t1: "Explores"} ,
        {id: 2 , img_url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/shorts.png?raw=true" , t1: "Shorts"} ,
        {id: 3 , img_url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/your_video.png?raw=true" , t1: "Subscription"}
    ]

    const data3 = [
        {id: 1 , img_url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/history.png?raw=true" , t1: "History"} ,
        {id: 2 , img_url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/your_video.png?raw=true" , t1: "Your videos"} ,
        {id: 3 , img_url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/watch_later.png?raw=true" , t1: "Watch later"} ,{id: 4 , img_url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/liked.png?raw=true" , t1: "Liked videos"} ,
        {id: 5 , img_url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/down_arrow.png?raw=true" , t1: "Show more"}
    ]

    return (
        <>
            <div className="main">
                <div className="humbergerLogo">
                    <img className='img1' src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/hambarger.png?raw=true" alt="" />
                    <img className='img2' src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Youtube%20logo.png?raw=true" alt="" />
                </div>
                <div className="firstCont">
                    <div className="cont1">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/home.png?raw=true" alt="" />
                        <p>Home</p>
                    </div>
                    
                {data2.map((i, id) => (
                    <div className="cont">
                        <img src={i.img_url} alt="" />
                        <p>{i.t1}</p>
                    </div>
                ))}
                </div>
                <hr style={{ backgroundColor: '#323232', height: '2px', border: 'none' , width: '90%' }} />
                <div className="secondCont">
                <div className="cont2">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/library.png?raw=true" alt="" />
                        <p>library</p>
                    </div>
                    {data3.map((i,id) => (
                        <div className="cont">
                            <img src={i.img_url} alt="" />
                            <p>{i.t1}</p>
                    </div>
                    ))}
                </div>
                <hr style={{ backgroundColor: '#323232', height: '2px', border: 'none' , width: '90%' }} />
                <div className="secondCont">
                <div className="cont2">
                        <p className='p1'>SUBSCRIPTIONS</p>
                    </div>
                    <div className="cont">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201.png?raw=true" alt="" />
                        <p>Nadir On The Go</p>
                    </div>
                    <div className="cont">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true" alt="" />
                        <p>Coke Studeio Bandla</p>
                    </div>
                    <div className="cont">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(3).png?raw=true" alt="" />
                        <p>Figma </p>
                    </div>
                    <div className="cont">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true" alt="" />
                        <p>ATC Andreoid To... </p>
                    </div>
                    <div className="cont">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(5).png?raw=true" alt="" />
                        <p>Alux.com </p>
                    </div>
                    <div className="cont">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(6).png?raw=true" alt="" />
                        <p>Nadir On The Go</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default sidebar