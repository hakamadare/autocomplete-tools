# Contributing to some autocomplete package
Hey there! We are glad you want to contribute to some autocomplete package, hereby are mentioned some generic instructions, but you should refer to each package CONTRIBUTING.md file to learn more.

- [`@withfig/autocomplete-types`](types/CONTRIBUTING.md)
- [`@fig/complete-commander`](integrations/commander/CONTRIBUTING.md)
- [`click_complete_fig`](integrations/click/CONTRIBUTING.md)

## Generic workflow

1. Open an issue to get some feedback from the Fig team on your problem so that you don't risk to waste hours of work
2. Once you got some feedback you can fork the repo and clone in on your machine
3. Run `yarn` in the root of the monorepo to get the deps installed
4. Work on the new feature/fix
5. Push to your fork
6. Open a PR
7. Enjoy the feat/fix live!

## Structure of the repo

We are using yarn workspaces in this repo. All CLIs are under the cli/ folder, while most of the other packages are in the root of the repo.
Concerning `npm` commands there are some global ones available from the root of the monorepo and some other relative to the packages.

## What is a good PR?

A good PR should have tests if applicable and some kind of description telling what changes were done.