import React, { useMemo } from "react";
import { useRecoilValue } from "recoil";
import {
  finalMeValue,
  homeAtom,
  jobsAtom,
  networkAtom,
  notificationAtom,
} from "../store/atoms/linkdin";

const Navigation = () => {
  const notificationVal = useRecoilValue(notificationAtom);
  const jobsVal = useRecoilValue(jobsAtom);
  const networkValue = useRecoilValue(networkAtom);
  const homeValue = useRecoilValue(homeAtom);

  //   this is not optimized way of finding final value
  //   const meValue = notificationVal + jobsVal + networkValue + homeValue;

  // at least we should use useMemo of react
  //   const finalMeValue = useMemo(() => {
  //     return notificationVal + jobsVal + networkValue + homeValue;
  //   }, [notificationVal, jobsVal, networkValue, homeValue]);

  //   use optimize way provided by recoil
  const getFinalValue = useRecoilValue(finalMeValue);
  console.log("getFinalValue: ", getFinalValue);

  return (
    <div>
      <button>Home {homeValue > 99 ? "99+" : homeValue} </button>
      <button>my network( {networkValue > 99 ? "99+" : networkValue}) </button>
      <button>my jobs {jobsVal > 99 ? "99+" : jobsVal} </button>
      <button>
        notifications {notificationVal > 99 ? "99+" : notificationVal}
      </button>
      <button>me {getFinalValue} </button>
    </div>
  );
};

export default Navigation;
