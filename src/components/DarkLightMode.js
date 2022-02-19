import styled from 'styled-components';
import { CgSun } from 'react-icons/cg';
import { HiMoon } from 'react-icons/hi';



const Toggle = styled.div`
  cursor: pointer;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.theme.titleColor};
  color: ${props => props.theme.pageBackground};
  &:focus{
    outline: none;
  }
  transition: all .5s ease;
`;

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.pageBackground};
  transition: all .5s ease;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  padding: 20px;
`;

// const Title = styled.h1`
//   color: ${props => props.theme.titleColor};
//   transition: all .5s ease;
// `;

function DarkLightMode(props) {
  function changeTheme() {
    if (props.theme === "light") {
      props.setTheme("dark");
    }
    else {
      props.setTheme("light");
    }
  };


  const icon = props.theme === "light" ? <HiMoon size={40} /> : <CgSun size={40} />;

  return (
    // <Page>
    <Container>
      <Toggle onClick={changeTheme}>
        {icon}
      </Toggle>
      {/* <Title>Simarjeet - Ren - Erick</Title> */}
      {/* <Tagline>This is our awesome project for finals!</Tagline> */}
    </Container>
    // </Page>
  );

};

export default DarkLightMode;