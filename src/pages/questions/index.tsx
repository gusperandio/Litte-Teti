import { Accordion } from "react-bootstrap";

export default function Questions() {
  return (
    <Accordion className="mt-5 p-3">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Header 1</Accordion.Header>
        <Accordion.Body>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
