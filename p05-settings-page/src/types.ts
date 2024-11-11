export type TabKey = 'General' | 'Notifications' | 'Privacy';

export interface Tab {
    key: TabKey;
    display: string;
}
