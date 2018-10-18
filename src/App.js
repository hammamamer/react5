import React, { Component } from 'react';
import Acteur from './components/Acteur.js'
import calisi from './calisi.jpg'
import snow from './snow.jpg'
import tyrion from './tyrion.jpg'
import sansa from './sansa.jpg'
import cercei from './cercei.jpg'
import theon from './theon.jpg'
import arya from './arya.jpg'
import sam from './sam.jpg'
import game from './game.jpg'




class App extends Component {
  render() {
   return( 
<div>
<h1 align="center">BEST ACTOR OF </h1>
<img style={{width:1300,height:300}} src={game}/>
 <div style={{display:'flex', flexWrap:'wrap',justifyContent:'space-between'}}>

   <div>
      <Acteur img={calisi} name="Emilia Clarke" role="Daenerys Targaryen" gender="female" />
   </div> 
   <div>
      <Acteur img={snow} name="Kit Harington" role="Jon Snow" gender="male" />
   </div> 
   <div>
      <Acteur img={tyrion} name="Peter Dinklage" role="Tyrion Lannister" gender="male" />
   </div> 
   <div>
      <Acteur img={sansa} name="Sophie Turner" role="Sansa Stark" gender="female" />
   </div> 
   <div>
      <Acteur img={cercei} name="Lena Headey" role="Cersei Lannister " gender="female" />
   </div> 
   <div>
      <Acteur img={theon} name="Alfie Allen" role="Theon Greyjoy" gender="male" />
   </div> 
   <div>
      <Acteur img={arya} name="Maisie Williams" role="Arya Stark" gender="female" />
   </div> 
   <div>
      <Acteur img={sam} name="John Bradley-West" role="Samwell Tarly" gender="male" />
   </div> 

 </div>
    
</div>
);

  }
}

export default App;
