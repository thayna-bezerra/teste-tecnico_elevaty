import React from 'react';
import elevatyLogo from '../../assets/elevatyLogo.png';
import { ButtonSearch, HeaderContainer, FormStyles } from './styles';
import { MagnifyingGlass } from 'phosphor-react';

type HeaderProps = {
  startBirthday: string;
  endBirthday: string;
  onStartDateChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onEndDateChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchButtonClick: () => void;
  isFetching: boolean;
};

export const Header = ({
  startBirthday,
  endBirthday,
  onStartDateChange,
  onEndDateChange,
  onSearchButtonClick,
  isFetching,
}: HeaderProps) => {
  return (
    <HeaderContainer>
      <img src={elevatyLogo} alt="Logo Elevaty" />
      <FormStyles>
        <input type="date" value={startBirthday} onChange={onStartDateChange} />
        <input type="date" value={endBirthday} onChange={onEndDateChange} />
        <ButtonSearch type="button" onClick={onSearchButtonClick} disabled={isFetching}>
          <MagnifyingGlass size={23} color="#FFF" weight="bold" />
        </ButtonSearch>
      </FormStyles>
    </HeaderContainer>
  );
};
