import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div `

    background-color: darkgray;
    display: flex;
    min-height: 18vh;
    justify-content: center;

    p {
        color: #000;
        font-size: 3vh;
        align-self: center;
    }

`

export function Footer (){

    return(

        <FooterContainer>
        <p>
            Footer - Desenvolvido por Eduardo Pezzi.
        </p>
        </FooterContainer>
    )

}