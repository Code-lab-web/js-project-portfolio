import { media } from "..styles/media"
// Example usage of media queries with styled-components
import styled from 'styled-components';

const StyledComponent = styled.div`
  @media ${media.desktop} {
    width: 250px;
  }
`;
export const media = {
    mobile: '(max-width: 768px)',
    tablet: '(max-width: 1024px)',
    desktop: '(min-width: 1025px)'



}