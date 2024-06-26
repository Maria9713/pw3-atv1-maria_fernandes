import React from 'react';
import './App.css';
import Capa from './livros/mesopotamia.jpg'
import Estrela from './livros/estrela.png'
import ChatIcon from './livros/chat.png'
import Barrinha from './livros/barrinha.png'
import Cerca from './livros/cerca.png'
import Predio from './livros/predio.png'
import Calendario from './livros/calendario.png'

const amazonShopee = () => {
  return (
    <div className="page-container">
      <div className="livro-container">
        <div className="capa">
          <img src={Capa} alt="Capa do livro" />
        </div>
        <div className="titulo">
          <h1>Babilônia: A mesopotâmia e o nascimento da civilização</h1>
          <div>
            <h2>Capa comum – 1 fevereiro 2018</h2>
          </div>
          <div>
            <p>Edição Português  por Paul Kriwaczek (Autor), Vera Ribeiro (Tradutor), Marlene Suano</p>
          </div>
          <div>
            <span>4,6 </span> 
            <img className='estrelas' src={Estrela}></img>
            <span> 774 avaliações de clientes</span> 
          </div>
          <p className="descricao">
          Em Babilônia, Paul Kriwaczek conta a história da antiga Mesopotâmia, desde as primeiras povoações, em torno de 5400 a.C., até a chegada dos persas no século VI a.C. O autor faz a crônica da ascensão e queda do reino babilônico durante esse período e analisa suas numerosas inovações materiais, sociais e culturais. O povo da Mesopotâmia lançou as bases do que hoje conhecemos como civilização – com o nascimento da escrita, do estado centralizado, da divisão do trabalho, da religião organizada, da matemática e da lei, entre muitas outras coisas fundamentais que nos servem até hoje. Nas cidades que construíram se desenrolou metade da história humana. No cerne da magistral narrativa de Kriwaczek está a glória da Babilônia ― “o portal dos deuses” ―, que teve seu apogeu no reinado do soberano amorita Hamurábi, que unificou a cidade entre 1800 e 1750 a.C. Embora o poder babilônico viesse a crescer e depois declinar nos séculos seguintes, a Babilônia preservou sua importância como centro cultural, religioso e político por mais de 4 mil anos.
            
          </p>
          <div>
            <img src={ChatIcon}></img> 
            <span>Relatar um problema com este produto</span>
          </div>
          <div className="infos">
            <span>_______________________________________________________________________________________________</span>
              <span>ISBN-10: </span>
            <img src={Barrinha}></img>
            <span>8537817198</span>
            <span>ISBN-13:</span>
            <img src={Barrinha}></img>
            <span>978-8537817193</span>
            <span>Edição:</span>
            <img src={Cerca}></img>
            <span>1ª</span>
            <span>Editora: </span>
            <img src={Predio}></img>
            <span>Zahar</span>
            <span>Data da publicação:</span>
            <img src={Calendario}></img>
            <span> 1 fevereiro 2018</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default amazonShopee;