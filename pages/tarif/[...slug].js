import { useRouter } from "next/router";
import React from "react";

function slug() {
  const router = useRouter();
  const { slug } = router.query;
  return <p>Post: {slug}</p>;
}

export default slug;
