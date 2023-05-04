import styled from 'styled-components';

export const Table = styled.table`
  flex: 1;  
  width: 60rem;
  border-collapse: collapse;
  color: ${(props) => props.theme['white']};  
  border-spacing: 0px;
  margin-top: 50px;
  margin-left: 198px;
  display: flex;
  flex-direction: column;
  & > thead {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px; 
    display: flex;
    width: 100%; 
    background-color: ${(props) => props.theme['orange']}; 
  }
    
  & > thead > tr > th{
    background-color: ${(props) => props.theme['orange']};
    white-space: nowrap;
    padding: 1.4rem;
    text-align: center;
    padding-left: 10%;
    min-width: 15rem;
    font-size: 0.975rem;
    line-height: 1.25rem;    
    justify-content: space-between;
    font-weight: 600; 
    
    &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }
      &:last-child {
        border-top-right-radius: 8px;
        padding-left: 1.5rem;
      }
    }
  
  button {       
    padding: 8px 16px; 
    background-color: ${(props) => props.theme['gray_200']};
    color: ${(props) => props.theme['white']};
       
    white-space: nowrap;
    padding: 1.5rem;
    width: 100%;
    
    border-top: 4px solid ${(props) => props.theme['bg_color']};
    font-size: 0.875rem;
    line-height: 1.25rem;    
    justify-content: space-between;
    
    border: none;
    border-top: 4px solid ${(props) => props.theme['bg_color']};
    cursor: pointer;
    &:hover {
        background-color: ${(props) => props.theme['gray_300']};
        :focus {
          outline: none;
        }
      }
  }    

  div {
    padding: 12px 16px; 
    margin-left: 2rem;
    
    > p {
      margin-bottom: 0.05rem;
    }
  }

  & > tbody> button > td{
    min-width: 15.5rem;
  }
`
export const ButtonActions = styled.button`
  align-items: center;
  width: 1.625rem;
  height: 1.625rem;

  background: transparent;
  cursor: pointer;
  border: none;
  border-radius: 4px;
`
