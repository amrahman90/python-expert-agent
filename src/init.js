import { mkdir, cp, stat, readdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { homedir } from "node:os";
import { fileURLToPath } from "url";
import { createInterface } from "readline";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function findPackageDir() {
  const binDir = __dirname;
  const packageDir = dirname(binDir);

  if (existsSync(join(packageDir, ".opencode"))) {
    return packageDir;
  }

  throw new Error(
    `Could not find .opencode directory. Package dir: ${packageDir}`
  );
}

async function prompt(message) {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(message, (answer) => {
      rl.close();
      resolve(answer.toLowerCase().trim());
    });
  });
}

async function countFiles(dir) {
  let count = 0;
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory()) {
        count += await countFiles(join(dir, entry.name));
      } else {
        count++;
      }
    }
  } catch {
    // ignore
  }
  return count;
}

export async function init(projectPath, useGlobal, force) {
  const home = homedir();
  let targetBase;

  if (useGlobal) {
    targetBase = join(home, ".config", "opencode");
    console.log(`\n📦 Installing Python Expert Agent globally to: ${targetBase}`);
  } else if (projectPath) {
    targetBase = resolve(projectPath);
    console.log(`\n📦 Installing Python Expert Agent to: ${targetBase}`);
  } else {
    targetBase = process.cwd();
    console.log(`\n📦 Installing Python Expert Agent to: ${targetBase}`);
  }

  const sourceDir = findPackageDir();
  const opencodeSource = join(sourceDir, ".opencode");
  const agentsSource = join(sourceDir, "AGENTS.md");
  const opencodeTarget = join(targetBase, ".opencode");
  const agentsTarget = join(targetBase, "AGENTS.md");

  console.log(`   Source directory: ${sourceDir}`);

  if (!existsSync(opencodeSource)) {
    console.error("Error: Could not find .opencode directory in package");
    process.exit(1);
  }

  const sourceFileCount = await countFiles(opencodeSource);
  console.log(`   Source .opencode contains ${sourceFileCount} files`);

  const opencodeExists = existsSync(opencodeTarget);
  const agentsExists = existsSync(agentsTarget);

  if ((opencodeExists || agentsExists) && !force) {
    console.log("\n⚠️  Existing files detected:");
    if (opencodeExists) console.log("   - .opencode/");
    if (agentsExists) console.log("   - AGENTS.md");

    const answer = await prompt("\nOverwrite existing files? [y/N]: ");

    if (answer !== "y" && answer !== "yes") {
      console.log("\n❌ Installation cancelled.");
      process.exit(0);
    }
  }

  try {
    if (!existsSync(targetBase)) {
      await mkdir(targetBase, { recursive: true });
    }

    if (opencodeExists) {
      console.log("   Removing existing .opencode/...");
      await import("node:fs/promises").then((fs) =>
        fs.rm(opencodeTarget, { recursive: true, force: true })
      );
    }

    console.log("   Copying .opencode/...");
    const excludedPatterns = ['node_modules', 'package.json', 'bun.lock'];
    await cp(opencodeSource, opencodeTarget, {
      recursive: true,
      filter: (src) => {
        // Get path relative to .opencode directory to avoid false positives
        // when the package itself is inside a node_modules folder
        const relativePath = src.slice(opencodeSource.length);
        
        // Normalize path separators for cross-platform compatibility
        const normalizedPath = relativePath.replace(/\\/g, '/');
        
        return !excludedPatterns.some(
          (pattern) =>
            normalizedPath === '/' + pattern ||
            normalizedPath.startsWith('/' + pattern + '/')
        );
      },
    });

    const targetFileCount = await countFiles(opencodeTarget);
    console.log(`   Copied ${targetFileCount} files to .opencode/`);

    if (targetFileCount === 0) {
      console.error("\n❌ Error: No files were copied to .opencode/");
      process.exit(1);
    }

    console.log("   Copying AGENTS.md...");
    await cp(agentsSource, agentsTarget);

    console.log("\n✅ Python Expert Agent installed successfully!\n");

    console.log("Installed components:");
    console.log("   - 1 primary agent (python-expert)");
    console.log("   - 4 subagents (coder, reviewer, tester, scout)");
    console.log("   - 10 skills (fastapi, backend, testing, asyncio, etc.)");
    console.log("   - 3 context files (standards, patterns, security)");
    console.log("   - 9 documentation files");

    console.log("\nNext steps:");
    console.log("   1. Run 'opencode' in your project");
    console.log("   2. The python-expert agent will be auto-detected");
    console.log("   3. Use skills via: skill(name=\"python-fastapi\")");
    console.log("\nDocumentation: https://github.com/amrahman90/python-expert-agent");
  } catch (error) {
    console.error(`\n❌ Error during installation: ${error.message}`);
    console.error(error.stack);
    process.exit(1);
  }
}
