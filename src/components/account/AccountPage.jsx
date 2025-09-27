import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import AccountSidebar from "../components/account/AccountSidebar";
// import AccountActions from "../components/account/AccountActions";
import AccountSidebar from "../account/AccountSidebar";
import AccountActions from "../account/AccountActions";

const Input = (props) => (
  <input
    {...props}
    className={`w-full border p-2 rounded disabled:bg-gray-100 ${props.className || ""}`}
  />
);

const AccountPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const handleEditToggle = () => setIsEditing((v) => !v);

  const handleDelete = () => {
    if (window.confirm("Delete your account? This action cannot be undone.")) {
      // TODO: call your API to delete, then redirect:
      // await api.deleteAccount();
      navigate("/"); // or a goodbye page
    }
  };

  const handleSignout = () => {
    // TODO: sign the user out via your auth logic
    // await auth.signOut();
    navigate("/login");
  };

  const handleSave = (e) => {
    e.preventDefault();
    // TODO: submit form to backend here
    setIsEditing(false);
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-10">
      <h1 className="text-2xl sm:text-3xl font-bold uppercase mb-8">
        Your Account
      </h1>
      <hr className="border-gray-900 mb-8" />

      {/* 4-col on desktop: sidebar | main (2 cols) | right actions */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left: Sidebar nav (Account Details / Orders) */}
        <AccountSidebar />

        {/* Main: Account Details form */}
        <div className="lg:col-span-2 max-w-2xl">
          <form onSubmit={handleSave} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input type="text" placeholder="First Name" disabled={!isEditing} />
              <Input type="text" placeholder="Last Name" disabled={!isEditing} />
            </div>
            <Input type="email" placeholder="Email" disabled={!isEditing} />
            <Input type="text" placeholder="Phone No" disabled={!isEditing} />
            <textarea
              placeholder="Address"
              rows={3}
              disabled={!isEditing}
              className="w-full border p-2 rounded disabled:bg-gray-100"
            />
            {isEditing ? (
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-2 rounded"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="border px-6 py-2 rounded hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            ) : null}
          </form>
        </div>

        {/* Right: Actions (Edit / Delete / Sign out) */}
        <div>
          <AccountActions
            isEditing={isEditing}
            onEditToggle={handleEditToggle}
            onDelete={handleDelete}
            onSignout={handleSignout}
          />
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
