import { Experience } from './components/experience/experience'
import { Header } from './components/herder/header'
import { EmailIcons } from './components/icons/email-icon'
import { Info } from './components/information/information'
import { LoadImage } from './components/loadImage/load-image'
import { SocialBtns } from './components/social-btns/social-btns'
import"./styles/home.scss"

export default function Home() {
  return (
    <main>
      <div className="person">
        <Header/>
        <Experience/>
        <div className="buttons">
          <SocialBtns/>
          <a className='btn-primary' href='mailto:gabrielrezende736@gmail.com'>
            Contact me
            <EmailIcons/>
          </a>
        </div>
      </div>
      <div className='projeto1'>
        <Info 
        title={"Greengrocer"} 
        description={"Aplicativo de verduras e frutas online desenvolvido durante o curso na Udemy"} 
        tecnologia={"Getx, dio, badges, animation, binding "} 
        dependencia={"Getx"} 
        language={"Flutter"}/>
        <LoadImage image1={'/app/grenn_tela1.png'} image2={'/app/grenn_tela2.png'} image3={'/app/grenn_tela3.png'} image4={'/app/grenn_tela4.png'}/>
      </div>
      <div className='projeto2'>
        <Info 
          title={"Mavel App"} 
          description={"Mostra todos personagens da Marvel, possibilitando a pesquisa por algum personagem e ver os quardrinhos "} 
          tecnologia={"Retrofit, Coroutines, Room, LiveData, RecycleView"} 
          dependencia={"Dagger-Hilt"} 
          language={"Kotlin"}/>
        <LoadImage image1={'/app/marvel_tela1.png'} image2={'/app/marvel_tela2.png'} image3={'/app/marvel_tela3.png'} image4={'/app/marvel_tela2.png'}/>
      </div>
      <div className='projeto3'>
        <Info 
          title={"To_Do_list"} 
          description={"Aplicativo de atividades feito durante o boot campDioInovation"} 
          tecnologia={"Coroutines, Room, LiveData, RecycleView"} 
          dependencia={"koin"} 
          language={"Kotlin"}/>
        <LoadImage image1={'/app/to_do_tela1.png'} image2={'/app/to_do_tela2.png'} image3={'/app/to_do_tela1.png'} image4={'/app/to_do_tela2.png'}/>
      </div>
  
    </main>
  )
}
