import { SubscriptionType } from 'shared/types/Subsription';

const subscriptions: SubscriptionType[] = [
  {
    id: 1,
    title: 'Месяц',
    description:
      'Полный доступ ко всей музыке, офлайн-режим и персональные плейлисты. Отмена — в любой момент.',
    cost: 150,
    total: 150,
    discount: null,
    symbol: '₽',
    bg: '#bac7ffff',
    colorSelect: '#0338f5ff',
  },
  {
    id: 2,
    title: 'Год',
    cost: 150 * 12,
    total: 150 * 12 - Math.round(150 * 0.15),
    discount: 15,
    symbol: '₽',
    bg: '#a2fcd3ff',
    description:
      'Экономия 15% на всё то же. Платите один раз и слушайте целый год без забот. Лучшее предложение!',
    colorSelect: '#019e48ff',
  },
];

export const getSubscriptions = async () => {
  return new Promise<SubscriptionType[]>(resolve => {
    setTimeout(() => {
      resolve(subscriptions);
    }, 2000);
  });
};

export const getSubscription = async ({ id }: { id: number }) => {
  return new Promise<SubscriptionType | undefined>(resolve => {
    setTimeout(() => {
      const finded = subscriptions.find(i => i.id === id);

      resolve(finded!);
    });
  });
};
