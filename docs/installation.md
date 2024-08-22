# Installation

## Github Actions

Prebuilt binaries are available from [Github Actions](https://github.com/packwiz/packwiz/actions). The UI can be confusing. Follow the steps below to navigate the site and download the package.

| ![github-actions-filter](/docs/assets/github-actions-filter.png) |
|:--:|
| *On the left panel, select the `Go` option to filter to the pre-built packages* |

| ![github-actions-list](/docs/assets/github-actions-list.png) |
|:--:|
| *In the main panel, select the topmost/latest build from the `workflow runs` list* |

| ![github-actions-artifacts](/docs/assets/github-actions-artifacts.png) |
|:--:|
| *Download the zip file for your system at the bottom of the page from the `Artifacts` panel* |

Extract the executable from the downloaded zip file. To run the executable, add the folder where you downloaded it to your PATH environment variable or move it to where you want to use it.

## Adding the Executable to Your PATH

The method to add items to your PATH depends on your operating system and the shell environment that your system is running.

### Windows

Windows, unfortunately, makes this more confusing, as the settings are hidden behind several menus. If you are on a Windows device, then [this tutorial](https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/) will walk you through the process.

### macOS and Linux

For those on Mac, depending on the age of your device, you may be running either BASH or ZSH as your shell. Newer devices ship with ZSH by default.

For those on Linux, which shell you are running will vary depending on your distribution, but the majority ship with BASH by default.

You can always verify which shell your system is using by running the command `echo $SHELL` in your terminal. You will see a print out of something similar to `/bin/zsh` if you are running ZSH or `/bin/bash` if you are running BASH.

Regardless of what shell you are running, the setup will be very similar. That said, I have included tutorials links that are specific to both BASH and ZSH, respectively, as those are two of the more popular options. If you are using a different shell, then you will need to research the specifics on your own.

- [BASH tutorial](https://www.cyberciti.biz/faq/appleosx-bash-unix-change-set-path-environment-variable/)
- [ZSH tutorial](https://www.geeksforgeeks.org/add-a-directory-to-path-in-zsh/)

## Unable to download from Github

If you don't have a GitHub account or are unable to download directly from GitHub, you can also use [nightly.link](https://nightly.link/packwiz/packwiz/workflows/go/main).

## Compile from Source

In the future, I will have a lot more installation options, but you can also compile from source.

1. Install Go (1.19 or newer) from [golang.org](https://golang.org/dl/)
2. Run `go install github.com/packwiz/packwiz@latest`. Be patient, it has to download and compile dependencies as well!

> NOTE: Go does not always add the installed programs to your PATH when downloading. As a result, you will likely need to add `~/go/bin` to your PATH manually. If you are unsure how to do this, please follow the guide above for [adding the executable to your PATH](#adding-the-executable-to-your-path)
