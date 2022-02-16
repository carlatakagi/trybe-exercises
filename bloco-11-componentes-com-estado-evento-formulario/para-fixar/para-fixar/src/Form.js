import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      age: '',
    };
    
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    this.setState({
      estadoFavorito: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
              <textarea name="estadoFavorito" value={this.state.estadoFavorito} onChange={this.handleChange} />
          </label>

          <label htmlFor="name">
            Nome:
            <input
              id="name"
              type="text"
              name="name"
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="email">
            Email:
            <input
              id="email"
              type="email"
              name="email"
              onChange={this.handleChange}
            />
          </label>
            
          <label htmlFor="age">
            Idade:
            <input
              id="age"
              type="number"
              name="idade"
              onChange={this.handleChange}
            />

            <select>
              <option>Menor de 18 anos</option>
              <option>18 a 25 anos</option>
              <option>25 a 35 anos</option>
              <option>35 a 50 anos</option>
              <option>Acima de 50 anos</option>
              <option selected>Selecione</option>
            </select>
          </label>

        </form>
      </div>
    );
  }
}

export default Form;