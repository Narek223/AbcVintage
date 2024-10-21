import { useNavigate } from "react-router-dom";

export const scrollToSection = (ref, navigate, path) => {
  if (ref.current) {
    ref.current.scrollIntoView({ behavior: "smooth" });
    if (path) {
      navigate(path);
    }
  }
};
