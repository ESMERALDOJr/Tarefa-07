import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: 'Esmeraldo', 
      sobrenome: 'Carneiro'
    }
  }

  render() {
    return (

      <div>

        <h1>Nome : { this.state.nome}</h1>
        <h1>Sobrenome : { this.state.sobrenome}</h1>
        <button onClick={this.alterarNomeCompleto}>Alterar</button>

      </div>
    );
  }

  alterarNomeCompleto = () => {
    this.setState({

      nome: 'Euclides',
      sobrenome: 'Junior'
      
    });
  }
}

export default App;