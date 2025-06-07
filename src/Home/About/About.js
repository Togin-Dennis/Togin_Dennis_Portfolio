import React,{useEffect,useState} from 'react'
import './About.css'
import coluredprofilepic from '../../Assets/coluredprofilepic.jpg'
import { getDocs ,collection} from 'firebase/firestore';
import { db } from '../../firebase/firebase';
function About() {

const [AboumeParagraph, setAboumeParagraph] = useState([]);

 useEffect(() => {
    const fetchSkills = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Aboutme"));
        const paragraphstore = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setAboumeParagraph(paragraphstore);
      
        
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };

    fetchSkills();
  }, []);




  return (
    <div className='AboutMaindiv'>
       <h2 className="About-title">About Me</h2>  
        <p className="About-subtitle">A little more about who I am and what I do.</p>
<div className='centering'>
<div className='aboutimageandtext'>
   <img className='coloredImage' src={coluredprofilepic} alt="" />

{
    AboumeParagraph.map(
        (data)=>{
return <p key={data.id} className='abouttext'>{data.About_Text}</p>
        }
    )
}
   
 
</div>
  </div>


    </div>
  )
}

export default About
