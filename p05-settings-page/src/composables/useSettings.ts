interface GeneralSettings {
  name: string;
  email: string;
  about: string;
  gender: string;
  country: string;
}

import { ref } from 'vue';

const general = ref<GeneralSettings>((() => {
  const storage = localStorage.getItem('general');

  return storage ? JSON.parse(storage) : {
    name: '',
    email: '',
    about: '',
    gender: 'male',
    country: 'Canada',
  }

})());


type Visibility = 'public' | 'private';

interface PrivacySettings {
  visibility: Visibility;
  searchEngineIndexing: boolean;
}

const privacy = ref<PrivacySettings>({
  visibility: 'private',
  searchEngineIndexing: false,
});


interface NotificationsSettings {
  email: boolean;
  sms: boolean;
}

const notifications = ref<NotificationsSettings>({
  email: false,
  sms: false,
})

const saveSettings = () => {
  localStorage.setItem('general', JSON.stringify(general.value));
  localStorage.setItem('privacy', JSON.stringify(privacy.value));
  localStorage.setItem('notifications', JSON.stringify(notifications.value));
}

export function useSettings() {
  return {
    general,
    privacy,
    notifications,
    saveSettings,
  };
}
