import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BackgroundImage from "./BackgroundImage";
import Header from "./Header";

function Aside() {
  const [showAside, setShowAside] = useState(true);

  const handleToggleAside = () => {
    setShowAside(!showAside);
  };

  return (
    <div>
      <Header />
      <BackgroundImage />
      <SidebarStyle showAside={showAside}>
        <HeadingStyle>
          <div>
            <h4>Choose joke by category</h4>
          </div>
          <ButtonStyle onClick={handleToggleAside}>
            {showAside ? "Hide the aside" : "Show the aside"}
          </ButtonStyle>
        </HeadingStyle>
        {showAside && (
          <aside>
            <nav>
              <ul>
                <li>
                  <SidebarLinks to="/menu">Programming</SidebarLinks>
                </li>
                <li>
                  <SidebarLinks to="/menu">General</SidebarLinks>
                </li>
              </ul>
            </nav>
          </aside>
        )}
      </SidebarStyle>
    </div>
  );
}

const SidebarLinks = styled(Link)`
  background-color: rgba(107, 8, 72, 1);
  color: white;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 24px;
  padding: 10px 14px;
  list-style: none;
  text-decoration: none;
  border: none;
  border-radius: 40px;
  font-family: PoppinsRegular;
`;

const SidebarStyle = styled.aside`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  background-color: rgba(107, 8, 72, 0.5);
  width: ${(props) => (props.showAside ? "16%" : "0%")};
  height: 100%;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
`;

const HeadingStyle = styled.div`
  background-color: rgba(107, 8, 72, 0.5);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  font-size: 20px;
  padding: 18px;
  font-family: PoppinsRegular;
  margin-top: 0;
`;

const ButtonStyle = styled.button`
  background-color: rgba(107, 8, 72, 1);
  color: white;
  font-size: 15px;
  display: flex;
  justify-content: center;
  margin: 24px;
  padding: 10px 14px;
  list-style: none;
  text-decoration: none;
  border: none;
  border-radius: 40px;
  font-family: PoppinsRegular;
  cursor: pointer;
`;

export default Aside;
