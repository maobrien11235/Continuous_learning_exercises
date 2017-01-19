#Lesson 3
##Merge Conflict Example
This lesson will cover a simple merge conflict within git. I will be using the code example found online here: https://coderwall.com/p/o1psnw/handle-a-git-merge-conflict. The code for the files used can be found in the corresponding repo here: https://github.com/connor11528/mergeConflicting/commit/b6e98b1643cd5befa7303bdf0653e322f445bdd1.

##Useful Commands for Merging 

- `git merge <branch>` == merges the branch the user is currently on with the named <branch>.
- `git mergetool` == opens up the configured mergetool in your git tool. In the lesson, I was using git BASH with vim installed, so vimdiff was the configured options for mergetool.
- `git diff -b` == shows differences in files between the current branch and other branches.
- `git merge --abort` == cancels an in-progress merge.
- `git diff --ours` == shows the differences in the current branch (our branch) to the other branch we are merging .
- `git diff --theirs` == shows the differences in the other branch (their branch) to the current branch.
- `git diff --base` == shows the differences from both sides. That is, it shows the diff of both --ours and --theirs.
- `git checkout <branch>` == change branch from current to the named <branch>.

##Commands for vimdiff
- `:diffget LO` == choose the LOCAL (top left) code version for inclusion in the merged file.
- `:diffget BA` == choose the BASE (top middle) code version for inclusion in the merged file.
- `:diffget RE` == choose the REMOTE (top right) code version for inclusion in the merged file.
- `Ctrl + w` == move cursor to the previous conflict.
- `Ctrl + j` == move cursor to the next conflict.

##Links to Websites Used in Slides
- [Pro Git Book](https://git-scm.com/book/en/v2/Git-Tools-Advanced-Merging)
- [Merge Conflict Example](https://coderwall.com/p/o1psnw/handle-a-git-merge-conflict)


