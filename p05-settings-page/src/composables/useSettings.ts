interface GeneralSettings {
  name: string;
  email: string;
  about: string;
  gender: string;
  country: string;
}

import { ref } from 'vue';

const general = ref<GeneralSettings>({
  name: '',
  email: '',
  about: '',
  gender: 'male',
  country: 'Canada',
});

type Visibility = 'public' | 'private';

interface PrivacySettings {
  visibility: Visibility;
  searchEngineIndexing: boolean;
}

const privacy = ref<PrivacySettings>({
  visibility: 'private',
  searchEngineIndexing: false,
});

export function useSettings() {
  return {
    general,
    privacy,
  };
}
