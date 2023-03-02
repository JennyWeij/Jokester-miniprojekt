import styled from "styled-components";
import BackgroundImage from "./BackgroundImage";

function SidebarButtons(){
    return(
        <WrapperButtons>
           <BackgroundImage />
           <Buttons>
            <SideButtonTop>Programming</SideButtonTop>
            <SideButtonBottom>General</SideButtonBottom>
            </Buttons>
        </WrapperButtons>
    );
}

const WrapperButtons = styled.div`
display: flex;
position: absolute;
`;

const Buttons = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const SideButtonTop = styled.button`

background-color: rgba(107, 8, 72, 1);
color: white;
font-size: 24px;
margin: 14px;
padding: 12px 18px;
border: none;
border-radius: 40px;
font-family: Poppins-Regular;
width: 200px;
 `;

const SideButtonBottom = styled.button`

background-color: rgba(107, 8, 72, 1);
color: white;
font-size: 24px;
margin: 14px;
padding: 12px 18px;
border: none;
border-radius: 40px;
font-family: Poppins-Regular;
width: 200px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export default SidebarButtons;
