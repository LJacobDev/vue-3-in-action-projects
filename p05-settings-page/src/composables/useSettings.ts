interface GeneralSettings {
  name: string;
  email: string;
  about: string;
  gender: string;
  country: string;
}

import { ref } from 'vue';


interface SettingsMap {
  general: GeneralSettings;
  privacy: PrivacySettings;
  notifications: NotificationsSettings;
}

type SettingsKey = keyof SettingsMap;


const initSettings = <T extends SettingsKey>(key: T, defaults: SettingsMap[T]) => {
  const storedSettings = localStorage.getItem(key);

  return storedSettings !== null
    ? JSON.parse(storedSettings)
    : defaults

}

const general = ref<GeneralSettings>(
  initSettings<GeneralSettings>('general', {
    name: '',
    email: '',
    about: '',
    gender: 'male',
    country: 'Canada',
  }));


type Visibility = 'public' | 'private';

interface PrivacySettings {
  visibility: Visibility;
  searchEngineIndexing: boolean;
}

const privacy = ref<PrivacySettings>(
  initSettings<PrivacySettings>('privacy', {
    visibility: 'private',
    searchEngineIndexing: false,
  })
);


interface NotificationsSettings {
  email: boolean;
  sms: boolean;
}

const notifications = ref<NotificationsSettings>(
  initSettings<NotificationsSettings>('notifications', {
    email: false,
    sms: false,
  })
)

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
