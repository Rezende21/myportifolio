import Image from "next/image";
import { SectionTitle } from "../sectionTitle/section-title";
import"./experience.scss"
import"./load-image.scss"

export function Experience() {
    return(
        <div className='experience'>
          <SectionTitle text={"Experiência"}/>
          <p>WS Work<br/>
            ajudei a dar manutenção, fazer novas funcinalidades em um app que já estava na PlayStore e trabalhei em um 
            projeto novo em Flutter.
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