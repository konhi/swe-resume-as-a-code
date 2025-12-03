type LogLevel = "debug" | "info" | "warn" | "error";

function log(level: LogLevel, msg: string, meta?: Record<string, unknown>) {
  const colors: Record<LogLevel, string> = {
    debug: "\x1b[90m", // gray
    info: "\x1b[36m", // cyan
    warn: "\x1b[33m", // yellow
    error: "\x1b[31m", // red
  };
  const reset = "\x1b[0m";

  const metaStr = meta ? " " + JSON.stringify(meta) : "";
  console.log(
    `${colors[level]}[${level.toUpperCase()}]${reset} ${msg}${metaStr}`
  );
}

export const logger = {
  debug: (msg: string, meta?: Record<string, unknown>) =>
    log("debug", msg, meta),
  info: (msg: string, meta?: Record<string, unknown>) =>
    log("info", msg, meta),
  warn: (msg: string, meta?: Record<string, unknown>) =>
    log("warn", msg, meta),
  error: (msg: string, meta?: Record<string, unknown>) =>
    log("error", msg, meta),
}