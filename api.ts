import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import styled, { ThemeProvider, DefaultTheme, padding } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color?: string;
    bg?: string;
  }
import { createRoot } from 'react-dom/client'

const Button = styled.button`
  background: #BF4F74;
  border-radius: 3px;
  border: none;
  color: white;
`

const TomatoButton = styled(Button)`
  background: tomato;
`

const container1 = document.createElement('div');
document.body.appendChild(container1);

const root1 = createRoot(container1);
root1.render(
    <React.StrictMode>
        <React.Fragment>
            <Button>I'm purple.</Button>
            <br />
            <TomatoButton>I'm red.</TomatoButton>
        </React.Fragment>
    </React.StrictMode>
// import styled from 'styled-components'

const padding = '3em'

const Section = styled.section<{ $background?: string; }>`
  color: white;

    /* Pass variables as inputs */
      padding: ${padding};
    background: ${(props) => props.$background || 'transparent'};
  `;

const container2 = document.createElement('div');
document.body.appendChild(container2);

const root2 = createRoot(container2);
root2.render(
  <React.Fragment>
    <Section $background="royalblue">
      <span>&#x2728; Magic</span>
    </Section>
    <Component
      <Component
        as="button"
        onClick={() => alert('It works!')}
      >
        Click Me!
      </Component>
      onClick={() => alert('It works!')}
    >
      Hello Recruiter!
    </Component>
    <Comp draggableColor="red" draggable="true">
      Drag me!
    </Comp>
    <Comp hidden>
      Drag Me!
    </Comp>
  </React.Fragment>
// import styled from 'styled-components'

const Input = styled.input.attrs<{ padding?: string | number; small?: boolean }>((props) => ({
  small: props.small || false,
  type: 'text',
  size: props.small ? 5 : undefined,
}))<{ padding?: string | number; small?: boolean }>`
    border-radius: 3px;
    border: 1px solid #BF4F74;
    display: block;
    margin: 0 0 1em;
    padding: ${(props) => (typeof props.padding === 'number' ? `${props.padding}em` : props.padding)};

    ::placeholder {
      color: #BF4F74;
    }
  `;
  
  // Ensure the target element exists in the HTML file
  const rootElement = document.getElementById('root');
  if (rootElement) {
  ReactDOM.render(
    <React.Fragment>
      <Input padding={1} small={true} placeholder="Small" />
      <Input padding={1} small={true} placeholder="Another Small" />
    </React.Fragment>,
    rootElement
  );
}
// import styled from "styled-components";

const Component = styled.div`
  color: red;
`;

root2.render(
  <Component
    as="button"
    onClick={() => alert('It works!')}
>
  {/* Removed duplicate render call and fixed syntax */}
</Component>

// Removed duplicate and incomplete render logic
// Removed duplicate render call
  document.getElementById('root')
  // import styled, { ThemeProvider } from 'styled-components'

const Box1 = styled.div`
    color: ${(props) => props.theme?.color || 'black'};
`;

ReactDOM.render(
  <ThemeProvider theme={{ color: 'mediumseagreen' } as DefaultTheme}>
    <Box1>I'm mediumseagreen!</Box1>
  </ThemeProvider>,
  <ThemeProvider theme={{ color: 'mediumseagreen' }}>
    <Box1>I'm mediumseagreen!</Box1>
  </ThemeProvider>
);

// import styled, { ThemeProvider } from 'styled-components'
  document.getElementById('root')
);

const Box2 = styled.div`
  background: ${(props) => props.theme?.bg || 'transparent'};
`;
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.Fragment>
      <ThemeProvider theme={{ bg: 'white', color: 'mediumseagreen' }}>
        <Box2>
          {"I'm mediumseagreen with a white background!"}
        </Box2>
      </ThemeProvider>
    </React.Fragment>
  );
}
