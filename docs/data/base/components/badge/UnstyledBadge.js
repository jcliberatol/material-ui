import * as React from 'react';
import { styled, Box } from '@mui/system';
import BadgeUnstyled from '@mui/base/BadgeUnstyled';

const StyledBadge = styled(BadgeUnstyled)`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  list-style: none;
  font-family: IBM Plex Sans, sans-serif;
  position: relative;
  display: inline-block;
  line-height: 1;

  & .MuiBadge-badge {
    z-index: auto;
    min-width: 20px;
    height: 20px;
    padding: 0 6px;
    color: #fff;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    white-space: nowrap;
    text-align: center;
    background: #07f;
    border-radius: 10px;
    box-shadow: 0 0 0 1px #fff;
  }

  & .MuiBadge-dot {
    padding: 0;
    z-index: auto;
    min-width: 6px;
    width: 6px;
    height: 6px;
    background: #07f;
    border-radius: 100%;
    box-shadow: 0 0 0 1px #fff;
  }

  & .MuiBadge-anchorOriginTopRight {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
  }
`;

function BadgeContent() {
  return (
    <Box
      component="span"
      sx={{
        width: 42,
        height: 42,
        borderRadius: '2px',
        background: '#eee',
        display: 'inline-block',
        verticalAlign: 'middle',
      }}
    />
  );
}

export default function UnstyledBadge() {
  return (
    <Box sx={{ '& > :not(style) + :not(style)': { ml: 4 } }}>
      <StyledBadge badgeContent={5}>
        <BadgeContent />
      </StyledBadge>
      <StyledBadge badgeContent={5} variant="dot">
        <BadgeContent />
      </StyledBadge>
    </Box>
  );
}
