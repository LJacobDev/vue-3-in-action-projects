interface Notification {
  id: number;
  message: string;
}

import { ref } from 'vue';

const notifications = ref<Notification[]>([]);

const addNotification = (message: string) => {
  const notification = {
    id: Date.now(),
    message: message,
  };
  notifications.value.push(notification);

  setTimeout(() => removeNotification(notification.id), 1000);
};

const removeNotification = (id: number) => {
  notifications.value = notifications.value.filter((notification) => notification.id !== id);
};

export default function useNotifications() {
  return {
    notifications,
    addNotification,
    removeNotification,
  };
}
