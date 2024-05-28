import Swal from "sweetalert2";

const swalConfig = {
  width: 600,
  padding: "3em",
  color: "#114c5f",
  background: "#fff url(https://sweetalert2.github.io/images/trees.png)",
  backdrop: `
    rgba(0, 98, 123, 0.26)
    url("https://sweetalert2.github.io/images/nyan-cat.gif")
    left top
    no-repeat
  `,
  confirmButtonColor: "#9cd2d3",
  showCancelButton: true,
  showCloseButton: true,
};

export const showAlert = (title) => {
  Swal.fire({
    ...swalConfig,
    title,
  });
};
