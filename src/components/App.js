import React, { Component } from 'react';

import Header from './Header'
import Form from './Form'
import Error from "./Error"
import Clima from "./Clima"

class App extends Component {
 
 
  state = { 
    error: false,
    consulta: {},
    resultado: {}
   }

  hayError(data) {
  return (!(data.pais) || !data.ciudad)
  }


  consultarApi = () => {
    const {ciudad,pais} = this.state.consulta

    const appId = '666783aaf5389e29d1a3f89245466592'

    let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`

    fetch(url)
      .then(respuesta => {
        return respuesta.json()
      })
      .then( datos => {
        this.setState( {
          resultado : datos
        } )
      })
      .catch( error =>
        console.log(error)
      )

  }

  datosConsulta = (respuesta) => {

    if(this.hayError(respuesta)) {
      console.log('Error')
      this.setState({
      error: true
      })
      
    } else {


      this.setState({
        consulta: respuesta,
        error: false
      }, function() {
          this.consultarApi() 
      } )

  }

}

  render() { 
    return ( 
      <div>
        <Header 
            titulo="Proveedor de Clima"
        />

        <Form
          enviarDatos = {this.datosConsulta}
        />

        { this.state.error ? (
            <Error mensaje="Ingrese una ciudad y un pais"/> ) 
        : <Clima datos={this.state.resultado} />

        }

      </div>
     );
  }
}
 
export default App;
