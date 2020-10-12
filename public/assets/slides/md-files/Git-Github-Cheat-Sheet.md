
# Intro to Git and Github

### What is version control  
> - Allows to Collaborate. Create anything with other people, from academic papers to entire websites and applications
> - Track and revert changes. Mistakes happen. Wouldn't it be nice if you could see the changes that have been made and go "back in time" to fix something that went wrong?

### When Git was founded 
> - In 2005 by Linus Torvalds

### Version Control Types 
> - Centralized Version Control. Ex: CVS, SVN
> - Distributed Version Control. Ex: Git, Mercurial


### How to know if Git is installed 
> - Type ```which git``` on terminal. if not found install from their website: https://git-scm.com/downloads

### Installation and Setup
> - Setup name and email: 
    ``` $ git config --global user.name "Your Name Here" ```  - Sets the default name for git to use when you commit
    ``` $ git config --global user.email "your_email@example.com" ``` - Sets the default email for git to use when you commit
> - Check with ```git config --list``` or ```git config -l```


### What if you want to ignore some untracked files: 
> Create **.gitignore** file and put their names in it.
> Ex: node_modules, dist etc.

### How to create branch?
> - A branch is another copy of your repo that allows you to isolate changes and leave the original copy untouched.
> - On terminal ```git checkout -b branch-name ```
> - Usually you will do on GUI ( like JIRA ) at job when your manager assigns task for you.
> - ```git branch``` - see all branches

### How to switch between branches ? 
> - **git checkout**
> - Ex: ```git checkout master``` or ```git checkout branch-name```


### How to merge changes from one branch to another ? 
> - ```git merge branch-name```
> - This usually happens between your branch and your tech lead/manager/repo owners branch.
> - He/She will decide to merge your changes or not.

### What is merge conflict ? 
> - It occurs when competing changes are made to the same line of a file, or when one person edits a file and another person deletes the same file. 
> - You will need to resolve them on your local and push again.

### Github = Git + Friends
> - **GitHub** allows users to host Git repositories publicly and privately.
> - You can contribute to other open source projects on Github
> - In your order to add local files to Github repository that you created use: git remote add origin <'repo-url'>


### IMPORTANT LESSON TO REMEMBER:
- Generally it is advised that you keep your workspace as clean as possible.
- This way you don't have to deal with ```git rebase``` and ```merge conflicts``` a lot and spend time for non-productive things.
- Therefore the only essential commands you have to know at first place are:
> - **git pull :** got get the changes from a remote repository into the current branch. 
> - **git add [-options] :**  add/prepare the content staged for the next commit
> - **git status :** to check the state of the working directory and the staging area. 
> - **git commit -m"message" :** to save your changes to the local repository
> - **git push [-options] :** to upload local repository content to a remote repository.

### Other Commands
> - **git init** : creates a new Git repository
> - **git log :** shows running record of commits
> - **git fetch :** downloads commits, files, and refs from a remote repository into your local repo.
> - **git checkout :** lets you navigate between the branches created by git branch 
> - **git reset :** a powerful command that is used to undo local changes to the state of a Git repo
> - **git revert :** is a forward-moving undo operation that offers a safe method of undoing changes
> - **git remote -v :** lists two or more remotes
> - **git remote add origin :** add changes to a remote/cloned repo.
> - **git remote add upstream :** add changes to an original/forked repo.
> - **git rebase :** integrates changes from one branch into another. It is an alternative to the better known "merge" command.  

### What is the difference between git pull and git fetch
> - git fetch just "downloads" the changes from the remote to your local repository. git pull downloads the changes and merges them into your current branch.
> - git pull is shorthand for ```git fetch``` followed by ```git merge FETCH_HEAD```

### What is Forking ? 
> - **NOTE:** You can only fork repos through the GitHub website.
> - A fork is just a copy of a repository, saved to GitHub.
> - After you fork the repository, it shows up in your repositories.
> - To get a local copy of the fork you just made, use the ```git clone http://any-repo.git```
> - To sync your fork with the original repo, you need to add another remote named upstream: ```git remote add upstream http://any-repo.git```

### What is pull request ? 
> - **NOTE:** Pull requests can only be done through the GitHub website
> - After you made changes to your code and pushed them to your local repository. 
> - You will need to do pull request in order to repo owners review and decide whether to merge your amazing feature(changes).


                                          Prepeared by Seytech 