
import './Experience.css';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import c from '../../assets/c.png';
import js from '../../assets/js.png';
import css from '../../assets/css.png';


export default function Experience(){

    const statements = [
        "1. Web Development Skills: Proficient in HTML, CSS, JavaScript, and React.js, with hands-on experience in creating dynamic and responsive real estate and stationary websites.",
        "2. Project Experience: Successfully developed and launched real estate and stationary websites, demonstrating ability to handle end-to-end development including design, implementation, and deployment.",
        "3. React.js Expertise: Skilled in React.js, utilized for building interactive user interfaces and optimizing website performance, enhancing user experience through modern frontend technologies.",
        "4. Java Proficiency: Knowledgeable in Java programming, used for backend development tasks such as server-side logic and database management, ensuring robust and scalable web applications.",
        "5. Problem Solving: Strong problem-solving skills and understanding of Data Structures and Algorithms, enabling efficient debugging, optimization, and implementation of new features in web projects."
    ];


    const iconImages = [js, c, css];

    return (
        <div className='experience_container'> 

            <p className='experience_title'>Experience</p>

            <div className='experience_cards_container'>

                <ExperienceCard
                    companyName = "ABC Pvt Ltd"
                    designation = 'SDE 2'
                    statements={statements}
                    iconImages={iconImages}
                
                />

                    <ExperienceCard
                    companyName = "XYZ Pvt Ltd"
                    designation = 'SDE 1'
                    statements={statements}
                    iconImages={iconImages}
                
                />
                   <ExperienceCard
                    companyName = "EFG Pvt Ltd"
                    designation = 'SDE 1'
                    statements={statements}
                    iconImages={iconImages}
                
                />
            </div>
        </div>
    )
}