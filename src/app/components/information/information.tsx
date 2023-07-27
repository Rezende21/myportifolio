import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

interface InfoProps {
  title: String
  description : String
  tecnologia : String
  dependencia : String
  language : String
}

export function Info({title, description, tecnologia, dependencia, language} : InfoProps) {
    return(
        <div className='Project'>
        <SectionTitle text={title}/>
        <div className='project-info'>
          <p>{description}</p>
          <h3>Tecnologias:</h3><p>{tecnologia}</p>
          <h3>Injeção de dependência:</h3><p>{dependencia}</p>
          <h3>Linguagem usada:</h3><p>{language}</p>
        </div>
      </div>
    )
}