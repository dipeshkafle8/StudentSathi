import { toast } from "react-toastify";
export const handleSuccess = msg => {
  toast.success(msg, {
    position: "bottom-center"
  });
};

export const handleError = msg => {
  console.log("handle Error executing");
  toast.error(msg, {
    position: "bottom-center"
  });
};
