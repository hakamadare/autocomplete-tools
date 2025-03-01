import { Command } from "commander";
import { addCompletionSpecCommand } from "../../../src";

const program = new Command();

program
  .version("0.1.0")
  .argument("<username>", "user to login")
  .argument("[password]", "password for user, if required", "no password given")
  .description("example program for argument")
  .command("generateCompletionSpec")
  .description("Generate a fig spec for the current program")
  .action(() => {
    addCompletionSpecCommand(program);
  });
program.command("remove", "Remove user"); // this should appear even if it is added after `generateCompletionSpec` command

program.parse();
