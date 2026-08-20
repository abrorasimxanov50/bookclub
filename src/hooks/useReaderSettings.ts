import { useLocalStorage } from './useLocalStorage';
import type { ReaderSettings } from '../types';

const defaultSettings: ReaderSettings = {
  fontSize: 18,
  lineSpacing: 'comfortable',
  theme: 'light',
  width: 'medium',
};

export function useReaderSettings() {
  const [settings, setSettings] = useLocalStorage<ReaderSettings>('bookclub-reader-settings', defaultSettings);
  return { settings, setSettings };
}
