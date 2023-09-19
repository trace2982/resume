# Git: A Brief History and Overview
## Install
* [here - use the binary installer on MacOS](https://git-scm.com/downloads)
## History of Git
Git is a version control system that was initially released on April 7, 2005. It was developed by Linus Torvalds in response to the revocation of the free license for BitKeeper, the proprietary source-control management (SCM) system used for Linux kernel development since 2002. Torvalds had specific design criteria for Git, including a requirement that patching should take no more than three seconds.

These criteria were not met by any existing version control system at the time, prompting Torvalds to create Git. Development began on April 3, 2005, and the first merge of multiple branches took place on April 18. Torvalds handed over the maintenance of Git on July 26, 2005, to Junio Hamano, who was responsible for the 1.0 release on December 21, 2005.

## Link between Git and Linux

Git's development was directly tied to the Linux kernel project. The Linux kernel is a large, complex codebase with contributions from thousands of developers around the world. Git was created as a tool to manage the complexity and collaborative nature of this project.

## GIT as a Tree Nursery

Sure! Imagine Git as a bustling tree nursery. Each plant (the repository) starts as a single seed (the initial commit) and grows with time as you add more branches (branching). Just like a botanist would trim or add branches to ensure the tree’s health, developers add new features or changes in their own branches without disturbing the main trunk (the main branch).

When the botanist is satisfied with the growth of a branch, they can graft it back onto the main trunk, making its attributes part of the core tree (merge). Each branch can also spawn offshoots (sub-branches), which can then be grafted back onto their parent branches or the main trunk, similar to the practice of merging in software development.

Sometimes, a botanist might want to try a new type of pruning technique or nutrient, but they don’t want to risk the health of the main tree. They might grow a clone of the original plant (cloning a repository) and experiment on that, without risking any adverse effects on the original plant.

If a disease were to strike one plant, the botanist can always look to the healthiest specimen and duplicate it (revert or checkout to a previous commit), thus ensuring the disease doesn’t wipe out the entire crop.

In this environment, many botanists (developers) can work in harmony, each tending to their own plants and contributing to the overall health of the nursery (the project), while maintaining the freedom to experiment and innovate independently.

This metaphor helps explain Git's functionality, but remember that all metaphors have limitations. Real-world Git usage can be far more complex than managing a tree nursery!


## Common Git Commands

Here are some common Git commands and their use:

- `git init`: This command creates a new Git repository.

- `git clone [url]`: This command is used to obtain a repository from an existing URL.

- `git add [file]`: This command adds a file to the staging area.

- `git commit -m "[Commit message]"`: This command records or snapshots the file permanently in the version history.

- `git status`: This command shows the list of the files that have changed along with the files that are yet to be staged or committed.

- `git push [alias] [branch]`: This command sends the committed changes of master branch to your remote repository.

- `git checkout -b [branch name]`: This command creates a new branch and also switches to it.

- `git pull`: This command fetches and merges changes on the remote server to your working directory.

