import React from "react";
import { useParams } from "react-router-dom";

function GameDetailPage() {
  const params = useParams();

  return <div>GameDetailPage: {params.id}</div>;
}

export default GameDetailPage;
