import Image from "next/image";
import { SectionTitle } from "../sectionTitle/section-title";
import"./experience.scss"
import"./load-image.scss"

export function Experience() {
    return(
        <div className='experience'>
          <SectionTitle text={"Experiencia"}/>
          <p>WS Work
            Ajudei a dar manutenção em um app ja exitente em java fazer novas funcinalidades e trabalhei em um 
            projeto novo em flutter
          </p>
          <div className='experience-time'>
            <a>
            <Image
                src="/java.png"
                alt="Java Logo"
                width={40}
                height={40}
                priority/>
            </a>
            <a>
            <Image
                src="/kotlin.png"
                alt="Kotlin Logo"
                width={40}
                height={40}
                priority/>
            </a>
            <a>
            <Image
                src="/dart.png"
                alt="dart Logo"
                width={40}
                height={40}
                priority/>
            </a>
            <a>
            <Image
                src="/flutter.png"
                alt="Flutter Logo"
                width={40}
                height={40}
                priority/>
            </a>        
          </div>
        </div>
    )
}