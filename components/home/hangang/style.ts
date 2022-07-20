import styled from 'styled-components'

export const HangangWrapper = styled.div`
display: grid;
justify-content: center;
align-items: center;

width: 100%;
height: 100vh;
`

export interface HangangTempProps {
  width: number
}

export const HangangBorder = styled.div`
display: flex;
justify-content: center;
align-items: center;

width: 260px;
height: 260px;

background-image: var(--c-hangang-temp-gradient-color);

box-shadow: 0px 30px 70px 0px var(--c-hangang-temp-shadow-color);
border-radius: 100%;
padding: 5px;
`

export const HangangTemp = styled.div`
position: relative;

display: flex;
justify-content: center;
align-items: center;

width: 100%;
height: 100%;

overflow: hidden;

border-radius: 100%;

background-color: var(--background-color);
/* border: 5px solid var(--c-hangang-temp-border-color);
box-shadow: 5px 5px 0px 0px var(--c-hangang-temp-shadow-color); */

&::after {
  content: '';

  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 0;

  display: block;
  width: 100%;
  height: ${(props: HangangTempProps) => props.width}%;
  background-color: var(--c-hangang-temp-background-color);

  transition: height 1s ease;
}
`

export const Temp = styled.span`
z-index: 2;

display: block;

font-size: 3rem;
font-weight: bold;
text-align: center;

width: 100%;
height: 60px;

white-space: nowrap;
overflow-y: hidden;

& > span {
  z-index: 2;

  display: block;

  transform: translateY(0%);

  animation: none;
}

@keyframes show-animation {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0%);
  }
}
`

export interface InfoWrapperProps {
  capturing: boolean
}

export const Watermark = styled.span`
position: absolute;
top: 0;
left: 0;

display: none;

width: 100%;

padding: 20px 0px;

font-size: 0.8rem;
text-align: center;
color: var(--c-help-text-color);
`

export const InfoWrapper = styled.div`
position: relative;

display: flex;
justify-content: center;
align-items: center;

padding: 25px;

background-color: black;

${(props: InfoWrapperProps) => !props.capturing ? `
  ${Temp} > span {
    animation: show-animation 0.5s 0s 1 forwards cubic-bezier(0.2, 0.9, 0.6, 1);
  }
` : `
  ${Watermark} {
    display: block;
  }
`}
`

export const Where = styled.button`
z-index: 1;

position: absolute;
bottom: 0;
left: 0;

display: block;
width: 100%;

padding: 20px 0px;
border: none;

cursor: pointer;

font-size: 0.9rem;
text-align: center;
user-select: none;

background-color: transparent;
color: var(--c-hangang-site-text-color);
`

export const ButtonWrapper = styled.div`
position: absolute;
bottom: 0;
left: 0;
z-index: var(--z-dialog-open-button);

display: flex;
justify-content: center;

width: 100%;

padding: 20px 0px;
`

export const HelpTextWrapper = styled.div`
position: fixed;
bottom: 0;
left: 0;

display: grid;
justify-items: center;
gap: 10px;

width: 100%;

padding: 20px 0px;

font-size: 0.9rem;
color: var(--c-help-text-color);
`

export const Button = styled.button`
display: block;

padding: 10px 15px;
border: none;
border-radius: 5px;
box-shadow: 0px 0px 0px 0px var(--c-button-shadow-color);

font-size: 0.8rem;

background-color: var(--c-button-background-color);
color: var(--c-button-text-color);

cursor: pointer;

transition: background-color 0.2s ease;

&:hover {
  background-color: var(--c-button-hover-background-color);
}
`