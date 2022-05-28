import './Rules.css';

function Rules() {
  return (
    <div className="rules-page">
      <RulesList />
    </div>

  );
}

const RulesList = () => {
  return (
    <section>
      <div className="text-div">
        <div className="page" id="page-1">
          <p className="text-title">Benefícios</p>
          <div className="text-parag">
            <p className="text-tag">Apoio</p>
            <ul className="text-list">
              <li>
                <p className="text">
                  Divulgação e Apoio em nossos Canais, Grupos, Insta, Youtube Highlights.
                </p>
              </li>
              <li>
                <p className="text">
                  Recompensas, Torneios e Eventos exlusivos para nossos parceiros.
                </p>
              </li>
            </ul>
          </div>
        </div>


        <div className="page" id="page-2">
          <p className="text-title">Regras</p>
          <div className="text-parag">
            <p className="text-tag">Participação</p>
            <ul className="text-list">
              <li>
                <p className="text">
                  Ser ativo, constante e buscar um engajamento e qualidade em sua proposta.
                </p>
              </li>
              <li>
                <p className="text">
                  Participar das nossas Mídias(Instagram, Grupos no Whatsapp, Discord, Canal de Lives e Canais do Youtube).
                </p>
              </li>
              <li>
                <p className="text">
                  Cooperar em nossas petições e Eventos que realizarmos.
                </p>
              </li>
            </ul>
          </div>
          <div className="text-parag">
            <p className="text-tag">Divulgação</p>
            <ul className="text-list">
              <li>
                <p className="text">
                  Divulgue o projeto em suas Mídias, Contatos, Grupos e Amigos sempre que possível.
                </p>
              </li>
            </ul>
          </div>
          <div className="text-parag">
            <p className="text-tag">Respeito</p>
            <ul className="text-list">
              <li>
                <p className="text">
                  Não seja tóxico ou Trash Talker, respeite a todos igualmente.
                </p>
              </li>
            </ul>
          </div>
        </div>


      </div>
    </section>
  );
}



export default Rules;
