import React from "react";
import { useMediaQuery } from "react-responsive";

function ProfileTemp() {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  isMobile
    ? (window.location.href = "/profileM")
    : (window.location.href = "/profile");
  return <div></div>;
}

export default ProfileTemp;
