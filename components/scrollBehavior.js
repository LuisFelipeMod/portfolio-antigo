import styles from './curriculum.module.css'

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
        <li><button onClick={scrollToAbout}><span>🡲</span> Sobre</button></li>
        <li><button onClick={scrollToProfissional}><span>🡲</span> Profissional</button></li>
        <li><button onClick={scrollToEducation}><span>🡲</span> Formação</button></li>
        <li><button onClick={scrollToLanguage}><span>🡲</span> Idioma</button></li>
        <li><button onClick={scrollToKnowledge}><span>🡲</span> Conhecimentos</button></li>
        <li><button onClick={scrollToSchoolExperience}><span>🡲</span> Vivência Escolar</button></li>
        <li><button onClick={scrollToVolunteer}><span>🡲</span> Trabalhos Voluntários</button></li>
        <li><button onClick={scrollToSpeeches}><span>🡲</span> Experiência Profissional</button></li>
     </ul>
    )
  }