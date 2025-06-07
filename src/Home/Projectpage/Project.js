import React, { useEffect, useState } from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import './Project.css'
function Project() {


    const [Projectdetails, setProjectdetails] = useState([]);

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "Projects"));
                const Projectstore = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setProjectdetails(Projectstore);
                console.log(Projectstore);

            } catch (error) {
                console.error("Error fetching skills:", error);
            }
        };

        fetchSkills();
    }, []);

    return (
        <div className='Projectmaindiv'>
            <h2 className="Project-title">Projects</h2>
            <p className="Project-subtitle">Explore the projects that define my journey as a developer.</p>

            <div className='Boxwrap'>
                {
                    Projectdetails.map(

                        (data) => {
                            return <div className='projectboxwrapper'>
                                <div className='projectbox'>

                                    <img className='projectimage' src={data.Imageurl} alt="" />

                                    <h2 className='Projecttitle'>{data.Name}</h2>
                                    <p className='Projectdescription'>{data.details}</p>
                                    <div className='languageusedwrapper'>

                                        {data.language.map(
                                            (languagedata) => { return <p className='languageused'>{languagedata}</p> }
                                        )


                                        }


                                    </div>
                                    <div className='Buttonwrapper'>
                                        <div className='buttonicon'>

                                            <button className='Projectbuttonview'> <FaExternalLinkAlt style={{ marginRight: '8px' }} />View Project</button></div>
                                        <div className='buttonicon'>
                                            <button className='Projectbuttoncode'>  <FaGithub style={{ marginRight: '8px' }} />Source Code</button>
                                        </div>
                                    </div>
                                </div>
                            </div>







                        }

                    )
                }

            </div>
        </div>
    )
}

export default Project
