import styles from './curriculum.module.css';
import { motion } from "framer-motion";

export default function ScrollBehavior() {
    const scrollToAbout = () => {
      const about = document.querySelector("#about");
      const projects = document.querySelector("#projects");
  
      if (about) {
        about.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    const scrollToProfissional = () => {
      const profissional = document.querySelector("#profissional");

      if (profissional){
        profissional.scrollIntoView({ behavior: 'smooth', block: 'start'})
      }
    }
    const scrollToEducation = () => {
      const education = document.querySelector("#education");

      if (education){
        education.scrollIntoView({ behavior: 'smooth', block: 'start'})
      }
    }
    const scrollToLanguage = () => {
      const language = document.querySelector("#language");

      if (language){
        language.scrollIntoView({ behavior: 'smooth', block: 'start'})
      }
    }
    const scrollToKnowledge = () => {
      const knowledge = document.querySelector("#language");

      if (knowledge){
        knowledge.scrollIntoView({ behavior: 'smooth', block: 'start'})
      }
    }
    const scrollToSchoolExperience = () => {
      const school = document.querySelector("#school");

      if (school){
        school.scrollIntoView({ behavior: 'smooth', block: 'start'})
      }
    }
    const scrollToVolunteer  = () => {
      const volunteer = document.querySelector("#volunteer");

      if (volunteer){
        volunteer.scrollIntoView({ behavior: 'smooth', block: 'start'})
      }
    }
    const scrollToSpeeches  = () => {
      const speeches = document.querySelector("#speeches");

      if (speeches){
        speeches.scrollIntoView({ behavior: 'smooth', block: 'start'})
      }
    }
    const scrollToReference  = () => {
      const reference = document.querySelector("#reference");

      if (reference){
        reference.scrollIntoView({ behavior: 'smooth', block: 'start'})
      }
    }
    
  
  
    return(
     <ul className={styles.nav_list}>
        <motion.li
          initial = {{
            transform: "scale3d(1, 0, 1)",
            opacity: 0
          }}
          animate = {{
              transform: "scale3d(1, 1, 1)",
              opacity: 1
          }}
          transition ={{
              ease: "linear",
              delay: 0.9,
              duration: 0.2,
          }}  
        >
          <button onClick={scrollToAbout}><span>🡲</span> Sobre</button>
        </motion.li>

        <motion.li
          initial = {{
            transform: "scale3d(1, 0, 1)",
            opacity: 0
          }}
          animate = {{
              transform: "scale3d(1, 1, 1)",
              opacity: 1
          }}
          transition ={{
              ease: "linear",
              delay: 1,
              duration: 0.2,
          }}  
          >
            <button onClick={scrollToProfissional}><span>🡲</span> Profissional</button>
          </motion.li>

        <motion.li
          initial = {{
            transform: "scale3d(1, 0, 1)",
            opacity: 0
          }}
          animate = {{
              transform: "scale3d(1, 1, 1)",
              opacity: 1
          }}
          transition ={{
              ease: "linear",
              delay: 1.1,
              duration: 0.2,
          }}  
        >
          <button onClick={scrollToEducation}><span>🡲</span> Formação</button>
        </motion.li>

        <motion.li
          initial = {{
            transform: "scale3d(1, 0, 1)",
            opacity: 0
          }}
          animate = {{
              transform: "scale3d(1, 1, 1)",
              opacity: 1
          }}
          transition ={{
              ease: "linear",
              delay: 1.2,
              duration: 0.2,
          }}  
          >
            <button onClick={scrollToLanguage}><span>🡲</span> Idioma</button>
        </motion.li>
        <motion.li
          initial = {{
            transform: "scale3d(1, 0, 1)",
            opacity: 0
          }}
          animate = {{
              transform: "scale3d(1, 1, 1)",
              opacity: 1
          }}
          transition ={{
              ease: "linear",
              delay: 1.3,
              duration: 0.2,
          }}  
        >
          <button onClick={scrollToKnowledge}><span>🡲</span> Conhecimentos</button>
        </motion.li>

        <motion.li
          initial = {{
            transform: "scale3d(1, 0, 1)",
            opacity: 0
        }}
        animate = {{
            transform: "scale3d(1, 1, 1)",
            opacity: 1
        }}
        transition ={{
            ease: "linear",
            delay: 1.4,
            duration: 0.2,
        }}  
        >
          <button onClick={scrollToSchoolExperience}><span>🡲</span> Vivência Escolar</button>
        </motion.li>

        <motion.li
          initial = {{
            transform: "scale3d(1, 0, 1)",
            opacity: 0
          }}
          animate = {{
              transform: "scale3d(1, 1, 1)",
              opacity: 1
          }}
          transition ={{
              ease: "linear",
              delay: 1.5,
              duration: 0.2,
          }}  
        >
          <button onClick={scrollToVolunteer}><span>🡲</span> Trabalhos Voluntários</button>
        </motion.li>

        <motion.li
          initial = {{
            transform: "scale3d(1, 0, 1)",
            opacity: 0
          }}
          animate = {{
              transform: "scale3d(1, 1, 1)",
              opacity: 1
          }}
          transition ={{
            ease: "linear",
            delay: 1.6,
            duration: 0.2,
          }}  
        >
          <button onClick={scrollToSpeeches}><span>🡲</span> Experiência Profissional</button>
        </motion.li>
     </ul>
    )
  }