---
id: user-and-grouop-mgmt
title: User and Group Management

---


# User and Group Management

We need to use User Management for a lot of important tasks in Linux such as onboarding, ofboarding, managing passwords, disabling accounts, enabling accounts, preserving home directory contents, and fixing permissions etc.
We see some important operations.

1. Creating a new user

`sudo -c "USER's FULL NAME" samit`

This will create a new user with the username "samit"

2. Creating a new password for a user or change the password

`sudo passwd samit` 

Now write the new password, it will ask to confirm also.

3. Moving from one user to another

Suppose we are the user "livesmart' and we wants to move into the user samit.

`su samit`

Now it will ask for password, type the password you will be into that user

4. Deleting a password

`passwd -d username`

5. Making a password expire so that user cant log in

`passwd -e username`

6. Making an account inactive- it means no one can login into it, but the content of it remain as it is, whenever the owner wishes to continue work on it, it could be made active.

`passwd -i username`

7. To set an expiry date, after which the account won't be accessible , not even by owner

`usermod -e 2019-12-22 username` - its an example

8. To know the groups , of which the user is part of -

`id -Gn`  or  `*groups*`



# Group Management

* There are three types of users for a user account-
1. Superusers- Responsible for administration of the account i.e root. It have UID 0.
2. System Users- With UID ranging from 1 to 999.
3. Regular Users- With UID above 1000.

## Important Commands

1. To add a new user into an already existing group.

`useradd -G group1, group2 usernew`

This command is used when we are just creating a new user and we want to put it in some groups.

2. Creating a new group

`groupadd GroupName`

3. Changing password of the group

`gpasswd groupname`

4. To shifting an already existing user to a different group

`usermod -G groupname`
`usermod -Ga groupname `- adding to a new group without removing from the previous one

5. Removing a user from a group

`gpasswd -d username`


