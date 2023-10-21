import DeveloperIcon from '../img/Developer.svg'
import './main.scss'

function Main() {
    return (
      <div className='main' id='main'>
        <div className='main-left'>
            <h1 class='heading'>Hello ! 
                <span>👋🏻</span>
            </h1>
        <h1 class='heading-name'>Moi c'est 
            <strong class='main-name'> SOFIAN</strong>
        </h1>
        <h1 class='heading-dev'>Développeur Web FrontEnd</h1>
        </div>
        <div className='main-right'>
            <img src={DeveloperIcon} alt="Developer Icon" />
        </div>
      </div>
    );
  }
  
  export default Main;
  