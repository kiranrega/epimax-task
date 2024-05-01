// components/Card.jsx
import React from "react";
import { FiEdit, FiTrash } from "react-icons/fi";

const Card = ({
  title,
  id,
  description,
  assignee,
  handleEdit,
  handleDelete,
  column,
}) => {
  return (
    <div className="rounded border border-neutral-700 bg-neutral-800 p-3">
      <div className="flex justify-between">
        <h3 className="text-sm text-neutral-100">{title}</h3>
      </div>
      <p className="mt-1 text-xs text-neutral-400">{description}</p>
      <div className="flex gap-2 mt-2 items-center justify-between">
        <div className="flex gap-2 mt-2 items-center">
          <button
            onClick={() =>
              handleEdit({ title, id, description, assignee, column })
            }
            className="rounded bg-violet-400 px-2 py-1 text-xs text-neutral-50 transition-colors hover:bg-violet-500"
          >
            <FiEdit />
          </button>
          <button
            onClick={() => handleDelete(id)}
            className="rounded bg-red-400 px-2 py-1 text-xs text-neutral-50 transition-colors hover:bg-red-500"
          >
            <FiTrash />
          </button>
        </div>
        <div>
          {assignee && (
            <p className="mt-1 text-sm text-neutral-400 ">
              Assigned to:{" "}
              <span className="font-bold text-cyan-400">{assignee}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
