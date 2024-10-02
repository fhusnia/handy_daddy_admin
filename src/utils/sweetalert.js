import Swal from "sweetalert2";

export const showDeleteAlert = async () => {
  const result = await Swal.fire({
    title: "Are you sure?",
    text: "This action cannot be undone!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Delete it!",
    cancelButtonText: "No, keep it",
    customClass: {
      confirmButton: "bg-red-500 text-white p-4 m-2 w-32",
      cancelButton: "bg-gray-500 text-white p-4 m-2 w-32",
    },
    buttonsStyling: false,
  });
  return result;
};

export const showCancelAlert = async () => {
  const result = await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Cancel it!",
    cancelButtonText: "No, keep it",
    customClass: {
      confirmButton: "bg-yellow-400 text-black p-4 m-2 w-32",
      cancelButton: "bg-gray-500 text-white p-4 m-2 w-32",
    },
    buttonsStyling: false,
  });
  return result;
};

export const showSaveAlert = async () => {
  const result = await Swal.fire({
    title: "Save Changes",
    text: "Do you want to save your changes?",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Save",
    cancelButtonText: "Cancel",
    customClass: {
      confirmButton: "bg-green-500 text-white p-4 m-2 w-32",
      cancelButton: "bg-gray-500 text-white p-4 m-2 w-32",
    },
    buttonsStyling: false,
  });

  return result;
};
