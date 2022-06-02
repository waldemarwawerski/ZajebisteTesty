function RamkaWrapper({dane, children}) {
    return(
        <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          alignContent: "center",
          flexWrap: "wrap"
        }}
      >
       {children}
      </div>
    );
}
  
export default RamkaWrapper;