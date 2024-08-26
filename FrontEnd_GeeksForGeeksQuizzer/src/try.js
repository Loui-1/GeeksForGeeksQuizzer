export default function App(){
  
    return(
          <div style={{display:'flex',flexDirection:'row',height:"100vh",width:'100vw'}}>
              <div style={{display:"flex",flex:1,backgroundColor:'blue'}}>
                 
              </div>
              <div style={{display:"flex", flex:1,backgroundColor:'pink',}}>
                 
              </div>
              <div style={{display:'flex',flex:1,flexDirection:'column'}}>
                  <div style={{display:'flex',flex:1,backgroundColor:'green',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
                    <h1 style={{color:'pink',display:'flex'}}>Is Takyi Pretty?</h1>
                    <div style={{display:'flex',width:'50%',justifyContent:'space-between'}}>
                    <button onClick={()=>{console.log("good")}} style={{display:'flex'}}>YES!!!!!OFCourse</button>
                    <button onClick={()=>{console.log('negative')}} style={{display: "flex"}}>NO </button>
                    </div>
                  </div>
                  <div style={{flex:1,backgroundImage:`url("takyi.png")`}}></div>
                 </div>
          </div>
    );
  }
  
  