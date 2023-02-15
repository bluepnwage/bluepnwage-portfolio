export function CodeBlock(props: any) {
  return (
    <pre {...props} className="relative border border-outline dark:border-zinc-700">
      {props.children}
    </pre>
  );
}
