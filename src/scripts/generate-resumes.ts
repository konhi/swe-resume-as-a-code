import { mkdirSync } from "node:fs";
import { join } from "node:path";
import puppeteer from "puppeteer";
import { logger } from "../utils/log";

const OUTPUT_DIR = "output";

type ResumeVersion = {
  id: string;
  outputFileName: string;
};

const RESUME_VERSIONS: ResumeVersion[] = [
  { id: "full-stack", outputFileName: "Jan_Szymanski_FullStack_Resume.pdf" },
  { id: "front-end", outputFileName: "Jan_Szymanski_FrontEnd_Resume.pdf" },
];

function ensureOutputDir(): void {
  mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function generatePDF(version: ResumeVersion): Promise<string> {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  const url = `http://localhost:5173?version=${version.id}`;

  logger.info(`Navigating to ${url}...`);
  await page.goto(url, {
    waitUntil: "networkidle0",
    timeout: 30000,
  });

  const outputPath = join(OUTPUT_DIR, version.outputFileName);
  logger.info(`  Generating ${outputPath}...`);
  await page.pdf({
    path: outputPath,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
  });

  await browser.close();
  return version.outputFileName;
}

async function generateAllPDFs(): Promise<void> {
  logger.info("🚀 Starting PDF generation for all resume versions...\n");
  ensureOutputDir();

  for (const version of RESUME_VERSIONS) {
    logger.info(`📄 Generating ${version.id} version...`);
    const outputFile = await generatePDF(version);
    logger.info(`✅ Generated: ${outputFile}\n`);
  }

  logger.info("🎉 All PDFs generated successfully!");
}

generateAllPDFs().catch((error: unknown) => {
  console.error("❌ Error generating PDF:", error);
  process.exit(1);
});
