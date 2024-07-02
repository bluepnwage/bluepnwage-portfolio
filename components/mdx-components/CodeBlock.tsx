import { CopyButton } from "components/CopyButton";

export function CodeBlock(props: any) {
  return (
    <pre
      {...props}
      className="relative border border-outline rounded p-4  border-neutral-600 bg-neutral-800 my-10"
    >
      <CopyButton />
      {props.children}
    </pre>
  );
}
