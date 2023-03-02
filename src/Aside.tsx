import { Link } from "react-router-dom";
import styled from "styled-components";
import BackgroundImage from "./BackgroundImage";
import ErrorBoundary from "./ErrorBoundary";
import Header from "./Header";


function Aside(){
    return(
        <div>
            <Header />
            <BackgroundImage />
            <SidebarStyle>
            <HeadingStyle>
             <div>
                <h4>Choose joke by category</h4>
             </div>
            </HeadingStyle>
               <ErrorBoundary>
               <aside>
                    <nav>
                        <ul>
                            <li><SidebarLinks to="/menu">Programming</SidebarLinks></li>
                            <li><SidebarLinks to="/menu">General</SidebarLinks></li>
                        </ul>
                    </nav>
                </aside>
               </ErrorBoundary>
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
padding: 10px 14px;
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
width: 16%;
height: 100%;
`;

const HeadingStyle = styled.div`
background-color: rgba(107, 8, 72, 0.5);
color: white;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center ;
text-align: center;
font-size: 20px;
padding: 18px;
font-family: Poppins-Regular;
`;

export default Aside;
 