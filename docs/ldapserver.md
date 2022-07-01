---
id: ldapserver
title: LDAP Server

---


# LDAP Server Setup

### What is LDAP?

   Light Directory Access Protocol is used as a central user account management system , a database to keep all information related to user accounts. It uses client/server paradigm.

LDAP keeps a list of users, used as storage for our files, for authenticating users, storing DNS records.

* OpenLDAP is the open source implementation of LDAP that runs on Linux/Unix systems.

### Installing Open LDAP

* For Installing OpenLDAP, we have to install openldap, openldap-servers, and openldap-clients packages.

Execute the following commands- 
```bash
   sudo apt-get install slapd
   sudo apt-get install ldap-utils
```
* Now it will ask to set LDAP admin password, so provide the password as u wish
* To confirm the installation was successful, run the following command

```bash
   sudo slapcat
``` 
* It will print slapd database contens
* Add base dn for Users and Groups- Create a file named **basedn.ldif**.

* And add the following contents-
```bash
   dn: ou=people,dc=example,dc=com
   objectClass: organizationalUnit
   ou: people
   dn: ou=groups,dc=example,dc=com
   objectClass: organizationalUnit
   ou: groups**
```
* Here replaces example and com with your correct domain components
* Add User Accounts and Groups
```bash
   sudo slappasswd
```
* Create ldif file for adding users
```bash
   vim ldapusers.ldif
```
* Ad the following contents in it
```bash
   dn: uid=domainname,ou=people,dc=example,dc=com
   objectClass: inetOrgPerson
   objectClass: posixAccount
   objectClass: shadowAccount
   cn: domainname
   sn: Wiz
   userPassword: {SSHA}Zn4/E5f+Ork7WZF/alrpMuHHGufC3x0k
   loginShell: /bin/bash
   uidNumber: 2000
   gidNumber: 2000
   homeDirectory: /home/domainname
```
* Here also, replace domain name with your domain , and example and com with correct domain values
* When done with edit, add account by running.

```bash
   ldapadd -x -D cn=admin,dc=example,dc=com -W -f ldapusers.ldif
```
* Do the same of group. Create ldif file:

```bash
   vim ldapgroups.ldif
```
* Add group:

```bash
   ldapadd -x -D cn=admin,dc=example,dc=com -W -f ldapgroups.ldif
```
* LDAP server configuration is done, now you need to do LDAP client configuration.


* References
1. https://computingforgeeks.com/install-and-configure-openldap-server-ubuntu/
2. https://computingforgeeks.com/how-to-configure-ubuntu-as-ldap-client/
https://likegeeks.com/linux-ldap-server/
