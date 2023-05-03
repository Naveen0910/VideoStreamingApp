import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: 'Roboto';
`
export const CustomContainer = styled.form`
  display: flex;
  flex-direction: ${props => props.direction};
  padding: ${props => props.pad};
  border-radius: 15px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  min-width: 30%;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
`

export const CustomImage = styled.img`
  height: 50px;
  width: 90%;
  margin-bottom: 30px;
  align-self: center;
`

export const CustomButton = styled.button`
  color: #ffff;
  background-color: #4f46e5;
  margin-top: 10px;
  padding: 10px;
  font-size: 20px;
`

export const CustomInput = styled.input`
  height: 35px;
  padding: 5px;
  margin-top: 2px;
  margin-bottom: 10px;
  border: 2px solid #e2e8f0;
  outline: none;
`