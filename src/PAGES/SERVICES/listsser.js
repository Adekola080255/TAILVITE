import { BsReceiptCutoff } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import { TbMobiledata, TbPhoneCalling, TbCash } from "react-icons/tb";
import { PiTelevisionFill, PiStudentFill } from "react-icons/pi";

const Services = [
  {
    title: "Buy Airtime",
    icon: TbPhoneCalling,
    tab: "airtime",
  },
  {
    title: "Buy Data",
    icon: TbMobiledata,
    tab: "data",
  },
  {
    title: "Airtime to Cash",
    icon: TbCash,
    tab: "airtime-to-cash",
  },
  {
    title: "Cable Subscription",
    icon: PiTelevisionFill,
    tab: "cable-subscription",
  },
  {
    title: "Electrcity Bill",
    icon: BsReceiptCutoff,
    tab: "electricity-bill",
  },
  {
    title: "Bonus Transfer",
    icon: GiReceiveMoney,
    tab: "bonus-transfer",
  },
  {
    title: "Result Checker",
    icon: PiStudentFill,
    tab: "result-checker",
  },
];

export default Services;
