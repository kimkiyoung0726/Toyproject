import { cp, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const target = resolve(root, "public", "editable");

await rm(target, { recursive: true, force: true });
await mkdir(target, { recursive: true });
await cp(resolve(root, "index.html"), resolve(target, "index.html"));
await cp(resolve(root, "css"), resolve(target, "css"), { recursive: true });
await cp(resolve(root, "js"), resolve(target, "js"), { recursive: true });
await cp(resolve(root, "img"), resolve(target, "img"), { recursive: true });

console.log("Editable FITTORY files synced.");
