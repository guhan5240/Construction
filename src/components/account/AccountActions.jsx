import React from "react";

const AccountActions = ({ isEditing, onEditToggle, onDelete, onSignout }) => {
  return (
    // <aside className="bg-white border rounded p-4 space-y-3 lg:sticky lg:top-24">
      <div className="flex ml-40  flex-col gap-2">
        <button
          type="button"
          onClick={onEditToggle}
          className="w-full border px-3 py-2 rounded hover:bg-gray-50"
        >
          {isEditing ? "Finish Editing" : "Edit"}
        </button>
        <button
          type="button"
          onClick={onDelete}
          className="w-full border px-3 py-2 rounded hover:bg-gray-50"
        >
          Delete Account
        </button>
        <button
          type="button"
          onClick={onSignout}
          className="w-full border px-3 py-2 rounded hover:bg-gray-50"
        >
          Sign out
        </button>
      </div>
    // </aside>
  );
};

export default AccountActions;
