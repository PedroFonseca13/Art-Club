import React from 'react'
import { Main, Form, Title, DivFlex, Input, Select } from './styles'
import Navbar from '../../components/Navbar'
import maskPhone from '../../utils/maskPhone'
import { Container } from 'react-bootstrap'

const values = ['09:00', '9:40', '10:20', '11:00', '11:40']

const appointment = () => {
  return (
    <>
      <Navbar />
      <Main>
        <Container>
          <Title>agendamento</Title>
          <Form>
            <DivFlex>
              <label htmlFor="name">Nome
                <Input type="text" id="name" />
              </label>

              <label htmlFor="lastName">Sobrenome
                <Input type="text" id="lastName" />
              </label>
            </DivFlex>

            <label htmlFor="phone">Telefone
              <Input type="text" id="phone" onKeyDown={ maskPhone }
                placeholder="(31) 99999-9999" />
            </label>

            <label htmlFor="email">E-mail
              <Input type="email" id="email"
                placeholder="exemplo@email.com" />
            </label>

            <DivFlex>
              <label htmlFor="date">Dia
                <Input type="date" name="date" id="date" />
              </label>

              <label htmlFor="appt"> Que horas?
                <Select>
                  { values.map((value, i) =>
                    <option key={ i }>{ value }</option>
                  ) }
                </Select>
              </label>
            </DivFlex>
            <input type="submit" value="Agendar" />
          </Form>
        </Container>
      </Main>
    </>
  )
}

export default appointment
