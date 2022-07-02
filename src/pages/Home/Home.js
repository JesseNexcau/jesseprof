import { Link } from 'react-router-dom';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
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


function Copy() {
      return (
            <div className="copy-div">
                  <div className="copy-img"></div>
                  <div className="copy-title">
                        <p className='copy-titletxt'>Olá, sou o Jessé,</p>
                        <p className='copy-subtitle'> Sou um <b>Desenvolvedor Web</b>...</p>
                  </div>
                  <a href='#aboutme' className='copy-btn'><FontAwesomeIcon icon={faArrowDownLong} /> Conhecer Mais <FontAwesomeIcon icon={faArrowDownLong} /></a>
            </div>

      );
}

function AboutMe() {




      return (
            <div id="aboutme" className="aboutme-div">
                  <div className='aboutme-content'>
                        <p className="title-name">Sobre Mim</p>
                        <div className='abtme-i'>
                              <div className='abtme-i-img'>
                                    <div className='btns-linksme'>
                                          <div className='btn-linkme'>
                                                <a href='#'>
                                                      <FontAwesomeIcon icon={faGithub} />
                                                </a>
                                          </div>
                                          <div className='btn-linkme'>
                                                <a href='#'>
                                                      <FontAwesomeIcon icon={faLinkedin} />
                                                </a>
                                          </div>
                                          <div className='btn-linkme'>
                                                <a href='#'>
                                                      <FontAwesomeIcon icon={faYoutube} />
                                                </a>
                                          </div>
                                    </div>
                              </div>
                              <p className="abtme-txt s-txt">Brasileiro e Mineiro, sempre gostei de tecnologia e por isso me interessei no mundo da programação. Comecei a buscar conteúdo sobre programação em 2018, acabei me apaixonando pela área e hoje é minha principal profissão...</p>
                        </div>

                        <div className='abtme-2'>
                              <p className="abtme-txt2 left s-txt">Tenho experiência na criação de sites como Landding Pages e outros tipos de front-end utilizando React.js, html, css e Javascript puro também.</p>
                              <p className='abtme-txt2 right s-txt'>Tenho experiência na construção de pequenos servidores e conheço muito bem a implementação de banco de dados. Eu costumo fazer o backend em Node.js, mas já me aventurei em PHP por um curto período de tempo.</p>
                              <p className='abtme-txt2 left s-txt'>Estou sempre aberto a novos aprendizados, amo o mundo da programação e quero prestar o meu melhor.</p>
                        </div>

                        <div className="aboutme-habilits">
                              <div className="aboutme-hability" >
                                    <details>
                                          <summary className="aboutme-h-title s-txt"><p>Programação</p></summary>
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
                              <div className="aboutme-hability" >
                                    <details>
                                          <summary className="aboutme-h-title s-txt"><p>Habilidades Interpessoais</p></summary>
                                          <div className="abt-skills s-txt">
                                                <ul>
                                                      <li> Comunicação </li>
                                                      <li> Inglês Iniciante - A2 </li>
                                                      <li> Objetividade </li>
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
