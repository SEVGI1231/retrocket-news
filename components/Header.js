import Nav from "react-bootstrap/Nav";
import { useRouter } from "next/router";
import Link from "next/link";

export function Header() {
  const router = useRouter();
  return (
    <>
      <Nav justify variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Link href="/newspages/1">Home</Link>
        </Nav.Item>
        <Nav.Item>
          <Link href="/authors">Authors</Link>
        </Nav.Item>
      </Nav>
    </>
  );
}
