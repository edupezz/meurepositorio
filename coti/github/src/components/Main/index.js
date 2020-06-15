import React from 'react';
import {
    MainContainer,
    FormContainer,
    MainTextContainer
} from './styles';

import { 
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText 
} from 'reactstrap';

export function Main (){

    return(
        <MainContainer>
            <MainTextContainer>
                <p>
                    Built for<br /> developers
                </p>
                <div>
                    GitHub is a development platform inspired by the way you work. From open source to business, you can host and review code, manage projects, and build software alongside 50 million developers.
                </div>
            </MainTextContainer>
            <FormContainer>
                <Form>
                    <FormGroup>
                        <Label for="Username">Username</Label>
                        <Input type="text" id="username"
                        style={{backgroundColor: '#FAFBFC'}}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" id="email"
                        style={{backgroundColor: '#FAFBFC'}}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" id="password"
                        style={{backgroundColor: '#FAFBFC'}}></Input>
                        <p style={{
                            fontSize:'0.69em',
                            paddingLeft:'0.5vw',
                            color: '#222',
                            marginTop: '1vh'
                        }}>
                            Make sure it's at least 15 characters OR at least 8 characters including a number and a lowercase letter. Learn more.
                        </p>
                    </FormGroup>
                    <Button color="success"
                        style={{
                            width: '27vw',
                            height: '10vh',
                            marginTop: '3.5vh',
                            marginBottom: '4.5vh'
                            }}>Sign up for GitHub</Button>
                    <FormGroup>
                        <p style={{
                            fontSize:'0.69em',
                            paddingLeft:'0.5vw',
                            color: '#939AA1'
                        }}>
                            By clicking “Sign up for GitHub”, you agree to our Terms of Service and Privacy Statement. We’ll occasionally send you account related emails.
                        </p>
                    </FormGroup>
                </Form>
                
            </FormContainer>
        </MainContainer>


    );


}