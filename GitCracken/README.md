# GitCracken

GitKraken utils for non-commercial use

Working on `GNU/Linux`, `Windows` and `macOS`!

> WARNING! On `macOS` you should patch `GitKraken` only after first launch and full program closing!

## Requirements

- `Node.js` v10 LTS or later
- `yarn`

## Usage

- `yarn install`
- `yarn build`
- `node dist/bin/gitcracken.js --help` for more usage information

### Patcher

```bash
$ gitcracken patcher [options] [actions...]
```

`actions` - array of values (any order, any count)

> If `actions` is empty, will be used `auto` mode (ideal for beginners)

| Action   | Description                           |
|----------|---------------------------------------|
| `backup` | Backup `app.asar` file                |
| `unpack` | Unpack `app.asar` file into directory |
| `patch`  | Patch directory                       |
| `pack`   | Pack directory to `app.asar`          |
| `remove` | Remove directory                      |

| Option      | Description (if not defined, will be used `auto` value) |
|-------------|---------------------------------------------------------|
| `--asar`    | Path to `app.asar` file                                 |
| `--dir`     | Path to directory                                       |
| `--feature` | Patcher feature (from [patches](patches) dir)           |

> You can invoke `--feature` several times to apply all patches!

#### Examples

`Auto` patch installed `GitKraken` (maybe require `sudo` privileges on `GNU/Linux`)

```bash
$ gitcracken patcher
```

Use custom path to `app.asar`

```bash
$ gitcracken patcher --asar ~/Downloads/gitkraken/resources/app.asar
```

Use custom `actions` (`backup`, `unpack` and `patch`)

```bash
$ gitcracken patcher backup unpack patch
```

#### Short Instructions

Linux:

1. git clone https://github.com/5cr1pt/GitCracken.git
2. cd GitCracken/GitCracken
3. rm yarn.lock
4. yarn install
5. yarn build
6. wget https://release.gitkraken.com/linux/gitkraken-amd64.tar.gz
7. tar -xvzf gitkraken-amd64.tar.gz
8. node dist/bin/gitcracken.js patcher --asar gitkraken/resources/app.asar
9. run gitkraken/gitkraken
10. if installed to something like /opt just symlink gitkraken/gitkraken to path like /usr/bin to have menu access (dmenu for example)

Windows: (working offline with the normal - not standalone Version)

1. install Gitkraken normal version - binary is located in "C:\Users\YOURUSER\AppData\Local\gitkraken" 
(here its working with V6.5.1)
2. download the gitcracken projekt and unzip it to "C:\Users\YOURUSER\AppData\Local\"
3. cd "C:\Users\YOURUSER\AppData\Local\gitcracken-master\GitCracken"
4. delete yarn.lock
(Node.js and yarn must be installed on the system)
5. yarn install
6. yarn build
7. node dist/bin/gitcracken.js patcher --asar "C:\Users\YOURUSER\AppData\Local\gitkraken\app-6.5.1\resources\app.asar"
8. run the gitkraken.exe inside "C:\Users\YOURUSER\AppData\Local\gitkraken\app-6.5.1"
9. create account with fake account and exit program
10. zip "C:\Users\YOURUSER\AppData\Local\gitkraken" folder
11. zip "C:\Users\YOURUSER\AppData\Roaming\.gitkraken" and "C:\Users\YOURUSER\AppData\Roaming\GitKraken"
12. unzip Local/gitkraken on the offline PC to the users /Local/ location
13. unzip Roaming/.gitkraken and Gitkraken on the offline PC to users /Roaming/ location
14. start the gitkraken.exe inside the /Local/gitkraken dir
15. enjoy the running Gitkraken. now you are able to add multiple Profiles even offline