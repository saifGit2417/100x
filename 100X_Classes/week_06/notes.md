1 - why react component cant retturn more than one component in return statement without using wrapper tag , <></> . <div> , <React.Fragment>

2 - react rendering - how to fix this - push down states to lower level may be with seperate component , dont have state in parent component it will prevnt n re render - headers and header with button example

alwasy try to have states in lowest possible component in react node treee
react.memo to prevent un neseccarry re rendder

importsnce of key in resct rendering whilker mapping data

wrapper components and using children props to redner whole differnt compoennt input without props

const App = () => {
return (
<div>
<CardWrapper>Hi there</CardWrapper>
<CardWrapper>Good Morning</CardWrapper>
</div>
);
};

function CardWrapper({ children }) {
return (
<div
style={{
        border: "2px solid red",
        padding: "20px",
        margin: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }} >
{children}
</div>
);
}

export default App;

side effects
hooks
