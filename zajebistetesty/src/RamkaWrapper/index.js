function RamkaWrapper({dane, children, style}) {
    return(
        <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          alignContent: "center",
          flexWrap: "wrap",
          ...style
        }}
      >
       {children}
      </div>
    );
}
  
export default RamkaWrapper;