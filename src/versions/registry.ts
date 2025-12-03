import type { ComponentType } from "react";
import { FullStackResume } from "./FullStackResume";
import { FrontEndResume } from "./FrontEndResume";

type ResumeVersion = {
  id: string;
  outputFileName: string;
  Component: ComponentType;
};

export const RESUME_VERSIONS: Record<string, ResumeVersion> = {
  "full-stack": {
    id: "full-stack",
    outputFileName: "Jan_Szymanski_FullStack_Resume.pdf",
    Component: FullStackResume,
  },
  "front-end": {
    id: "front-end",
    outputFileName: "Jan_Szymanski_FrontEnd_Resume.pdf",
    Component: FrontEndResume,
  },
};

export const DEFAULT_VERSION = "full-stack";

export function getResumeVersion(versionId: string | null): ResumeVersion {
  return (
    RESUME_VERSIONS[versionId ?? DEFAULT_VERSION] ??
    RESUME_VERSIONS[DEFAULT_VERSION]
  );
}