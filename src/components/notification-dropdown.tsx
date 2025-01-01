import clsx from "clsx";
import { FC, useState } from "react";
import { FiBell } from "react-icons/fi";

type NotificationDropdownProps = {};

const notifications = [
  {
    id: 1,
    title: "New message",
    description: "You have a new message from John Doe",
    time: "2m ago",
  },
  {
    id: 2,
    title: "New order placed",
    description: "New order has been placed by Jane Doe",
    time: "1h ago",
  },
  {
    id: 3,
    title: "New customer registered",
    description: "New customer has registered",
    time: "5h ago",
  },
  {
    id: 4,
    title: "Product out of stock",
    description: "Product has gone out of stock",
    time: "1d ago",
  },
];

const NotificationDropdown: FC<NotificationDropdownProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex items-center">
      <button
        className="relative hover:text-primary-500 hover:bg-primary-50 p-2 rounded-full transition-colors duration-150"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FiBell size={24} />
        <span className="inline-block h-4 w-4 bg-primary-500 text-xs text-white rounded-full absolute top-1 right-1">
          3
        </span>
      </button>

      <div
        className={clsx(
          "absolute right-0 top-full w-80 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5",
          isOpen ? "block" : "hidden"
        )}
      >
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">Notifications</h2>
        </div>
        <div className="divide-y">
          {notifications.map((notification) => (
            <div key={notification.id} className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold">{notification.title}</h3>
                <small className="text-xs text-gray-400">
                  {notification.time}
                </small>
              </div>
              <p className="text-sm text-gray-500">
                {notification.description}
              </p>
            </div>
          ))}
        </div>

        <div className="p-4 border-t text-center">
          <a href="#" className="text-primary-500 text-sm font-semibold">
            View all
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotificationDropdown;
