"use client";

const origReplaceState = history.replaceState;

history.replaceState = function () {
  const rv = origReplaceState.apply(this, arguments as any);
  const event = new Event("replaceState");
  (event as any).arguments = arguments;
  window.dispatchEvent(event);
  return rv;
};
