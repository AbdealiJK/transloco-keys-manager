# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.0.1](https://github.com/ngneat/transloco-keys-manager/compare/v2.0.0...v2.0.1) (2020-02-02)


### Bug Fixes

* 🐛 exit the process when missing keys ([4029ad2](https://github.com/ngneat/transloco-keys-manager/commit/4029ad2))



## [2.0.0](https://github.com/ngneat/transloco-keys-manager/compare/v1.3.2...v2.0.0) (2020-02-02)


### Bug Fixes

* 🐛 sort on all levels if using unflat ([#22](https://github.com/ngneat/transloco-keys-manager/issues/22)) ([bab0a57](https://github.com/ngneat/transloco-keys-manager/commit/bab0a57))
* 🐛 validate directory paths ([d936b01](https://github.com/ngneat/transloco-keys-manager/commit/d936b01)), closes [#21](https://github.com/ngneat/transloco-keys-manager/issues/21)


### Features

* 🎸 add support for read in comments ([9b6093a](https://github.com/ngneat/transloco-keys-manager/commit/9b6093a))


### refactor

* 💡 change base path default value and behavior ([3f7729f](https://github.com/ngneat/transloco-keys-manager/commit/3f7729f))


### Tests

* 💍 add config specs ([5cf747c](https://github.com/ngneat/transloco-keys-manager/commit/5cf747c))


### BREAKING CHANGES

* comments inside a container with read will be prefixed with the read's
value
* changed config.



### [1.3.2](https://github.com/ngneat/transloco-keys-manager/compare/v1.3.1...v1.3.2) (2020-01-13)


### Bug Fixes

* 🐛 fix paths and angular.json file read ([b3f41c3](https://github.com/ngneat/transloco-keys-manager/commit/b3f41c3))



### [1.3.1](https://github.com/ngneat/transloco-keys-manager/compare/v1.3.0...v1.3.1) (2020-01-13)


### Bug Fixes

* 🐛 cli options invalid alias ([c43a439](https://github.com/ngneat/transloco-keys-manager/commit/c43a439)), closes [#19](https://github.com/ngneat/transloco-keys-manager/issues/19)
* 🐛 regex should look for full word template key only ([#18](https://github.com/ngneat/transloco-keys-manager/issues/18)) ([9d8cb86](https://github.com/ngneat/transloco-keys-manager/commit/9d8cb86))



## [1.3.0](https://github.com/ngneat/transloco-keys-manager/compare/v1.2.6...v1.3.0) (2020-01-13)


### Bug Fixes

* 🐛 unflatten with number as last key ([#16](https://github.com/ngneat/transloco-keys-manager/issues/16)) ([cb2cf07](https://github.com/ngneat/transloco-keys-manager/commit/cb2cf07))


### Features

* 🎸 add config & project options ([000aff5](https://github.com/ngneat/transloco-keys-manager/commit/000aff5)), closes [#17](https://github.com/ngneat/transloco-keys-manager/issues/17)



### [1.2.6](https://github.com/ngneat/transloco-keys-manager/compare/v1.2.4...v1.2.6) (2019-12-17)


### Bug Fixes

* 🐛 add fs-extra as a dependency ([7b58b6d](https://github.com/ngneat/transloco-keys-manager/commit/7b58b6d)), closes [#13](https://github.com/ngneat/transloco-keys-manager/issues/13)
* 🐛 keys detective flatten files before comparing ([f87b128](https://github.com/ngneat/transloco-keys-manager/commit/f87b128))



### [1.2.4](https://github.com/ngneat/transloco-keys-manager/compare/v1.2.3...v1.2.4) (2019-12-03)


### Bug Fixes

* 🐛 keys detective should find global keys ([2e38f8c](https://github.com/ngneat/transloco-keys-manager/commit/2e38f8c)), closes [#12](https://github.com/ngneat/transloco-keys-manager/issues/12)
* 🐛 should ignore unrelated methods ([b4ae85a](https://github.com/ngneat/transloco-keys-manager/commit/b4ae85a))



### [1.2.2](https://github.com/ngneat/transloco-keys-manager/compare/v1.2.1...v1.2.2) (2019-11-25)


### Bug Fixes

* 🐛 ts keys extraction ([97a786d](https://github.com/ngneat/transloco-keys-manager/commit/97a786d)), closes [#11](https://github.com/ngneat/transloco-keys-manager/issues/11)



### [1.2.1](https://github.com/ngneat/transloco-keys-manager/compare/v1.2.0...v1.2.1) (2019-11-24)


### Bug Fixes

* 🐛 fix PC directory path conflict ([#9](https://github.com/ngneat/transloco-keys-manager/issues/9)) ([3e01c08](https://github.com/ngneat/transloco-keys-manager/commit/3e01c08))
* 🐛 include only marking comments in the template ([8883135](https://github.com/ngneat/transloco-keys-manager/commit/8883135)), closes [#10](https://github.com/ngneat/transloco-keys-manager/issues/10)



## [1.2.0](https://github.com/ngneat/transloco-keys-manager/compare/v1.1.0...v1.2.0) (2019-11-19)


### Bug Fixes

* 🐛 remove legacy code which changed extracted keys ([ee46e00](https://github.com/ngneat/transloco-keys-manager/commit/ee46e00)), closes [#7](https://github.com/ngneat/transloco-keys-manager/issues/7)
* 🐛 respect the langs in webpack plugin ([10891ee](https://github.com/ngneat/transloco-keys-manager/commit/10891ee)), closes [#5](https://github.com/ngneat/transloco-keys-manager/issues/5)


### Features

* 🎸 support key injection in custom default value ([581d933](https://github.com/ngneat/transloco-keys-manager/commit/581d933)), closes [#8](https://github.com/ngneat/transloco-keys-manager/issues/8)



## [1.1.0](https://github.com/ngneat/transloco-keys-manager/compare/v1.0.1...v1.1.0) (2019-11-12)


### Features

* 🎸 support inline loaders and add nested option ([080a318](https://github.com/ngneat/transloco-keys-manager/commit/080a318))



### [1.0.1](https://github.com/ngneat/transloco-keys-manager/compare/v1.0.0...v1.0.1) (2019-11-06)



## 1.1.0 (2019-11-06)


### Bug Fixes

* 🐛 comments extractions and pipe ([3f8414b](https://github.com/ngneat/transloco-keys-manager/commit/3f8414b))
* 🐛 pipe and sort keys when creating file ([d411550](https://github.com/ngneat/transloco-keys-manager/commit/d411550))
* 🐛 should not override the existing keys ([268644d](https://github.com/ngneat/transloco-keys-manager/commit/268644d)), closes [#1](https://github.com/ngneat/transloco-keys-manager/issues/1)



## 1.0.0 (2019-10-25)


### Bug Fixes

* 🐛 fix issues found in tests ([ebe5711](https://github.com/ngneat/transloco-keys-manager/commit/ebe5711))
* 🐛 fix scope mapping ([84e0e20](https://github.com/ngneat/transloco-keys-manager/commit/84e0e20))
* 🐛 fix scope mapping ([1d7e94e](https://github.com/ngneat/transloco-keys-manager/commit/1d7e94e))
* 🐛 fix scope mapping ([3cd9921](https://github.com/ngneat/transloco-keys-manager/commit/3cd9921))


### Features

* 🎸 support marker ([06d47bc](https://github.com/ngneat/transloco-keys-manager/commit/06d47bc))
* 🎸 update script to work with transloco v2 ([1db6527](https://github.com/ngneat/transloco-keys-manager/commit/1db6527))


### Tests

* 💍 Add testing playground ([555191a](https://github.com/ngneat/transloco-keys-manager/commit/555191a))



## 1.0.0 (2019-11-05)


### Bug Fixes

* 🐛 fix issues found in tests ([ebe5711](https://github.com/ngneat/transloco-keys-manager/commit/ebe5711))


### Features

* 🎸 update script to work with transloco v2 ([1db6527](https://github.com/ngneat/transloco-keys-manager/commit/1db6527))


### Tests

* 💍 Add testing playground ([555191a](https://github.com/ngneat/transloco-keys-manager/commit/555191a))
