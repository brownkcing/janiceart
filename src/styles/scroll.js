import styled from 'styled-components'
import { ArrowDown as Down } from '@styled-icons/evil'
import { ArrowUp as Up } from '@styled-icons/evil'

export const Arrow = styled(Down).attrs(({ direction, size }) => ({
  as: direction === `up` && Up,
  size,
}))`
  ${({ theme, show, size }) => `
  z-index: 2;
  background: ${theme.black};
  color: ${theme.white};
  width: 50px !important;
  height: 50px !important;
  background: rgba(255,255,255,0.5);
  border-radius: 50%;
  transition: ${theme.shortTrans};
  position: fixed;
  bottom: 2vh;
  opacity: ${show ? 1 : 0};
  visibility: ${show ? `visible` : `hidden`};
  :hover {
    transform: scale(1.15);
    background: ${theme.noBack};
  }
  right: calc(6vw - ${size});`}
`