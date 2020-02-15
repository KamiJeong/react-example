import styled from 'styled-components';

const getColor = type => {
  switch (type) {
    case 'primary':
      return 'blue';
    case 'danger':
      return 'red';
    default:
      return 'white';
  }
};

const StyledButton = styled.button`
  background: ${({ color }) => getColor(color)};

  &.primary {
    color: white;
    &:hover {
      background-color: skyblue;
    }
  }

  &.danger {
    &:hover {
      background-color: pink;
    }
  }
`;

export default StyledButton;
