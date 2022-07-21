import { Link } from 'react-router-dom';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub, faInstagramSquare, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faArrowDownLong, faCoffee, faCopy, faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons';


import { AboutmeDiv, Copydiv, Navbar, ProjectDiv, TitleName, Image, ContactDiv } from './home-style';


import img_nexcauvirtuoso from "../../images/nexcauvirtuoso.jpg";
import img_forja from "../../images/logotipo_forja.png";



function Copy() {
      return (
            <Copydiv>
                  <div className="copy-title">
                        <p className='txt'>Olá, sou o Jessé.</p>
                        <p className='subtxt'> Sou um <b>Desenvolvedor Web</b>...</p>
                  </div>
                  <Navbar>
                        <div className='navlink'>
                              <a href='#contateme'>CONTATE-ME</a>
                        </div>
                        <div className='navlink'>
                              <a href='#aboutme'>SOBRE MIM</a>
                        </div>
                        <div className='navlink'>
                              <a href='#projects'>PROJETOS</a>
                        </div>
                  </Navbar>
            </Copydiv>

      );
}

function AboutMe() {
      return (
            <AboutmeDiv id="aboutme">
                  <div className='content'>
                        <TitleName>Sobre Mim</TitleName>
                        <div className='info'>
                              <div className='img'>
                                    <div className='links'>
                                          <div className='link'>
                                                <a target="_blank" rel="noopener" href='https://github.com/JesseNexcau'>
                                                      <FontAwesomeIcon icon={faGithub} />
                                                </a>
                                          </div>
                                          <div className='link'>
                                                <a target="_blank" rel="noopener" href='https://www.linkedin.com/in/ojessegomes/'>
                                                      <FontAwesomeIcon icon={faLinkedin} />
                                                </a>
                                          </div>
                                          <div className='link'>
                                                <a target="_blank" href='https://youtube.com/nexcauvirtuoso'>
                                                      <FontAwesomeIcon icon={faYoutube} />
                                                </a>
                                          </div>
                                    </div>
                              </div>
                              <p className="txt">Brasileiro e Mineiro, sempre gostei de tecnologia e por isso me interessei no mundo da programação. Comecei a buscar conteúdo sobre programação em 2018, acabei me apaixonando pela área e hoje é minha principal profissão e hobby...</p>
                        </div>

                        <div className='more'>
                              <p>Tenho experiência na criação de sites como Landing Pages e outros tipos de front-end utilizando React.js, html, css e Javascript puro também.</p>
                              <p>Tenho experiência na construção de pequenos servidores e conheço muito bem a implementação de banco de dados. Eu costumo fazer o back-end em Node.js, mas já me aventurei em PHP por um curto período de tempo.</p>
                              <p>Estou sempre aberto a novos aprendizados, amo o mundo da programação e quero prestar o meu melhor.</p>
                        </div>

                        <div className="habilits">
                              <div className="hability" >
                                    <details>
                                          <summary className="title"><p>Programação</p></summary>
                                          <div className="skills">
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
                              <div className="hability" >
                                    <details>
                                          <summary className="title"><p>Habilidades Interpessoais</p></summary>
                                          <div className="skills">
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
            </AboutmeDiv>
      );
}


function Projects() {
      return (
            <ProjectDiv id='projects'>
                  <TitleName>Projetos</TitleName>
                  <div className='list'>
                        <a href='https://forja.site' target='_blank' rel='noreferrer'>
                              <div className="project">
                                    <Image img={img_forja}></Image>
                                    
                              </div>
                        </a>
                        <a href='https://youtube.com/nexcauvirtuoso' target='_blank' rel='noreferrer'>
                              <div className="project">
                                    <Image img={img_nexcauvirtuoso} rounded></Image>
                                    
                              </div>
                        </a>

                  </div>
            </ProjectDiv>

      );
}


function Contateme() {

      const copy = str => {
            if (navigator && navigator.clipboard && navigator.clipboard.writeText)
                  return navigator.clipboard.writeText(str);
            return Promise.reject('F');
      };

      return (
            <ContactDiv id='contateme'>
                  <TitleName>Contate-me</TitleName>
                  <div className='methods'>
                        <p className='method'><FontAwesomeIcon icon={faEnvelopeCircleCheck} /> E-mail: <a target="_blank" rel="noopener" href='mailto: nexcausuport@hotmail.com'>nexcausuport@hotmail.com</a> <FontAwesomeIcon
                              onClick={(e) => {
                                    e.preventDefault();
                                    copy('nexcausuport@hotmail.com')
                              }} icon={faCopy} /></p>
                        <p className='method'><FontAwesomeIcon icon={faInstagramSquare} /> Instagram: <a target="_blank" rel="noopener" href='https://www.instagram.com/jesse.gomesnx/'>@jesse.gomesnx</a> <FontAwesomeIcon
                              onClick={(e) => {
                                    e.preventDefault();
                                    copy('@jesse.gomesnx')
                              }} icon={faCopy} /></p>
                  </div>
            </ContactDiv>
      );
}


function Home() {

      return (
            <div className="page">
                  <Copy />
                  <AboutMe />
                  <Projects />
                  <Contateme />
            </div>

      );
}


export default Home;

