import Nav from "react-bootstrap/Nav";
export function Header() {
  return (
    <>
      <Nav justify variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/posts/1">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/authors">Authors</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}
