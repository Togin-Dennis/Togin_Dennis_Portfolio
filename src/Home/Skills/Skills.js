import React ,{useEffect,useState,}from 'react';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import { getDocs ,collection} from 'firebase/firestore';
import { SiFirebase, SiFlutter, SiMysql } from 'react-icons/si';
import { db } from '../../firebase/firebase';

import './Skills.css'; // ← Don't forget this line


const iconMap = {
  ...FaIcons,
  ...SiIcons
};

function SkillsSection() {
const [Skillsdata, setSkillsdata] = useState([]);

 useEffect(() => {
    const fetchSkills = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Skills"));
        const skillsstore = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setSkillsdata(skillsstore);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };

    fetchSkills();
  }, []);

  

    
  return (
    <div className='skillssection'>
    <h2 className="skills-title">My Skills</h2>  
    <p className="skills-subtitle">Technologies I've worked with</p>


    <div className='skillgrid' >
   {
    Skillsdata.map(

(data,index)=> 
{
    const IconComponent = iconMap[data.icon];
  return <div className="skill-card" key={index} >
     
            <IconComponent className="icon" color={data.color || '#fff'} />
            <p>{data.skillname}</p>
          </div>
}


    )
   }
</div>

    </div>
  );
}
export default SkillsSection;  