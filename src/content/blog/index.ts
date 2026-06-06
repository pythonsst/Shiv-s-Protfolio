import type { ComponentType } from "react";

import StartupOneManArmyToLeaderBody from "./startup-one-man-army-to-leader";
import ScalingMobileAppsBody from "./scaling-mobile-apps-100k-downloads";
import StartupEngineeringBody from "./startup-engineering-one-man-army";
import ModernWebDevelopmentBody from "./modern-web-development-react-typescript";
import FullstackDevelopmentBody from "./fullstack-development-end-to-end";
import StartupTechnicalLeadershipBody from "./startup-technical-leadership";
import DevopsCicdBody from "./devops-cicd-automation-deployment";

/** Maps a post slug to its article-body component. A post renders only if it appears here. */
export const blogContent: Record<string, ComponentType> = {
  "startup-one-man-army-to-leader": StartupOneManArmyToLeaderBody,
  "scaling-mobile-apps-100k-downloads": ScalingMobileAppsBody,
  "startup-engineering-one-man-army": StartupEngineeringBody,
  "modern-web-development-react-typescript": ModernWebDevelopmentBody,
  "fullstack-development-end-to-end": FullstackDevelopmentBody,
  "startup-technical-leadership": StartupTechnicalLeadershipBody,
  "devops-cicd-automation-deployment": DevopsCicdBody,
};
