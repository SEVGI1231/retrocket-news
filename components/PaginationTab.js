import { useRouter } from "next/router";
import { Button } from "react-bootstrap";

export function PaginationTab() {
  const router = useRouter();
  let items = [];
  for (let number = 1; number <= 3; number++) {
    items.push(
      <Button
        key={number}
        className="m-2 rounded-pill shadow p-3 "
        variant="outline-secondary"
        size="lg"
        onClick={() => router.push(`/newspages/${number}`)}
      >
        {number}
      </Button>
    );
  }
  return <div>{items}</div>;
}
