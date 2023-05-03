import styled from 'styled-components';

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

export const ButtonStyles = styled.button`
  align-items: center;
  width: 1.625rem;
  height: 1.625rem;

  background: transparent;
  cursor: pointer;
  border: none;
  border-radius: 4px;
`



// RESPONSIVIDADE
//   @media (min-width: 768px) {
//     & > thead > tr > th:last-child,
//     & > tbody > tr > td:last-child {
//       display: table-cell;
//     }
//     & > tbody > tr > td:last-child {
//       padding-left: 0;
//       padding-right: 0;
//     }
//     & > tbody > tr > td:last-child button {
//       margin-left: 1rem;
//     }
//   }
// `;
