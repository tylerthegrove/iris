import React, { useState } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import { PopOver } from './PopOver';
import { Pop } from './PopOver.minors';

import { Dock } from '../Dock/Dock';
import {
  Button as B,
  Badge,
  Input,
  CopyField,
} from '../../components';
import { Gear, ChevronDown, Link as IconLink } from '../../icons';
import { Header, Paragraph, Link } from '../../typography';
import { blue, purple } from '../../color';
import { core } from '../../tokens';
import { themes } from '../../themes';

export default {
  title: 'layout/PopOver/examples',
};

export function NestedTourPoint() {
  return (
    <>
      <PopOver
        content={
          <div
            style={{
              padding: '2rem 1.5rem 1.5rem',
              textAlign: 'center',
              width: '22rem',
            }}
          >
            <Header size="5">Anyone on the internet can see.</Header>
            {TourPoint}
            <CopyField
              format="primary"
              value="https://vimeo.com/ABCXYZ123"
              messages={{ success: 'Copied!' }}
              style={{ margin: '1.5rem 0' }}
            />
            <Link>Privacy Settings</Link>
          </div>
        }
      >
        <B
          format="secondary"
          icon={<IconLink />}
          style={{ margin: '0 auto' }}
        />
      </PopOver>
    </>
  );
}

const TourPoint = (
  <div
    style={{
      padding: '1rem',
      background: purple(700),
      position: 'absolute',
      top: '50%',
      right: 'calc(100% - 1rem)',
      width: '16rem',
      color: 'white',
      transform: 'translateY(-50%)',
      borderRadius: '0.25rem',
    }}
  >
    <Header size="5" theme={themes.dark}>
      Share a private link, and viewers will see your brand colors and
      customer player settings.
    </Header>
    <B style={{ marginLeft: 'auto' }} color={purple(850)}>
      Okay
    </B>
  </div>
);

export function VideoLibrarySearch() {
  return (
    <div style={{ padding: '2rem' }}>
      <PopOver content={<div>All Video Folder</div>}>
        <B
          format="secondary"
          icon={<ChevronDown />}
          iconPosition="right"
        >
          Type
        </B>
      </PopOver>
      <div>
        <Block style={{ width: '5rem', height: '1rem' }} />
        <Block />
        <Block />
        <Block />
        <Block />
      </div>
    </div>
  );
}

const Block = styled.div`
  display: block;
  margin: 0.5rem 0;
  background: ${core.color.background(200)};
  width: 100%;
  height: 4rem;
  border-radius: 0.25rem;
`;

export function DynamicSize() {
  const [width, widthSet] = useState(240);
  return (
    <>
      <PopOver
        active
        content={
          <div style={{ padding: '2rem', width }}>
            PopOvers dynamically adjust when their contents resize.
          </div>
        }
        style={{
          zIndex: 5000,
          transition: '80ms ease-in-out',
          width,
        }}
      >
        <TriggerButton>PopOver</TriggerButton>
      </PopOver>
      <Button onClick={() => widthSet((width) => width + 40)}>
        grow
      </Button>
      <Button onClick={() => widthSet((width) => width - 40)}>
        shrink
      </Button>
    </>
  );
}

export function Scrollable() {
  return (
    <>
      <PopOver
        content={PopScrollable}
        attach="bottom"
        style={{ width: '25rem' }}
      >
        <TriggerButton>PopOver bottom</TriggerButton>
      </PopOver>
    </>
  );
}

export function Fixed() {
  return (
    <div style={{ height: '150vh' }}>
      <Dock attach="bottom" style={{ height: '7rem' }}>
        <PopOver
          content={PopScrollable}
          attach="top"
          style={{ width: '25rem' }}
        >
          <TriggerButton>PopOver bottom</TriggerButton>
        </PopOver>
      </Dock>
    </div>
  );
}

export function PopOverInsideLink() {
  const [active, setActive] = useState(false);

  return (
    <div style={{ display: 'flex' }}>
      <Card
        href="#"
        key="1"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <Paragraph size="1">This whole card is a link</Paragraph>
        <PopOver content={PopList} style={{ zIndex: 5000 }}>
          <B
            onClick={(event) => {
              event.preventDefault();
            }}
          >
            PopOver
          </B>
        </PopOver>
      </Card>
      <Card
        href="#"
        key="2"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <Paragraph size="1">This whole card is a link</Paragraph>
        <PopOver
          active={active}
          content={PopList}
          style={{ zIndex: 5000 }}
        >
          <B
            onClick={(event) => {
              event.preventDefault();
              setActive(!active);
            }}
          >
            Controlled PopOver
          </B>
        </PopOver>
      </Card>
    </div>
  );
}

const Card = styled.a`
  width: 20rem;
  margin: 1rem;
  height: 15rem;
  display: flex;
  flex-direction: column;
  border: 0.2rem solid ${blue(500)};
  border-radius: 0.5rem;
  padding: 2rem;
  justify-content: center;
  align-items: center;
`;

const TriggerButton = styled(B)`
  margin: 2rem auto;
`;

const Button = styled(B)`
  margin: 0.5rem;
`;

const PopList = (
  <>
    <Pop.List>
      <Pop.Header>Header</Pop.Header>
      <Pop.Item href="#">Item 1</Pop.Item>
      <Pop.Item href="#" selected>
        Item 2 (Selected)
      </Pop.Item>
    </Pop.List>
    <Pop.Divider />
    <Pop.List>
      <Pop.Item href="#">
        <Gear />
        Item 3
      </Pop.Item>
      <Pop.Item href="#" selected>
        Item 4
        <Badge format="upgrade" style={{ display: 'inline-block' }}>
          Upgrade
        </Badge>
      </Pop.Item>
    </Pop.List>
  </>
);

const PopActions = styled.div`
  display: flex;
  padding: 0.5rem;
  border-top: 1px dashed
    ${({ theme }) => rgba(theme.content.color, 0.5)};
`;

const PopScrollable = (
  <>
    <div
      style={{
        padding: '1rem',
        maxHeight: '15rem',
        overflow: 'auto',
      }}
    >
      <Paragraph size="2">
        `Twas brillig, and the slithy toves Did gyre and gimble in the
        wabe: All mimsy were the borogoves, And the mome raths
        outgrabe.
      </Paragraph>
      <Paragraph size="2">
        "Beware the Jabberwock, my son! The jaws that bite, the claws
        that catch! Beware the Jubjub bird, and shun The frumious
        Bandersnatch!"
      </Paragraph>
      <Paragraph size="2">
        He took his vorpal sword in hand: Long time the manxome foe he
        sought -- So rested he by the Tumtum tree, And stood awhile in
        thought.
      </Paragraph>
      <Paragraph size="2">
        And, as in uffish thought he stood,The Jabberwock, with eyes
        of flame, Came whiffling through the tulgey wood, And burbled
        as it came!
      </Paragraph>
      <Input
        name="foo"
        id="PopOver Example Input"
        label="Jabberwocky Name"
      />
    </div>
    <PopActions>
      <Button format="secondary" fluid>
        Cancel
      </Button>
      <Button fluid>Submit</Button>
    </PopActions>
  </>
);
