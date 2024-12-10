import express from 'express';  
import cors from 'cors' ;
const app = express();
app.use(cors()) ;
app.use(express.json()) ;
const port = 3000;

app.get ('/youTube' , (req,res)=>{
    const data1 = [
        { id: 1, img_url1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true", t1: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', t2: 'Coke Studio Banglla' , t3: '1.5Mviews  2 days ago' , img_url2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true"
        },
        { id: 2, img_url1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true", t1: 'Infinity Note 12:      AMOLED        Helio G88 SoC!', t2: 'Coke Studio Banglla' , t3: '1.5Mviews  2 days ago' , img_url2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true"
        },
        { id: 3, img_url1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png?raw=true", t1: 'My first UX Design case study- This got me my first job', t2: 'Saptarshi Prakash' , t3: '4.8Kviews . 1 years ago' , img_url2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true"
        },
        { id: 4 , img_url1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-11.png?raw=true", t1: 'My Mix', t2: 'Coke Studio Banglla' , t3: '1.5Mviews  2 days ago'
        },
        { id: 5, img_url1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-4.png?raw=true", t1: 'UX Design-What is it?(From AJ &Smart)', t2: 'AJ&Smar' , t3: '150Kviews . 3 years ago' , img_url2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true"
        },
        { id: 6, img_url1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-5.png?raw=true", t1: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', t2: 'Coke Studio Banglla' , t3: '1.5Mviews  2 days ago' , img_url2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true"
        },
        { id: 7, img_url1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-6.png?raw=true", t1: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', t2: 'Coke Studio Banglla' , t3: '1.5Mviews  2 days ago' , img_url2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true"
        },
        { id: 8, img_url1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-7.png?raw=true", t1: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', t2: 'Coke Studio Banglla' , t3: '1.5Mviews  2 days ago' , img_url2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true"
        },
        { id: 9, img_url1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail.png?raw=true", t1: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', t2: 'Coke Studio Banglla' , t3: '1.5Mviews  2 days ago' , img_url2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true"
        },
        { id: 10, img_url1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-1.png?raw=true", t1: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', t2: 'Coke Studio Banglla' , t3: '1.5Mviews  2 days ago' , img_url2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true"
        },
        { id: 11, img_url1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-2.png?raw=true   ", t1: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', t2: 'Coke Studio Banglla' , t3: '1.5Mviews  2 days ago' , img_url2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true"
        },
        { id: 12, img_url1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-3.png?raw=true", t1: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', t2: 'Coke Studio Banglla' , t3: '1.5Mviews  2 days ago' , img_url2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true"
        },
      ]

      res.json (data1) ;
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
