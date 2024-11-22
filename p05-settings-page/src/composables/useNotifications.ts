interface Notification {
  id: number;
  message: string;
}

let notifications: Notification[] = [];

function addNotification(message: string) {
  const notification = {
    id: Date.now(),
    message: message,
  };
  notifications.push(notification);

  setTimeout(() => removeNotification(notification.id), 5000);
}

function removeNotification(id: number) {
  notifications = notifications.filter((notification) => notification.id !== id)
}

export default function useNotifications() {
  return {
    notifications,
    addNotification,
    removeNotification,
  };
}
