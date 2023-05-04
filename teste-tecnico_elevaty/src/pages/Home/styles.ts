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
      color: ${(props) => props.theme['gray_100']};
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

export const Table = styled.table`
  width: 61.125rem;
  border-collapse: collapse;
  color: ${(props) => props.theme['white']};

  border-spacing: 0px;

  margin-top: 50px;
  margin-left: 198px;

  & > thead {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
  
  & > thead > tr > th{
    background-color: ${(props) => props.theme['orange']};
    white-space: nowrap;
    padding: 1rem;

    font-size: 0.875rem;
    line-height: 1.25rem;
    
    justify-content: space-between;

    font-weight: 600;
  }

  & > tbody > tr {
    margin-bottom: 10px;

  }

  & > tbody > tr > td {
    background-color: ${(props) => props.theme['gray_200']};
    white-space: nowrap;
    padding: 1.5rem;

    font-size: 0.875rem;
    line-height: 1.25rem;
    justify-content: space-between;
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
