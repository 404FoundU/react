import React, {ReactElement, ReactNode, useState} from 'react';
import './App.css';


// Conventional props
function Heading({title}: { title: string }) {
    return (
        <h1>{title}</h1>
    )
}

function HeadingContent({children}: { children: ReactNode }): ReactElement {
    return (
        <h1>{children}</h1>
    )
}

const defaultContainerProps = {
    heading: <strong> My Heading</strong>
}
type ContainerProps = { children: ReactNode } & typeof defaultContainerProps

function Container({heading, children}: ContainerProps): ReactElement {
    return (
        <div>
            <h1>{heading}</h1>
            <h1>{children}</h1>
        </div>
    )
}

Container.defaultProps = defaultContainerProps;


// Functional props
function TextWithNumber({
                            header,
                            children
                        }: {

    header?: (num: number) => ReactNode,
    children: (num: number) => ReactNode
}): ReactElement {
    const [state, setState] = useState<number>(0)
    return (
        <div>
            <div>{header?.(state)}</div>
            <div>{children(state)}</div>
            <div>
                <button onClick={() => setState(prevState => prevState + 1)}>Add</button>
            </div>
        </div>
    )
}

function App() {
    return (
        <div>
            <Heading title="unni2"/>
            <HeadingContent> <strong>Hi</strong> </HeadingContent>
            <Container>Foo</Container>
            <TextWithNumber header={(num: number) => <span> Header {num}</span>} >
                {(num: number) => <div>Number is {num}</div>}
            </TextWithNumber>
        </div>
    );
};

export default App;
