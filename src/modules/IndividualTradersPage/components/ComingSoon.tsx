import React from "react";

import { notification } from "antd";
import Image from "next/image";

import PrimaryButton from "@/components/PrimaryButton";
import mixpanelAnalytics from "@/utils/Analytics/mixpanel";

const ComingSoon = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-5">
      <Image
        src="/assets/images/pie-chart.png"
        alt="Pie Chart"
        width={100}
        height={100}
        unoptimized
      />
      <p className="text-black-900 text-lg font-medium">
        More Charts and Analysis
      </p>
      <p className="text-black-700 text-sm">Coming Soon</p>
      <PrimaryButton
        className="!w-2/3"
        onClick={() => {
          mixpanelAnalytics.track("Feature Vote", {
            featureName: "detailed chart analysis",
          });
          notification.success({
            message: "Vote Submitted",
          });
        }}
      >
        Vote for detailed chart analysis feature
      </PrimaryButton>
    </div>
  );
};

export default ComingSoon;
