import type { NextConfig } from "next";
import path from "path";
import os from "os";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Move .next outside OneDrive to prevent Turbopack cache corruption
  distDir: path.join(os.homedir(), ".blend-next-cache"),
};

export default nextConfig;
