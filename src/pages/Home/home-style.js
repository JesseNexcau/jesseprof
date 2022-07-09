import styled, { keyframes } from 'styled-components';

import image_eu from "../../images/fotoeu.jpg";

// Animations

const uptitle = keyframes`
      from{
            top: -60%;
            left: 50%;
            transform: translate(-50%, -50%);
            transform: scale(1%);
      }
      to{
            top: 30%;
            left: 50%;
            transform: translate(-50%, -50%);
      }

`;


// Components

export const Navbar = styled.div`

      position: absolute;

      width: fit-content;
      max-width: 1000px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      top: 65%;
      left: 50%;
      transform: translate(-50%, -50%);     
      z-index: 2;

      .navlink{
            margin-bottom: 40px;
            
            a{
                  background-color: rgba(50,50,50);
                  border: 2px solid white;
                  padding: 14px;
                  
                  font-weight: bold;
                  color: white;

                  margin-inline: 10px;
                  
                  font-size: calc(14px + (24 - 18) * (50vw - 800px) / (800 - 400));
                  @media (max-width: 800px){
                        font-size: calc(16px + (24 - 18) * (80vw - 500px) / (800 - 400));
                  } 
            }
      }
      
`;

export const Copydiv = styled.div`

      width: 100vw;
      min-height: 72vh;
      background: linear-gradient(var(--purple), var(--blue));
      text-align: center;

      .copy-title{
            font-family: "DM Mono", monospace;
            background-color: rgba(0, 0, 0, 0.4);
            color: white;
            border: 2px solid white;

            position: absolute;
            top: 30%;
            left: 50%;
            transform: translate(-50%, -50%);

            z-index: 2;

            max-width: 1000px;
            width: fit-content;
            padding: 20px;
            font-weight: 700;
            text-align: center;

            overflow: hidden;
            
            animation: ${uptitle} 1s;

            .txt{
                  font-size: calc(60px + (24 - 16) * (100% - 200px) / (800 - 400));
            }

            .subtxt{
                  font-weight: 400;
                  font-size: calc(40px + (24 - 16) * (100% - 200px) / (800 - 400));
            }
      }
`;


export const AboutmeDiv = styled.div`
      width: 100vw;
      /* background: linear-gradient(var(--blue), var(--ltblue)); */
      background-color: rgb(30,30,30);
      padding-top: 50px;
      padding-bottom: 100px;

      .content{
            max-width: 1000px;
            margin-left: auto;
            margin-right: auto;

            .info{
                  max-width: 800px;
                  background-color: rgba(0, 0, 0, 0.4);

                  margin-inline: auto;
                  margin-top: 20px;
                  display: flex;
                  flex-direction: row;
                  
                  box-shadow: 2px 3px 15px 1px black;

                  .img{
                        min-width: 140px;
                        max-width: 200px;
                        width: 100vw;
                        min-height: 200px;
                        height: auto;

                        display: flex;
                        
                        background-image: url(${image_eu});
                        background-repeat: no-repeat;
                        background-attachment: local;
                        background-position: center;
                        background-size: cover;

                        .links{
                              background-color: rgba(0, 0, 0, 0.4);
                              display: flex;
                              flex-direction: row;
                              width: 100%;
                              margin-top: auto;

                              .link{
                                    margin-left: auto;
                                    margin-right: auto;
                                    padding: 10px;
                                    width: fit-content;
                                    text-align: center; 

                                    a{
                                          color: white;
                                          font-size: 30px;
                                    }
                                    a:hover{
                                          color: #15e0ff; 
                                    }
                              }
                        }
                  }

                  .txt{
                        font-family: "DM Mono", monospace;
                        color: white;
                        padding: 15px;
                        margin-left: auto;
                        margin-right: auto;
                        
                        font-size: calc(12px + (24 - 16) * (60vw - 300px) / (800 - 400));
                        @media (max-width: 800px){
                              font-size: calc(16px + (24 - 16) * (60vw - 200px) / (800 - 400));
                        }
                  }

            }

            .more{
                  max-width: 700px;
                  margin-left: auto;
                  margin-right: auto;
                  margin-top: 80px;

                  p{
                        background-color: rgba(0, 0, 0, 0.4);
                        
                        font-family: "DM Mono", monospace;
                        color: white;
                        
                        padding: 15px;
                        margin-bottom: 20px;
                        width: 100%;
                        
                        border-bottom: 3px solid var(--magenta);
                        box-shadow: 2px 3px 5px black;
                        
                        font-size: calc(18px + (24 - 16) * (100% ) / (800 - 400));
                        
                  }
            }

            .habilits{
                  
                  max-width: 800px;
      
                  display: flex;
                  flex-direction: row;
                  flex-wrap: wrap;

                  margin-top: 50px;
                  margin-left: auto;
                  margin-right: auto;

                  .hability{
                        color: white;
                        margin-inline: auto;
                        /* min-width: 300px; */
                        width: 40%;
                        max-width: 280px;

                        details{
                              background-color: rgba(0, 0, 0, 0.4);
                              padding-bottom: 6px;

                              .title{
                                    width: 100%;
                                    background-color: rgba(30, 30, 30);
                                    font-weight: 700;
                                    text-align: center;
                                    
                                    padding: 8px;

                                    font-size: 18px;
                                    @media (max-width: 800px){
                                                font-size: 20px;
                                          }
                              }
                              .title:hover{
                                    cursor: pointer;
                              }
                              .skills{
                                    li{
                                          font-size: 18px;
                                          @media (max-width: 800px){
                                                font-size: 20px;
                                          }
                                    }
                              }
                        }

                  }
            }


      }
`;

export const ProjectDiv = styled.div`
      
      background-color: rgb(30, 30, 30);
      width: 100vw;
      margin-top: auto;
      padding-top: 40px;
      padding-bottom: 40px;

      .list{
            padding-block: 30px;
            max-width: 1000px;
            margin-left: auto;
            margin-right: auto;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-evenly;
            .project{
                  width: 200px;
                  height: 200px;
                  margin: auto;
                  margin-bottom: 20px;
                  text-align: center;
                  margin-inline: auto;
                  
            }

      }

`;


export const ContactDiv = styled.div`
      width: 100vw;
      background: linear-gradient(var(--purple), var(--blue));

      padding-bottom: 40px;
      padding-top: 40px;

      .methods{
            width: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-evenly;
            
            .method{
                  color: var(--blue);
                  font-weight: bolder;

                  background-color: white;
                  padding: 10px;
                  margin-bottom: 8px;
                  a{
                        color: black;
                        font-weight: 500;
                        margin-inline: 6px; 
                  }
                  
            }
      }


`;



export const TitleName = styled.p`
      color: white;
      font-family: "DM Mono", monospace;
      font-size: 40px;
      font-weight: 600;
      text-transform: uppercase;

      width: fit-content;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 50px;
      
`;

export const Image = styled.div`
      width: 100%;
      height: 100%;

      border-radius: ${props => props.rounded ? "100%" : "0%"};
      background-image: url(${props => props.img});

      background-repeat: no-repeat;
      background-attachment: local;
      background-position: center;
      background-size: contain;
`;
