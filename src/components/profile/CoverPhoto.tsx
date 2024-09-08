import React from "react";

type Props = {
  userId: string;
};

export default function CoverPhoto({ userId }: Props): JSX.Element {
  return <section>CoverPhoto of {userId}</section>;
}
