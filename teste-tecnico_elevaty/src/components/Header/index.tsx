import elevatyLogo from '../../assets/elevatyLogo.png';
import { MagnifyingGlass } from 'phosphor-react';
import { HeaderContainer, ButtonStyles, FormStyles } from './styles';

export function Header() {
  return (
    <HeaderContainer> 
      <img src = {elevatyLogo} alt="Logo Elevaty" />

      <FormStyles>
        <input type="date"/>
        <input type="date"/>
        <ButtonStyles>
          <MagnifyingGlass size={23} color='#FFF' weight='bold' />
        </ButtonStyles>
      </FormStyles>

    </HeaderContainer>
  )
}