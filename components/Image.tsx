import NextImage, { ImageProps } from "next/future/image";
import { useState } from "react";
import { Skeleton } from "@mantine/core";

interface PropTypes extends ImageProps {}

export function Image(props: PropTypes) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Skeleton visible={loading}>
        <NextImage onLoadingComplete={() => setLoading(false)} {...props} />
      </Skeleton>
    </>
  );
}
