import { Link } from 'react-router-dom';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownLong, faCoffee } from '@fortawesome/free-solid-svg-icons';




function Home() {
      return (
            <div className="page">
                  <Copy />
                  {/* <ContactDiv /> */}
                  <AboutMe />
                  <Projects />
                  <Socials />
            </div>

      );
}

function ContactDiv() {
      return (
            <div id="contact-div">
                  <button className="contact-btn">Contato</button>
            </div>
      );
}

function Socials() {
      return (
            <div className="social-div">
                  <p className="title-name">Redes Sociais</p>
                  <div className='socials'>
                        <div className='social'>
                              <a href='#' target='_blank'>
                                    {/* <p className='social-name'>Instagram</p> */}
                                    <div className='iframe-insta'>
                                          <iframe width="320" height="500" src='https://www.instagram.com/p/CdRphaMr23c/embed' frameBorder='0'></iframe>
                                    </div>

                              </a>
                        </div>

                  </div>
            </div>
      );
}

function AboutMe() {
      return (
            <div id="aboutme" className="aboutme-div">
                  <p className="title-name">Sobre Mim</p>
                  <p className="aboutme-txt s-txt">Brasileiro e Mineiro, sempre gostei de tecnologia e por isso me interessei no mundo da programação. Comecei a buscar conteúdo sobre programação em 2018, acabei me apaixonando pela área e hoje é minha principal profissão...</p>
                  <div className="aboutme-habilits">
                        <div className="aboutme-hability">
                              <p className="aboutme-h-title s-txt">Programação</p>
                              <ul className="s-txt">
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
                        <div className="aboutme-hability">
                              <p className="aboutme-h-title s-txt">Design</p>
                              <ul className="s-txt">
                                    <li> Photoshop </li>
                                    <li> After Effects </li>
                                    <li> Sony Vegas </li>
                              </ul>
                        </div>
                        <div className="aboutme-hability">
                              <p className="aboutme-h-title s-txt">Habilidades Interpessoais</p>
                              <ul className="s-txt">
                                    <li> Comunicação </li>
                                    <li> Inglês Iniciante - A2 </li>
                                    <li> Objetividade </li>
                                    <li> Raciocínio Rápido </li>
                              </ul>
                        </div>
                  </div>
            </div>
      );
}
function Copy() {
      return (
            <div className="copy-div">
                  <div className="copy-img"></div>
                  <div className="copy-title">
                        <p>Olá, sou o Jessé.</p>
                        <p className='copy-subtitle'> Sou um programador Full Stack e Designer...</p>
                  </div>
                  <a href='#aboutme' className='copy-btn'><FontAwesomeIcon icon={faArrowDownLong} /> Conhecer Mais <FontAwesomeIcon icon={faArrowDownLong} /></a>
            </div>

      );
}

function Projects() {
      return (
            <div className='projects-div'>
                  <p className="title-name">Conheça alguns Projetos</p>
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

export default Home;
