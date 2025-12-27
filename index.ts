import fs from "fs";
import path from "path";
import "dotenv/config";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function getCompletion(prompt: string, model = "gpt-5-mini") {
  const response = await client.responses.create({
    model,
    input: prompt,
  });

  return response.output_text;
}

const RUNS_DIR = path.resolve("runs");
const RUNS_FILE = path.join(RUNS_DIR, "runs.json");

type RunEntry = {
  timestamp: string;
  model: string;
  promptPath: string;
  prompt: string;
  output: string;
};

function saveRun(entry: RunEntry) {
  if (!fs.existsSync(RUNS_DIR)) {
    fs.mkdirSync(RUNS_DIR, { recursive: true });
  }

  let runs: RunEntry[] = [];

  if (fs.existsSync(RUNS_FILE)) {
    runs = JSON.parse(fs.readFileSync(RUNS_FILE, "utf-8"));
  }

  runs.push(entry);

  fs.writeFileSync(RUNS_FILE, JSON.stringify(runs, null, 2));
}

function loadPrompt(filePath: string): string {
  const absolutePath = path.resolve(filePath);

  if (!fs.existsSync(absolutePath)) {
    throw new Error(`Prompt file not found: ${absolutePath}`);
  }

  return fs.readFileSync(absolutePath, "utf-8");
}

function parseOrFail(output: string) {
  try {
    const parsed = JSON.parse(output);
    console.log("JSON válido ✅", parsed);
    return parsed;
  } catch (err) {
    console.error("JSON inválido ❌");
    console.error(output);
    throw err;
  }
}

function validateResponse(output: any) {
  const result = parseOrFail(output);

  if (typeof result.resumen_es !== "string") console.log("Resumen inválido");
  if (typeof result.cantidad_nombres !== "number")
    console.log("Cantidad inválida");
}

async function main() {
  //const promptPath = "prompts/01_basics/zero-shot.md";
  const promptPath = "prompts/course/basic_prompt.md";

  const model = "gpt-5-mini";

  const prompt = loadPrompt(promptPath);

  const out = await getCompletion(prompt, model);

  console.log("=== OUTPUT ===");
  console.log(out);

  saveRun({
    timestamp: new Date().toISOString(),
    model,
    promptPath: promptPath,
    prompt: prompt,
    output: out,
  });
}

main().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
