---
id: git-and-github
title: Git and Github
---


# GIT and GITHUB

### Version Control System
This is a system which keeps the track of the changes made to any file which has been put into it, user can revert back to any of the previous versions if not satisfied with the current version, make changes to the file, find who has made changes and when to point out errors very efficiently.
* **_GIT_** is a Version Controlled System.

### Types of Version Control Systems

1. Local Version Control System- In this local files on a computer are version controlled, changes are made locally only.
2. Centralized Version Control System- In this a centralized directory or system is version controlled and shared between multiple computers, each of which can make changes and they are merged in the centralized system. 
3. Distributed Version Control System- In this there is a centralized system, but each of the clients keeps a mirror copy of the server, so in case if the server gets corrupt, the data can be restored by any clients.

###  GIT's Advantages 

* It uses snapshots to track the changes
* It keeps all the files locally, so it is super fast to get any file whenever needed, it need not ask the server.
* Everything is check summed, there is not possibility of any change made in the file being undetected by GIT.
* It generally only adds data, mostly operations can only add data, and can't erase

### The Three States

Files in GIT are changed in three states-
1. Modified- When the changes has been made in the file, but yet not committed.
2. Staged- When the changes have been made completely, and the file is ready to be go in the next commit snapshot.
3. Committed- When the file's snapshot has been taken, and the changes have been merged into the file, it is the final step

### Installing GIT

For installing in Ubuntu, we will run the following command in CLI.
```bash
   sudo apt install git
```

To check whether it has been installed correctly or not, run the following command- 
```bash
  git --version
```

### Important Operations of GIT
1. Make a directory to be version controlled- When we wants to make a directory to be controlled by GIT.

* First go into the directory be cd command
* Then use this command
```bash
  git init
```

3. To check whether git is successfully installed or not

```bash
  git --version
```

* It will show the version of the currently installed GIT.

3. To add a file in git/ to make the file tracked by git
Until now we have just created the project, but it was not tracked by GIT, to make it so use the following command

```bash
   git add filename** - To add a particular file
```

`git add .`   - To add all the files
* Whenever you make any changes in the file we use this command to stage the file.

4. To commit a file- Now once we have modified the file and staged the file, now we had to commit the change to make it permanent. 
```bash
   git commit -m "Message"
   ```
 
5. To cloning the local directory with GITHUB 

```bash
   git clone "Link to the GitHub directory"
```

6. To push the local files to the GitHub - Now once you have cloned the directory with GitHub, you will want that whatever changes you make in the local directory should be reflected in the GitHub, for this you need to push the directory.

```bash
   git push
```

* **NOTE**

* Here when you will try to push the directory, it will ask for username and password, use the username of your GitHub account and for password use the Token assigned by the GitHub( you need to create a token before) 

7. To check if any file is yet to be committed or staged after modification
```bash
   git status
```

8. Creating Branches - The branches has very important use in GIT. Suppose we are working on a project, we have to make some changes in the file, but don't want to merge it while we are working on it, to avoid mess, then we can create a branch of it, make suitable changes and whenever done we can merge it with the main file.

9. To view the commit history

```bash
   git log
```


`git log -p`  - To show the change that has been made, it will print the complete history of changes


* References
1. https://git-scm.com/
2. https://www.freecodecamp.org/news/git-and-github-for-beginners/
3. https://www.datacamp.com/tutorial/git-push-pull#git-push
4. https://medium.com/mindorks/what-is-git-commit-push-pull-log-aliases-fetch-config-clone-56bc52a3601c
