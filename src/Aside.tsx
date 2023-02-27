import styled from "styled-components";
import BackgroundImage from "./BackgroundImage";
import Header from "./Header";

function Aside(){
    return(
        <div>
           <Header />
           <SidebarStyle>
           <HeadingStyle>
           <div>
           <h4>Choose joke by category</h4>
           </div>
           </HeadingStyle>
           <aside>
            <SideButtons>
            Category 1
            </SideButtons>
            <SideButtons>
            Category 2
            </SideButtons>
            <SideButtons>
            Category 3
            </SideButtons>
            <SideButtons>
            Category 4
            </SideButtons>
           </aside>
           </SidebarStyle> 
           <BackgroundImage />
        </div>
    );
}

const HeadingStyle = styled.h4`
background-color: rgba(107, 8, 72, 0.5);
color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
font-size: 20px;
padding: 8px;
font-family: Poppins-Bold;
`;

const SidebarStyle = styled.aside`
position: absolute;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
background-color: rgba(107, 8, 72, 0.5);
width: 20%;
height: 100%;

`;

const SideButtons = styled.button`
background-color: rgba(107, 8, 72, 1);
color: white;
font-size: 24px;
margin: 14px;
padding: 12px 18px;
border: none;
border-radius: 40px;
font-family: Poppins-Regular;




`;

export default Aside;
 