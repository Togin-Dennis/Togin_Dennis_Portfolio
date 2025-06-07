import React, { useEffect, useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import './Project.css';

function Project() {
  const [Projectdetails, setProjectdetails] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Projects'));
        const Projectstore = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProjectdetails(Projectstore);
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    };

    fetchSkills();
  }, []);

  return (
    <div className="Projectmaindiv">
      <h2 className="Project-title">Projects</h2>
      <p className="Project-subtitle">Explore the projects that define my journey as a developer.</p>

      <div className="Boxwrap">
        {Projectdetails.map(data => (
          <div key={data.id} className="projectboxwrapper">
            <div className="projectbox">
              <img className="projectimage" src={data.Imageurl} alt="project preview" />
              <h2 className="Projecttitle">{data.Name}</h2>
              <p className="Projectdescription">{data.details}</p>

              <div className="languageusedwrapper">
                {data.language.map((languagedata, index) => (
                  <p key={index} className="languageused">
                    {languagedata}
                  </p>
                ))}
              </div>

              <div className="Buttonwrapper">
                <div className="buttonicon">
                  <a href={data.viewlink} target="_blank" rel="noopener noreferrer">
                    <button className="Projectbuttonview">
                      <FaExternalLinkAlt style={{ marginRight: '8px' }} /> View Project
                    </button>
                  </a>
                </div>
                <div className="buttonicon">
                  <a href={data.codelink} target="_blank" rel="noopener noreferrer">
                    <button className="Projectbuttoncode">
                      <FaGithub style={{ marginRight: '8px' }} /> Source Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
