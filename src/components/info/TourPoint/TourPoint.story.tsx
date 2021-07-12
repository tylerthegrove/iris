import React, { ReactNode } from 'react';

import { Button as B } from '../../buttons/Button/Button';
import { Header, Paragraph } from '../../../typography';
import styled from 'styled-components';
import { purple, white } from '../../../color';
import { themes } from '../../../themes';

export default {
  title: 'Components/info/TourPoint',
  component: TourPoint,
};

export function Example() {
  return (
    <TourPoint header="I am title" confirmation="Click me.">
      Lorem ipsum dolor sit.
    </TourPoint>
  );
}

function TourPoint({
  children,
  confirmation,
  header,
  src,
  ...props
}) {
  const image = src && <img src={src} />;

  return (
    <TourPointStyled>
      {image}
      <Header size="3" theme={themes.dark}>
        {header}
      </Header>
      <Paragraph size="2" theme={themes.dark}>
        {children}
      </Paragraph>
      <Button color={purple(850)} theme={themes.dark}>
        {confirmation}
      </Button>
    </TourPointStyled>
  );
}

const TourPointStyled = styled.div`
  padding: 1rem;
  background: ${purple(700)};
  color: ${white};
  max-width: 24rem;
  border-radius: 0.25rem;
`;

const Button = styled(B)`
  margin-left: auto;
`;
