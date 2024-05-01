import React from "react";
import { FiPlus } from "react-icons/fi";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ASSIGNEE_OPTIONS, COLUMN_OPTIONS } from "../config";

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  column: Yup.string().required("Status is required"),
  assignee: Yup.string().required("Assignee is required"),
  description: Yup.string().required("Description is required"),
});

const AddCardModal = ({ isOpen, onClose, onSubmit, initialValues }) => {
  const formik = useFormik({
    initialValues: initialValues || {
      id: initialValues?.id || "",
      title: "",
      description: "",
      column: "",
      assignee: "",
    },
    validationSchema,
    onSubmit: (values) => {
      onSubmit(values);
      formik.resetForm();
    },
    enableReinitialize: true,
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md rounded-lg bg-neutral-800 text-neutral-50">
        <form onSubmit={formik.handleSubmit} className="p-6">
          <h2 className="mb-4 text-xl font-bold">Add Card</h2>
          <div className="mb-4">
            <label htmlFor="title" className="mb-2 block font-medium">
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Enter Your Title..."
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full rounded border ${
                formik.touched.title && formik.errors.title
                  ? "border-red-500 bg-red-500/20"
                  : "border-violet-400 bg-violet-400/20"
              } p-3 text-sm text-neutral-50 placeholder-violet-300 focus:outline-0`}
            />
            {formik.touched.title && formik.errors.title && (
              <div className="mt-1 text-sm text-red-500">
                {formik.errors.title}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="mb-2 block font-medium">
              Description
            </label>
            <textarea
              id="description"
              placeholder="Enter Your Decription..."
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full rounded border ${
                formik.touched.description && formik.errors.description
                  ? "border-red-500 bg-red-500/20"
                  : "border-violet-400 bg-violet-400/20"
              } p-3 text-sm text-neutral-50 placeholder-violet-300 focus:outline-0`}
              rows={3}
            />
            {formik.touched.description && formik.errors.description && (
              <div className="mt-1 text-sm text-red-500">
                {formik.errors.description}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="column" className="mb-2 block font-medium">
              Status
            </label>
            <select
              id="column"
              value={formik.values.column}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full rounded border ${
                formik.touched.column && formik.errors.column
                  ? "border-red-500 bg-red-500/20"
                  : "border-violet-400 bg-violet-400/20"
              } p-3 text-sm text-neutral-50 placeholder-violet-300 focus:outline-0`}
            >
              {COLUMN_OPTIONS.map((option, index) => (
                <option
                  disabled={option.isDisabled}
                  value={option.value}
                  style={{
                    color: option.isDisabled ? "#999" : "#000", // Adjust colors as needed
                    fontWeight: option.isDisabled ? "normal" : "semibold",
                  }}
                  key={option.value}
                >
                  {option.label}
                </option>
              ))}
            </select>
            {formik.touched.column && formik.errors.column && (
              <div className="mt-1 text-sm text-red-500">
                {formik.errors.column}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="assignee" className="mb-2 block font-medium">
              Assignee
            </label>
            <select
              id="assignee"
              value={formik.values.assignee}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full rounded border ${
                formik.touched.description && formik.errors.description
                  ? "border-red-500 bg-red-500/20"
                  : "border-violet-400 bg-violet-400/20"
              } p-3 text-sm text-neutral-50 placeholder-violet-300 focus:outline-0`}
            >
              {ASSIGNEE_OPTIONS.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  disabled={option.isDisabled}
                  style={{
                    color: option.isDisabled ? "#999" : "#000", // Adjust colors as needed
                    fontWeight: option.isDisabled ? "normal" : "semibold",
                  }}
                >
                  {option.label}
                </option>
              ))}
            </select>
            {formik.touched.assignee && formik.errors.assignee && (
              <div className="mt-1 text-sm text-red-500">
                {formik.errors.assignee}
              </div>
            )}
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => {
                onClose();
                formik.resetForm();
              }}
              className="rounded bg-neutral-700 px-4 py-2 text-sm text-neutral-50 transition-colors hover:bg-neutral-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              // disabled={!(formik.isValid && formik.dirty)}
              className="flex items-center gap-1.5 rounded bg-violet-400 px-4 py-2 text-sm transition-colors hover:bg-violet-500 disabled:bg-violet-400/50 disabled:hover:bg-violet-400/50"
            >
              <span>Add</span>
              <FiPlus />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCardModal;
