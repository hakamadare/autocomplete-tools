#! /usr/bin/env node
import { Command } from "commander";

const program = new Command();

program
  .version("1.0.0")
  .command("init", "initialize fig custom spec boilerplate in current directory", {
    executableFile: "scripts/init.sh",
  })
  .command("create-spec [name]", "create spec with given name", {
    executableFile: "scripts/create-spec.sh",
  })
  .command("compile", "compile specs in the current directory", {
    executableFile: "scripts/compile",
  })
  .command("dev", "watch for changes and compile specs", {
    executableFile: "scripts/dev.sh",
  })
  .command("merge <oldspec> <newspec> [updatedspec]", "update the contents of a spec", {
    executableFile: "scripts/merge",
  });
program.parse(process.argv);
