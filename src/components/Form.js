import React, { Component } from 'react';

class Form extends Component {
    state = { 
        error: false
    }


    ciudadRef = React.createRef()
    paisRef = React.createRef()


    buscarClima = (e) => {
       
        e.preventDefault()

        const data = { 
            ciudad: this.ciudadRef.current.value,
            pais: this.paisRef.current.value
        }

        this.props.enviarDatos(data)


    }

    render() { 
        return ( 
            <div className="contenedor-form">
                    <div className="container">
                        <div className="row">
                            <form onSubmit={this.buscarClima}>
                                <div className="input-field col s12 m8 l4 offset-m2">
                                    <input ref={this.ciudadRef} id="ciudad" type="text" />
                                    <label htmlFor="ciudad"> Ciudad: </label>
                                </div>

                                <div className="input-field col s12 m8 l4 offset-m2">
                                    <select id="Pais" ref={this.paisRef} >
                                        <option value="" defaultValue> 
                                            Elije un Pais
                                        </option>

                                        <option value="AR"> Argentina </option>
                                        <option value="CO"> Colombia </option>
                                        <option value="CR"> Costa Rica </option>
                                        <option value="ES"> España </option>
                                        <option value="US"> Estados Unidos </option>

                                    </select>
                                    <label htmlFor="Pais"> Pais: </label>
                                </div>


                                <div className="input-field col s12 m8 l4 offset-m2">
                                    <input type="submit" className="waves-effect waves-light btn-large yellow accent-4" value="Buscar"/>                             
                                </div>

                            </form>

                        </div>
                    </div>
            </div>
         );
    }
}
 
export default Form;