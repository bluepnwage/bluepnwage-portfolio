export function List(props: any) {
  return (
    <ul
      {...props}
      style={{ listStyle: "inside" }}
      className="list-class space-y-2 list-disc"
    >
      {props.children}
    </ul>
  );
}
