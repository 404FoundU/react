import React, {ReactElement, ReactNode} from 'react';
import './App.css';


// Conventional props
function Heading({title} : {title: string}) {
  return (
      <h1>{title}</h1>
  )
}function HeadingContent({children} : {children: ReactNode}): ReactElement {
  return (
      <h1>{children}</h1>
  )
}
const defaultContainerProps = {
  heading: <strong> My Heading</strong>
}
type ContainerProps = { children: ReactNode} & typeof defaultContainerProps
function Container({heading, children} : ContainerProps): ReactElement {
  return (
      <div>
        <h1>{heading}</h1>
        <h1>{children}</h1>
      </div>
  )
}

Container.defaultProps = defaultContainerProps;
function App() {
  return (
    <div >
  <Heading title="unni2" />
      <HeadingContent > <strong>Hi</strong> </HeadingContent>
<Container>Foo</Container>
    </div>
  );
}

export default App;
