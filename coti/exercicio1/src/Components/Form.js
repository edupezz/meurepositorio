import React from 'react';
import styled from 'styled-components';
import { Button } from 'reactstrap';

////// Início estilização Styled Components.

const FormContainer = styled.div `

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 70vh;
    align-self: center;
    background-color: lightgrey;
    border: thick solid purple;
    padding: 3vh;

    input{

        border: thin solid lightgreen;
        background-color: darkgray;
        padding: 1.2vw;
        margin-bottom: 2vh;
    }

    label {
        color: black;
    }

`
//////// Fim styled Components


export class Form extends React.Component {

    constructor(props){
        super(props);

        this.state = {

            nome: '',
            salario: 0,
            liquido: 0,

        }

        this.handleValue = this.handleValue.bind(this);
    }

    calculoSalarioLiquido = () => {

        let pagamento = this.state.salario;
        let total = 0;

        if (pagamento <= 3000){

            total = (pagamento * 0.88)
            this.setState({liquido: total})

        } if (pagamento >= 3001 && pagamento <= 5000){

            total = (pagamento * 0.80)
            this.setState({liquido: total})
        } else{
            total = (pagamento * 0.74)
            this.setState({liquido: total})
        }
    
    }

    handleValue (event){
        let valor = event.target.value;
        let name = event.target.name;

        this.setState({
            [name]: valor
        });

    }

    render(){

        const { nome, salario, liquido } = this.state;

    return(
    
    <FormContainer>

        <label for="nome">Nome:</label>
        <input type="text" name="nome" placeholder="Digite seu nome"
        value={nome} onChange={this.handleValue} />

        <label for="salario">Salário:</label>
        <input type="text" name="salario" placeholder="Digite seu salário bruto"
        value={salario} onChange={this.handleValue}/>

        <Button color="primary" size="sm" type="submit"
        onClick={this.calculoSalarioLiquido} >Calcular</Button>
        <br />
        <Button color="primary" size="sm" type="reset">Limpar</Button>
        <br />
        <label for="liquido">Seu salário liquido:</label>
        <input type="text" value={liquido} />

    </FormContainer>
    )};
}

export default Form;