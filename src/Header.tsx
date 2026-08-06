import React from "react";

interface HeaderProps {
  name?: string;
  email?: string;
  onLogout?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  name = "Jane Doe",
  email = "jane.doe@example.com",
  onLogout,
}) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
      return;
    }
    window.location.href = "/";
  };

  return (
    <header className="w-full bg-white shadow-sm px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-end gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-700">
            {initials}
          </div>
          <div className="flex flex-col text-right">
            <span className="text-sm font-medium text-gray-800">{name}</span>
            <span className="text-xs text-gray-500">{email}</span>
          </div>
          <button
            onClick={handleLogout}
            className="ml-4 px-3 py-1 text-sm bg-red-50 text-red-600 border border-red-100 rounded hover:bg-red-100 transition"
            type="button"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
