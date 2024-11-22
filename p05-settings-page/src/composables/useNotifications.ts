interface Notification {
  id: number;
  message: string;
}

import {ref} from 'vue'

const notifications = ref<Notification[]>([]);

function addNotification(message: string) {
  const notification = {
    id: Date.now(),
    message: message,
  };
  notifications.value.push(notification);

  setTimeout(() => removeNotification(notification.id), 3000);
}

function removeNotification(id: number) {
  notifications.value = notifications.value.filter((notification) => notification.id !== id)
}

export default function useNotifications() {
  return {
    notifications,
    addNotification,
    removeNotification,
  };
}
