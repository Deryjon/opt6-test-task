import beskonecIcon from '@/assets/icons/beskonec.svg';
import mapIcon from '@/assets/icons/map.svg';
import agreeIcon from '@/assets/icons/agree.svg';
import colocolIcon from '@/assets/icons/colocol.svg';
import zametkaIcon from '@/assets/icons/zametka.svg';
import repeatTimeIcon from '@/assets/icons/repeat-time.svg';

export interface IMenuItem {
  name: string;
  desc: string;
  icon: string;
}

export const CARD_DATA: IMenuItem[] = [
  {
    name: "Неограниченый автопарк",
    icon: beskonecIcon,
    desc: "Можно добавить неограниченное кол-во машин и водителей",
  },
  {
    name: "Сокращение затрат до 50%",
    icon: mapIcon,
    desc: "Максимально быстро узнаете о штрафах в автоматическом режиме, тем самым у вас есть время оплатить по скидке",
  },
  {
    name: "Безопасность",
    icon: agreeIcon,
    desc: "Данные передаются в зашифрованном виде, они доступны только получателю",
  },
  {
    name: "Уведомление о погашении",
    icon: colocolIcon,
    desc: "Мы оповестим вас о том, что штраф был погашен и соответствующая запись создана в ГИС ГМП",
  },
  {
    name: "Квитанция об оплате",
    icon: zametkaIcon,
    desc: "После совершения оплаты банковской картой на Вашу электронную почту придет квитанция об успешной оплате.",
  },
  {
    name: "Все история сохраняется по каждой машине",
    icon: repeatTimeIcon,
    desc: "Вся история штрафов сохраняется по машине и водителю, позволяет анализировать статистику по штрафам",
  },
];
