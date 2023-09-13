import { Card, Nav, Image, Container, Stack } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
      <main>
        <Card className="navbar">
          <Card>
            <Container>
              <Stack direction="horizontal" className="user-profile">
                {/* <Col> */}
                <Image
                  src="https://static.vecteezy.com/system/resources/thumbnails/019/514/242/small/confused-tom-cartoon-expression-free-vector.jpg"
                  style={{ height: "3rem", width: "3rem" }}
                  roundedCircle
                />
                {/* </Col> */}
                {/* <Col> */}
                <p>Thomas</p>
                {/* </Col> */}
              </Stack>
            </Container>
          </Card>
          <Nav className="flex-column">
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link>Section 1</Nav.Link>
            <Nav.Link>Section 2</Nav.Link>
            <Nav.Link>Section 3</Nav.Link>
          </Nav>
        </Card>
        <section style={{ marginLeft: "10rem", padding: "0 1rem" }}>
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default DashboardLayout;
