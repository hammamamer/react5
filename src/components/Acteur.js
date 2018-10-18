import React,{Component} from 'react'

class Acteur extends Component
{
	render(){
        const img=
        {
        	height:200,
        	width:300
        }
        let Acteur = 
        {
          border:'solid 3px blue'
        }
        if (this.props.gender==="female") {
          Acteur=
          {
              border:'solid 3px yellow'
          }
        }
        
       


		return(
               <div style={Acteur} className="Acteur">
               <img style={img} src={this.props.img}/>
               <h3>Actor Name : {this.props.name}</h3>
               <h4>Role : {this.props.role}</h4>
               </div>

			)
	}
}
export default Acteur