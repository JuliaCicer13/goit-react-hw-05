import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound () {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/", { replace: true });
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);
  return <p> 404 The page doesn`t exist. Returne to the previous page</p>
}