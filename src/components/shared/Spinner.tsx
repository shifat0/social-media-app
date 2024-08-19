import Icon from "@/lib/icon";
import React from "react";

type Props = { label?: string };

export default function Spinner({ label }: Props) {
  return (
    <div className="flex items-center gap-3">
      <Icon name="loader-circle" className="animate-spin" />
      <span>{label ? label : "Submitting ..."}</span>
    </div>
  );
}
