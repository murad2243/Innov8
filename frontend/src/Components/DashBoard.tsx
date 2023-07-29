import {BsFillQuestionOctagonFill} from "react-icons/bs"
import{TbBrandSpeedtest} from "react-icons/tb"
import {MdFeedback} from "react-icons/md"
import{FaRegNoteSticky} from "react-icons/fa6"
  export default function Example() {
    return <div>
        <div style={{backgroundColor:"black", width:"auto",height:"100vh",margin:"auto"}} >
           <div style={{padding:'4px'}}>
            <h1  style={{color:"white",marginTop:'65px',fontWeight:"600px",fontSize:"24px"}}>Welcome to INTERVIEW XPERT</h1>
           </div>
           <hr style={{color:"#9E9E9E",marginTop:"10px",width:"100%",margin:"auto"}} />
           <div style={{display:"flex",margin:"auto"}} className="main" >
            <div style={{margin:"auto",width:"600px",display:"block"}}>
            <img  style={{width:"100%",marginTop:"100px"}} src="https://www.europarl.europa.eu/resources/library/images/20230607PHT95601/20230607PHT95601_original.jpg" alt="" />
            </div>
           
            <div style={{color:"white", fontWeight:"600px",margin:"auto",textAlign:"justify",fontSize:"18px",padding:"6px",width:'800px'}}>
                <div style={{display:'flex',flexDirection:"row",marginTop:"100px"}}>
                    <div style={{margin:"auto"}}>
                    <BsFillQuestionOctagonFill style={{margin:"auto",width:"50px",height:"25px"}}/>
                    </div>
                    <div >
                    <p>Asupportive Q & A section assists users in interview preparation by providing valuable and thoughtful solutions.</p>
                    </div>
                </div>
                <div style={{marginTop:"40px",display:'flex',flexDirection:"row"}}>
                    <div style={{margin:"auto"}}>
                    <TbBrandSpeedtest style={{margin:"auto",width:"50px",height:"25px"}}/>
                    </div>
                    <div style={{gap:"5px"}}>
                    <p>INTERVIEW XPERT offers digital interview support that assists users in preparing for effective interviews.</p>
                    </div>
                </div>
                <div  style={{marginTop:"40px",display:'flex',flexDirection:"row"}}>
                    <div style={{margin:"auto"}}>
                    <MdFeedback style={{margin:"auto",width:"50px",height:"25px"}}/>
                    </div>
                    <div style={{gap:"5px"}}>
                    <p>A Live Feedback support to the user with in a second. Our cutting-edge system ensures that users receive immediate guidance and insights, allowing them to optimize their performance and enhance their overall interview preparation.</p>
                    </div>
                </div>
                <div  style={{marginTop:"40px",display:'flex',flexDirection:"row"}}>
                    <div style={{margin:"auto"}}>
                    <FaRegNoteSticky style={{margin:"auto",width:"50px",height:"25px"}}/>
                    </div>
                    <div style={{gap:"5px"}}>
                    <p>Can you please provide us with any questions? We have online notes available to assist you with your preparation.</p>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
        
    </div>
  }
  