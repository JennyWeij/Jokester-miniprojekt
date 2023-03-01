import { Link } from "react-router-dom";
import styled from "styled-components";
import BackgroundImage from "./BackgroundImage";
import Header from "./Header";


function Aside(){
    return(
        <div>
            <Header />
            <HeadingStyle>
                <div>
                <h4>Choose your category</h4>
                </div>
                
                </HeadingStyle>
          <BackgroundImage />
        
           <SidebarStyle>
           
            <aside>
            <nav>
                <ul>
                    <li><SidebarLinks to="programming">Programming</SidebarLinks></li>
                    <li><SidebarLinks to="general">General</SidebarLinks></li>
                </ul>
            </nav>
            </aside>
           
           </SidebarStyle>
          
        </div>
    );
}

const SidebarLinks = styled(Link)`
background-color: rgba(107, 8, 72, 1);
color: white;
font-size: 24px;
display: flex;
flex-direction: column;
justify-content: center;
margin: 24px;
padding: 10px 16px;
list-style: none;
text-decoration: none;
border: none;
border-radius: 40px;
font-family: Poppins-Regular;
`;

const SidebarStyle = styled.aside`
position: absolute;
display: flex;
flex-direction: column;
justify-content: center;
background-color: rgba(107, 8, 72, 0.5);
width: 20%;
height: 100%;
`;

const HeadingStyle = styled.div`
background-color: rgba(107, 8, 72, 0.5);
color: white;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start ;
font-size: 20px;
padding: 8px;
font-family: Poppins-Bold;
`;

export default Aside;
 