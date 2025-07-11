import { useState } from "react";
import type { ChangeEvent } from "react";

import ContentContainer from "../components/ContentContainer/ContentContainer";

export default function BaybayinPage() {
  const [selectedPage, setSelectedPage] = useState<string>("Home");

  function handleClick(event: ChangeEvent<HTMLSelectElement>) {
    setSelectedPage(event.target.value);
  }

  return (
    <>
      <ContentContainer selectedPage={selectedPage} handleClick={handleClick} />
    </>
  );
}
