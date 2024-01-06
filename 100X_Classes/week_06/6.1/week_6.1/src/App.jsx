/* eslint-disable react/prop-types */
const App = () => {
  return (
    <div>
      <CardWrapper>Hi there</CardWrapper>
      <CardWrapper>Good Morning</CardWrapper>

      {/* ddeeply nested warppers */}
      <CardWrapper>
        <CardWrapper>
          <CardWrapper>
            <p>deeply nested wrapper</p>
          </CardWrapper>
        </CardWrapper>
      </CardWrapper>
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
        fontSize: "40px",
      }}
    >
      {children}
    </div>
  );
}

export default App;
