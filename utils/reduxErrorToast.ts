import { toast } from "react-toastify";

export const reduxError = () => {
  toast.error(`Unable to dispatch action`, {
    theme: "dark",
  });
};
