import NextImage, { ImageProps } from "next/image";

interface PropTypes extends ImageProps {}

export function Image(props: PropTypes) {
  return (
    <>
      <NextImage {...props} />
    </>
  );
}
