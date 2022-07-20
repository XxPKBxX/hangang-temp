import styled from 'styled-components'

export const ErrorWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;

width: 100%;
height: 100vh;
`

export const ErrorMessage = styled.div`
display: grid;
gap: 10px;
grid-template-rows: auto 1fr;

min-width: 250px;
min-height: 100px;

padding: 15px;
border-radius: 10px;

text-align: left;

border: 2px solid var(--c-error-border-color);
box-shadow: 5px 5px 0px 0px var(--c-error-shadow-color);

animation: error-animation 0.5s 0s 1 forwards ease;

@keyframes error-animation {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
`

export const Title = styled.span`
display: block;

font-size: 1.2rem;
font-weight: bold;
`

export const Message = styled.div`
display: block;

font-size: 1rem;
white-space: pre-wrap;
`