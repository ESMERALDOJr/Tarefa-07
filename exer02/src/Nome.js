import React from 'react';

class Nome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Nome: [

                { nome_inicial: "Nome: Janaine" }, { nome_inicial: "Nome: Ana" }, { nome_inicial: "Nome: Maria" }

            ]
        }
    }

    cmd_click = () => {
        this.setState({

            Nome: [

                { nome_final: "Nome: Cristiane" }, { nome_final: "Nome: Clara" }, { nome_final: "Nome: Eduarda" }

            ]
        });
    }

    render() {
        return (
            
            <div>
                {                
                this.state.Nome.map((nome_inicial) =>
                    <p>{nome_inicial.nome_inicial}</p>
                )}
                
                {this.state.Nome.map((nome_final) =>
                    <p>{nome_final.nome_final}</p>

                )}

                <button onClick={this.cmd_click}>Alterar</button>
            </div>
        );
    }
}

export default Nome;