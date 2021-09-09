import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { Nav } from './Nav.story';
import { Dock } from '../Dock/Dock';
import { Header } from '../../typography';
import { Button } from '../../components';
import { slate, blue } from '../../color';
import { Lock, Gear, Stats, ReviewCheck } from '../../icons';

export function SingleVideo() {
  return (
    <Layout>
      <Dock attach="top">
        <Nav />
      </Dock>
      <Content>
        <VideoWrapper>
          <iframe
            src="https://player.vimeo.com/video/70029323?title=0&byline=0&portrait=0"
            width="100%"
            height="100%"
            style={{
              position: 'absolute',
              top: '0',
              bottom: '0',
              right: '0',
              left: '0',
              border: '0',
            }}
          />
        </VideoWrapper>
        <Header size="1" style={{ margin: '1rem 0' }}>
          Cloudy Alps
        </Header>
        <Header
          size="4"
          variant="thin"
          style={{
            margin: '1rem 0',
            maxWidth: '30rem',
            color: slate(500),
          }}
        >
          Lorem ipsum Contrary to popular belief, Lorem Ipsum is not
          simply random text. It has roots in a piece of classical
          Latin literature from 45 BC, making it over 2000 years old.
          Richard McClintock, a Latin professor at Hampden-Sydney
          College in Virginia, looked up one of the more obscure Latin
          words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature,
          discovered the undoubtable source. Lorem Ipsum comes from
          sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
          Malorum" (The Extremes of Good and Evil) by Cicero, written
          in 45 BC. This book is a treatise on the theory of ethics,
          very popular during the Renaissance. The first line of Lorem
          Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
        </Header>
        <VerticalDock />
      </Content>
      <Dock
        attach={[
          [98, 2],
          [100, 0],
        ]}
      >
        <Button
          floating
          pill
          format="basic"
          variant="minimalTransparent"
        >
          Storage <span style={{ color: blue(500) }}>95%</span>
        </Button>
      </Dock>
    </Layout>
  );
}

export function VerticalDock() {
  return (
    <DockStyled
      attach="right"
      css={`
        margin-top: 10rem;
      `}
    >
      <DockContent>
        <IconSection>
          <Lock />
        </IconSection>
        <Header size="6">Privacy</Header>
        <IconSection>
          <ReviewCheck />
        </IconSection>
        <Header size="6">Review</Header>
        <IconSection>
          <Stats />
        </IconSection>
        <Header size="6">Analytics</Header>
        <IconSection>
          <Gear />
        </IconSection>
        <Header size="6">Settings</Header>
      </DockContent>
    </DockStyled>
  );
}

const DockContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 6rem;
`;

const IconSection = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  margin: 1.5rem 0 0.5rem;
`;

const DockStyled = styled(Dock)`
  box-shadow: 0 0 ${rem(1)} 0 rgba(0, 0, 0, 0.15),
    0 ${rem(4)} ${rem(8)} 0 rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
`;

const Layout = styled.div`
  display: grid;
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 60rem;

  &::after {
    content: ' ';
    padding-bottom: 56%;
    display: block;
  }
`;

const Content = styled.div`
  margin: 0 auto;
  padding: 10rem 0;
`;
