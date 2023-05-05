import styled from 'styled-components';

export const HeaderContainer = styled.header `
  background-color: ${props => props.theme['header_color']};

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 12rem 1rem 12rem;
  
  & > img {
    height: 2.375rem;
  }
`

export const FormStyles = styled.form `
  display: flex;
  align-items: center;

  & > input {
    width: 10rem;
    height: 3.320rem;
    margin-right: 8px;
    padding-left: 18px;

    background-color: ${(props) => props.theme['gray_300']};
    color: ${(props) => props.theme['gray_100']};
    border-style: none;
    border-radius: 8px;

    font-size: 15px;
    cursor: pointer;

    align-items: center;

    &::-webkit-calendar-picker-indicator {
      filter: invert(1);
      opacity: 70%;
      padding-right: 0.9rem;            
    }

    &::-webkit-calendar-picker-indicator:hover {
      filter: invert(1);
      opacity: 100%;
      padding-right: 0.9rem;
    }
  }
`

export const ButtonSearch = styled.button `
  width: 3.320rem;
  height: 3.320rem;

  border-style: none;
  border-radius: 8px;
  background: ${(props) => props.theme ['orange']};
  color: ${(props) => props.theme ['white']};
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  cursor: pointer;
`