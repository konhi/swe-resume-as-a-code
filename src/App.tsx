import { getResumeVersion } from "./versions/registry";

function useResumeVersion() {
  const params = new URLSearchParams(window.location.search);
  return params.get("version");
}

function App() {
  const versionId = useResumeVersion();
  const { Component } = getResumeVersion(versionId);

  return <Component />;
}

export { App };
