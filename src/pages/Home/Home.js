import { Link } from 'react-router-dom';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub, faInstagramSquare, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faArrowDownLong, faCoffee, faCopy, faEnvelopeCircleCheck} from '@fortawesome/free-solid-svg-icons';

import $ from 'jquery';








function Navbar(){
      return(
            <div className='navbar'>
                  <div className='navlink'>
                        <a href='#contateme'>CONTATE-ME</a>
                  </div>
                  <div className='navlink'>
                        <a href='#aboutme'>SOBRE MIM</a>
                  </div>
                  <div className='navlink'>
                        <a href='#projects'>PROJETOS</a>
                  </div>
            </div>
      );
}

function Copy() {
      return (
            <div className="copy-div">
                  <div className="copy-img"></div>
                  <div className="copy-title">
                        <p className='copy-titletxt'>Olá, sou o Jessé.</p>
                        <p className='copy-subtitle'> Sou um <b>Desenvolvedor Web</b>...</p>
                  </div>
                  <Navbar />
                  {/* <a href='#aboutme' className='copy-btn'><FontAwesomeIcon icon={faArrowDownLong} /> Conhecer Mais <FontAwesomeIcon icon={faArrowDownLong} /></a> */}
            </div>

      );
}

function AboutMe() {

      

      return (
            <div id="aboutme" className="myanimate abtme-div">
                  <div className='abtme-content'>
                        {/* Título da repartição */}
                        <p className="title-name">Sobre Mim</p>  
                        {/* Informação principal sobre mim */}
                        <div className='abtme-i'>
                              <div className='abtme-i-img'>
                                    <div className='btns-linksme'>
                                          <div className='btn-linkme'>
                                                <a target="_blank" rel="noopener" href='https://github.com/JesseNexcau'>
                                                      <FontAwesomeIcon icon={faGithub} />
                                                </a>
                                          </div>
                                          <div className='btn-linkme'>
                                                <a target="_blank" rel="noopener" href='https://www.linkedin.com/in/ojessegomes/'>
                                                      <FontAwesomeIcon icon={faLinkedin} />
                                                </a>
                                          </div>
                                          <div className='btn-linkme'>
                                                <a target="_blank"  href='https://youtube.com/nexcauvirtuoso'>
                                                      <FontAwesomeIcon icon={faYoutube} />
                                                </a>
                                          </div>
                                    </div>
                              </div>
                              <p className="abtme-txt s-txt">Brasileiro e Mineiro, sempre gostei de tecnologia e por isso me interessei no mundo da programação. Comecei a buscar conteúdo sobre programação em 2018, acabei me apaixonando pela área e hoje é minha principal profissão e hobby...</p>
                        </div>

                        {/* Informação adicional sobre mim */}
                        <div className='abtme-more'>
                              <p className="s-txt">Tenho experiência na criação de sites como Landding Pages e outros tipos de front-end utilizando React.js, html, css e Javascript puro também.</p>
                              <p className='s-txt'>Tenho experiência na construção de pequenos servidores e conheço muito bem a implementação de banco de dados. Eu costumo fazer o backend em Node.js, mas já me aventurei em PHP por um curto período de tempo.</p>
                              <p className='s-txt'>Estou sempre aberto a novos aprendizados, amo o mundo da programação e quero prestar o meu melhor.</p>
                        </div>

                        <div className="abtme-habilits">
                              <div className="abtme-hability" >
                                    <details>
                                          <summary className="abtme-h-title s-txt"><p>Programação</p></summary>
                                          <div className="abt-skills s-txt">
                                                <ul>
                                                      <li> JavaScript </li>
                                                      <li> HTML e CSS </li>
                                                      <li> React.js </li>
                                                      <li> Bootstrap </li>
                                                      <li> Jquery </li>
                                                      <li> Node.js </li>
                                                      <li> Banco de Dados MySQL</li>
                                                      <li> Google Firebase </li>
                                                </ul>
                                          </div>
                                    </details>
                              </div>
                              <div className="abtme-hability" >
                                    <details>
                                          <summary className="abtme-h-title s-txt"><p>Habilidades Interpessoais</p></summary>
                                          <div className="abt-skills s-txt">
                                                <ul>
                                                      <li> Comunicação </li>
                                                      <li> Inglês Iniciante - A2 </li>
                                                      <li> Trabalho em Equipe </li>
                                                      <li> Ética </li>                                                      
                                                      <li> Objetividade </li>
                                                      <li> Organização </li>
                                                      <li> Raciocínio Rápido </li>
                                                </ul>
                                          </div>
                                    </details>
                              </div>
                        </div>
                  </div>
            </div>
      );
}


function Projects() {
      return (
            <div id='projects' className='myanimate projects-div'>
                  <p className="title-name">Projetos</p>
                  <div className='projects-list'>
                        <a href='https://forja.site' target='_blank' rel='noreferrer'>
                              <div className="project-div">
                                    <div className='project-img img-forja'></div>
                                    {/* <div className='project-name'>Site Forja</div> */}
                              </div>
                        </a>
                        <a href='https://youtube.com/nexcauvirtuoso' target='_blank' rel='noreferrer'>
                              <div className="project-div">
                                    <div className='project-img img-nexcauvirtuoso'></div>
                                    {/* <div className='project-name'>Site Forja</div> */}
                              </div>
                        </a>
                        
                  </div>
            </div>

      );
}


function Contateme(){

      const copy = str => {
            if (navigator && navigator.clipboard && navigator.clipboard.writeText)
              return navigator.clipboard.writeText(str);
            return Promise.reject('F');
          };

      return(
            <div id='contateme' className='myanimate contateme-div'>
                  <p className='title-name'>Contate-me</p>
                  <div className='contateme-methods'>
                        <p className='contateme-method'><FontAwesomeIcon icon={faEnvelopeCircleCheck} /> E-mail: <a target="_blank" rel="noopener" href='mailto: nexcausuport@hotmail.com'>nexcausuport@hotmail.com</a> <FontAwesomeIcon
                        className='btn' 
                        onClick={(e)=>{
                              e.preventDefault();
                              copy('nexcausuport@hotmail.com')
                        }} icon={faCopy} /></p>
                        <p className='contateme-method'><FontAwesomeIcon icon={faInstagramSquare} /> Instagram: <a target="_blank" rel="noopener" href='https://www.instagram.com/jesse.gomesnx/'>@jesse.gomesnx</a> <FontAwesomeIcon
                        className='btn' 
                        onClick={(e)=>{
                              e.preventDefault();
                              copy('@jesse.gomesnx')
                        }} icon={faCopy} /></p>
                  </div>
            </div>
      );
}


function Home() {
      
      return (
            <div className="page">
                  <Copy />
                  {/* <ContactDiv /> */}
                  <AboutMe />
                  <Projects />
                  <Contateme />
            </div>

      );
}


export default Home;

