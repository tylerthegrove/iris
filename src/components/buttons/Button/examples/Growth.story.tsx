import React from 'react';
import styled from 'styled-components';

import { Button as B } from '../Button';
import {
  Pencil,
  Camera,
  Gear,
  UploadCloud,
  Remove,
} from '../../../../icons';
import { red } from '../../../../color';

export default {
  title: 'components/buttons/Button/examples',
  component: B,
};

export function GrowthCTA() {
  return (
    <div>
      <Button size="xl" icon={<UploadCloud />}>
        Create videos
      </Button>
      <Button size="xl" icon={<Pencil />} color="#E0FF2B">
        Create videos
      </Button>
      <Button size="xl" icon={<Gear />} color="#f39e00">
        Download Chrome extension
      </Button>
      <Button size="xl" icon={<Camera />} color={red(600)}>
        Go Live
      </Button>
      <Button size="xl" icon={<Remove />} color={red(600)}>
        Cancel
      </Button>
    </div>
  );
}

const Button = styled(B)`
  margin: 1rem;
`;
