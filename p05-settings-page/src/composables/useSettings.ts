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

export function useSettings() {
  return { general };
}
