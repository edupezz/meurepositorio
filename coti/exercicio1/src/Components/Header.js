import React from 'react';
import styled from 'styled-components';

const Head = styled.div `

    background-color: black;
    display: flex;
    width: 100%;
    height: 12vh;
    justify-content: space-between;

    p{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: #fff;
        padding-right: 1vw;
        padding-left: 1vw;
        font-weight: 600;
        align-self: center;

    }
`
export class Header extends React.Component {

    static defaultProps = {
        title: 'Eduardo Pezzi - Exercício1.',
        versao: 'Versão 1.0'
    };

    render(){
    return(
    <Head>
        <p>{this.props.title}</p>
        <p>{this.props.versao}</p>
    </Head>
    )};
}

export default Header;