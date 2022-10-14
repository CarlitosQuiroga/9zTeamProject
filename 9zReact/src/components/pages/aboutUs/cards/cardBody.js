import React from 'react';
import CardsInner from './card';
import './styles.scss'

const cards = [
  {
    id: "1",
    variant: "click",
    name: "DGT",
    realname: "Franco Garcia",
    edadLugar: '21 Años, URUGUAY',
    back: "https://prosettings.net/wp-content/uploads/dgt.png",
    imageFront: "https://static.lvp.global/teams/logos/5e4c383dd41e5469318045.x2.png"
  },
  {
    id: "2",
    variant: "click",
    name: "MAX",
    realname: "Maximiliano Gonzalez",
    edadLugar: '23 Años, URUGUAY',
    back: "https://prosettings.net/acd-cgi/img/v1/wp-content/uploads/max.png?dpr=1|fit=pad|format=webp",
    imageFront: "https://static.lvp.global/teams/logos/5e4c383dd41e5469318045.x2.png"
  },
  {
    id: "3",
    variant: "click",
    name: "DAV1D",
    realname: "David Tapia Maldonado",
    edadLugar: '22 Años, CHILE',
    back: "https://prosettings.net/acd-cgi/img/v1/wp-content/uploads/dav1d.png?dpr=1|fit=pad|format=webp",
    imageFront: "https://static.lvp.global/teams/logos/5e4c383dd41e5469318045.x2.png"
  },
  {
    id: "4",
    variant: "click",
    name: "NQZ",
    realname: "	Lucas Soares",
    edadLugar: '17 Años, BRASIL',
    back: "https://img-cdn.hltv.org/playerbodyshot/ekkKFiblXEL3I2MO8sm7Gb.png?ixlib=java-2.1.0&w=400&s=5b9c6ade362fdbfcfc60e70ee6eb559f",
    imageFront: "https://static.lvp.global/teams/logos/5e4c383dd41e5469318045.x2.png"
  },
  {
    id: "5",
    variant: "click",
    name: "BUDA",
    realname: "Nicolás Kramer",
    edadLugar: '19 Años, ARGENTINA',
    back: "https://prosettings.net/wp-content/uploads/buda.png",
    imageFront: "https://static.lvp.global/teams/logos/5e4c383dd41e5469318045.x2.png"
  },
  {
    id: "6",
    variant: "click",
    name: "ZAKK",
    realname: "Rafael Fernandes",
    edadLugar: '30 Años, BRASIL',
    back: "https://img-cdn.hltv.org/playerbodyshot/2sMoYcox7d5eEGlvLiASDQ.png?ixlib=java-2.1.0&w=400&s=65546a46df00136b282aff50220d5874",
    imageFront: "https://static.lvp.global/teams/logos/5e4c383dd41e5469318045.x2.png"
  }
];

function BodyCard() {
    return (
      <div className="container cardContainer">
      <div className="row h-100">
        <div class="flex-wrap col d-flex flex-column flex-md-row justify-content-around align-items-center">
          {cards.map((card) => (
            <CardsInner key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
    );
  }


  
export default BodyCard;