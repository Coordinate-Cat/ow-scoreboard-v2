import { useEffect } from "react";
import { MAX } from "../const/const";

export const useError = (win: number, lose: number, draw: number) => {
  useEffect(() => {
    const errorElement = document.getElementById("error");
    if (errorElement) {
      if (win === MAX || lose === MAX || draw === MAX) {
        errorElement.style.display = "flex";
      } else {
        errorElement.style.display = "none";
      }
    }
  }, [win, lose, draw]);
};
