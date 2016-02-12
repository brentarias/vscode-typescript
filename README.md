# vscode-typescript
A "Hello World" sample of Visual Studio Code (v0.10.8) configured with a NPM local-install of TypeScript

##Purpose
The Visual Studio Code site provides an [overview of how to integrate TypeScript](https://code.visualstudio.com/Docs/languages/typescript), 
but the material is not always up-to-date or complete.  For example, the latest edition of VSCode (v0.10.8) is designed to support
the new "Salsa" edition of TypeScript.  That announcement has instructions which encourage a local `npm install typescript` which
supports isolated testing of the new Salsa release.  Unfortunately, the instructions don't work; they are incomplete.

This repository contains the simple "Hello World" code that VSCode documentation discusses, with Typescript already configured properly.
This should serve as a sample and example of how to work with TypeScript in VSCode.

This repository will ony work properly if `npm install` is executed before performing builds.
