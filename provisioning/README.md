# Readme

## Description

*sicoplace* is an [Ansible](http://ansible.cc) playbook.
The playbook contains tasks to install requiment packages.

## Requirements

### Ansible

Everything you should know about Ansible is documented on the
[Ansible](http://ansible.cc/docs/gettingstarted.html) site...

### Supported platforms

#### Debian wheezy

#### Ubuntu 12.04

#### Ansible >= 1.0

Any Ansible version >= 1.0 should work. If not, please use the issue
tracker to report any bugs.

## Usage

### Get the code

```bash
$ git clone git@github.com:zzet/ansible-playbooks.git
```

### Run the playbook

Use *ansible.host* as inventory. Run the playbook only for the remote
host *redis*. Use *vagrant* as the SSH user to connect to the remote
host. *-k* enables the SSH password prompt.

```bash
$ cd ansible-playbooks/sicoplace
$ ansible-playbook site.yml -i hosts --extra-vars="user=vagrant"
```

### Example output

```
PLAY [Install sicoplace] ********************************************************

GATHERING FACTS ***************************************************************
ok: [192.168.111.111]

TASK: [common | ensure apt cache is up to date] *******************************
ok: [192.168.111.111]

TASK: [common | make sure the system encoding is utf-8] ***********************
ok: [192.168.111.111]

TASK: [common | install useful pkgs] ******************************************
ok: [192.168.111.111] => (item=curl,vim,git,runit,htop,atop,imagemagick,python-pycurl)

TASK: [common | checks if resolver is working properly (issues with some VBox/Host OS combinations)] ***
changed: [192.168.111.111]

TASK: [common | pushes new resolver configuration is resolver fails] **********
skipping: [192.168.111.111]

TASK: [common | checks if resolver is working properly with new nameserver] ***
changed: [192.168.111.111]

TASK: [app_setup | Create apps users path] ************************************
ok: [192.168.111.111]

TASK: [app_setup | Create apps users path] ************************************
ok: [192.168.111.111]

TASK: [rbenv | install build depends] *****************************************
ok: [192.168.111.111] => (item=build-essential,git,libcurl4-openssl-dev,libreadline-dev,libssl-dev,libxml2-dev,libxslt1-dev,zlib1g-dev)

TASK: [rbenv | update rbenv repo] *********************************************
ok: [192.168.111.111]

TASK: [rbenv | add rbenv to path] *********************************************
ok: [192.168.111.111]

TASK: [rbenv | add rbenv initialization to profile] ***************************
ok: [192.168.111.111]

TASK: [rbenv | check ruby-build installed] ************************************
changed: [192.168.111.111]

TASK: [rbenv | create temporary directory] ************************************
skipping: [192.168.111.111]

TASK: [rbenv | clone ruby-build repo] *****************************************
skipping: [192.168.111.111]

TASK: [rbenv | install ruby-build] ********************************************
skipping: [192.168.111.111]

TASK: [rbenv | remove temporary directory] ************************************
skipping: [192.168.111.111]

TASK: [rbenv | check ruby 2.0.0-p247 installed] *******************************
changed: [192.168.111.111]

TASK: [rbenv | install ruby 2.0.0-p247] ***************************************
skipping: [192.168.111.111]

TASK: [rbenv | set global ruby 2.0.0-p247] ************************************
skipping: [192.168.111.111]

TASK: [rbenv | rehash] ********************************************************
skipping: [192.168.111.111]

TASK: [rbenv | set gemrc] *****************************************************
ok: [192.168.111.111]

TASK: [rbenv | install bundler gem] *******************************************
ok: [192.168.111.111] => (item=bundler)

TASK: [Install Redis server: redis-server] ************************************
ok: [192.168.111.111]

TASK: [Bind Redis server to all interfaces] ***********************************
ok: [192.168.111.111]

TASK: [Ensure Redis server is running] ****************************************
ok: [192.168.111.111]

TASK: [postgresql | add repository] *******************************************
ok: [192.168.111.111]

TASK: [postgresql | ensure apt cache is up to date] ***************************
ok: [192.168.111.111]

TASK: [postgresql | ensure packages are installed] ****************************
ok: [192.168.111.111] => (item=postgresql-9.2,postgresql-client-9.2,postgresql-contrib-9.2,postgresql-server-dev-9.2,libpq-dev,python-psycopg2)

TASK: [postgresql | setup postgres cluster to default to utf8 | stop cluster] ***
skipping: [192.168.111.111]

TASK: [postgresql | setup postgres cluster to default to utf8 | start cluster] ***
skipping: [192.168.111.111]

TASK: [postgresql | update postgres client configuration] *********************
ok: [192.168.111.111]

TASK: [app_setup | Create user.] **********************************************
ok: [192.168.111.111]

TASK: [app_setup | Create the project directory.] *****************************
ok: [192.168.111.111]

TASK: [app_setup | Update the project directory.] *****************************
ok: [192.168.111.111]

TASK: [app_setup | Create the SSH directory.] *********************************
skipping: [192.168.111.111]

TASK: [app_setup | Upload SSH authorized_keys.] *******************************
skipping: [192.168.111.111]

TASK: [app_setup | Upload SSH known hosts.] ***********************************
skipping: [192.168.111.111]

TASK: [app_setup | postgresql | ensure production database is created] ********
skipping: [192.168.111.111]

TASK: [app_setup | postgresql | ensure user does not have unnecessary privilege (dev)] ***
ok: [192.168.111.111]

TASK: [app_setup | postgresql | ensure user does not have unnecessary privilege (prod)] ***
skipping: [192.168.111.111]

TASK: [app_setup | postgresql | ensure user has access to production database] ***
skipping: [192.168.111.111]

TASK: [app_setup | postgresql | ensure dev databases is created] **************
ok: [192.168.111.111]

TASK: [app_setup | postgresql | ensure user has access to dev databases] ******
ok: [192.168.111.111]

TASK: [app_setup | postgresql | ensure test databases is created] *************
ok: [192.168.111.111]

TASK: [app_setup | postgresql | ensure user has access to test databases] *****
changed: [192.168.111.111]

PLAY RECAP ********************************************************************
192.168.111.111            : ok=31   changed=5    unreachable=0    failed=0

```

## Docs and contact
