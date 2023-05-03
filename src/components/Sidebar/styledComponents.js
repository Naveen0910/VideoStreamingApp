import styled from 'styled-components'

export const CustomContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justifyContent};
  width: 20%;
  padding: 10px;
  min-height: ${props => props.minHeight};
  min-width: ${props => props.minWidth};
`
export const CustomButton = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding=${props => props.padding}
  border:none;
  background-color:'transperant';
`
export const CustomImage = styled.img`
  height: 40px;
  margin-right: 10px;
`
