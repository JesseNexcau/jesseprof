import './Home.css';

function Home(){
  return (
      <div className="home-page">
        <About />
      </div>

  );
}


const About = () =>{
      return(
            <div className="about-div">
                  <p className="text-tag">Conheça o Projeto Forja</p>
                  <p className="text">Auxiliar a Comunidade na Evolução como Pessoa, Jogador e Profissional.</p>
                  <p className="text">Trazendo Oportunidades Através da Nossa Comunidade, Conteúdos, Equipe e Eventos</p>
            </div>
      );
}


export default Home;
