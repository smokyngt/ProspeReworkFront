import type { getDemoUi } from "./demo-ui";
import type { Step } from "react-joyride";
export function getGuidedTourSteps(
  ui: ReturnType<typeof getDemoUi>,
  isMobile = false,
): Step[] {
  const edgePlacement = isMobile ? "center" : "right";
  const documentPlacement = isMobile ? "center" : "left";

  return [
    {
      content: ui.tourSidebarContent,
      placement: edgePlacement,
      skipBeacon: true,
      skipScroll: true,
      spotlightPadding: 8,
      target: "[data-demo-tour='threads']",
      title: ui.tourSidebarTitle,
    },
    {
      content: ui.tourCloseSidebarContent,
      placement: edgePlacement,
      skipBeacon: true,
      skipScroll: true,
      spotlightPadding: 8,
      target: "[data-demo-tour='thread-close']",
      title: ui.tourCloseSidebarTitle,
    },
    {
      content: ui.tourSendContent,
      placement: isMobile ? "center" : "top",
      skipBeacon: true,
      skipScroll: true,
      target: "[data-demo-tour='send']",
      title: ui.tourSendTitle,
    },
    {
      content: ui.tourOrchestrationContent,
      placement: "center",
      skipBeacon: true,
      skipScroll: true,
      targetWaitTimeout: 8000,
      target: "[data-demo-tour='chat-ui']",
      title: ui.tourOrchestrationTitle,
    },
    {
      content: ui.tourSourcesContent,
      placement: documentPlacement,
      skipBeacon: true,
      skipScroll: true,
      targetWaitTimeout: 8000,
      target: "[data-demo-tour='citations']",
      title: ui.tourSourcesTitle,
    },
    {
      content: ui.tourPdfContent,
      placement: documentPlacement,
      skipBeacon: true,
      skipScroll: true,
      targetWaitTimeout: 8000,
      target: "[data-demo-tour='pdf']",
      title: ui.tourPdfTitle,
    },
    {
      content: ui.tourEntitiesContent,
      placement: documentPlacement,
      skipBeacon: true,
      skipScroll: true,
      target: "[data-demo-tour='entities']",
      title: ui.tourEntitiesTitle,
    },
    {
      content: ui.tourMetadataContent,
      placement: documentPlacement,
      skipBeacon: true,
      skipScroll: true,
      target: "[data-demo-tour='entities']",
      title: ui.tourMetadataTitle,
    },
  ];
}
