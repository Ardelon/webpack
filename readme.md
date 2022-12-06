# Webpack Konfigürasyon

## Kurulum

package.json dosyası yoksa terminale

```
npm init -y
```

Ardından webpack'in kendisini ve komutla çalıştırabilmek için webpack-cli kütüphanelerini indiriyoruz. Bu kütüphanelere paketleme esnasında ihtiyacımız olduğu için `devDependency` olarak yüklememiz yeterli.

```
npm i --save-dev webpack webpack-cli
```

Eğer webpack-dev-server kütüphanesini de önden yüklemek isterseniz onu da ekleyebilirsiniz.

```
npm i --save-dev webpack webpack-cli webpack-dev-server

// Veya

npm i --save-dev webpack-dev-server
```

`package.json` dosyasında `scripts` özelliğinin içine çalıştıracağımız komut adı ve içeriğini yazarak terminalden webpack'i kullanabiliriz

```
"scripts": {
	"run": "webpack"
},
```

Bu adımlardan sonra webpack kullanıma hazır durumda olmalı. Tabi bu haliyle default konfigürasyon olduğu için kök dizinde bulunan src klasörü içinde index.js dosyanız yoksa webpack derleme yaparken hata fırlatacaktır.

## Konfigürasyon Listesi

- [x] [webpack konfigürasyon dosyası belirleme](#webpack-konfigürasyon-dosyası-belirleme)
- [x] [webpack CLI ile mode belirleme](#webpack-cli-ile-mode-belirleme)
- [x] [webpack konfigürasyon ile mode belirleme](#webpack-konfigürasyon-ile-mode-belirleme)
- [x] [webpack mode seçimine göre farklı klasörlere çıktı alma](#webpack-mode-seçimine-göre-farklı-klasörlere-çıktı-alma)
- [x] [webpack birden fazla entry noktasından tek çıktı alma](#webpack-birden-fazla-entry-noktasından-tek-çıktı-alma)
- [x] [webpack çıktısının adını belirleme](#webpack-çıktısının-adını-belirleme)
- [x] [webpack birden fazla entry noktasından birden fazla çıktı alma](#webpack-birden-fazla-entry-noktasından-birden-fazla-çıktı-alma)
- [x] [webpack çıktı isimlerini hash'leme](#webpack-çıktı-isimlerini-hash'leme)
- [x] [webpack dependOn kullanma](#webpack-dependOn-kullanma)
- [x] [webpack ortak kütüphaneyi konfigürasyonda ekleme](#webpack-ortak-kütüphaneyi-konfigürasyonda-ekleme)
- [x] [webpack runtime belirleme](#webpack-runtime-belirleme)
- [x] [webpack CSS dosyası yükleme](#webpack-CSS-dosyası-yükleme)
- [x] [webpack sass dosyası yükleme](#webpack-sass-dosyası-yükleme)
- [x] [webpack resim dosyası yükleme](#webpack-resim-dosyası-yükleme)
- [x] [webpack resim dosyalarını JavaScript çıktı dosyasında kullanma](#webpack-resim-dosyalarını-javascript-çıktı-dosyasında-kullanma)
- [x] [webpack resim dosyalarını dışa aktarma](#webpack-resim-dosyalarını-dışa-aktarma)
- [x] [webpack resim çıktısını klasöre aktarma](#webpack-resim-çıktısını-klasöre-aktarma)
- [x] [webpack resim dosyalarını dosya tipine göre farklı yerlere çıktı alma](#webpack-resim-dosyalarını-dosya-tipine-göre-farklı-yerlere-çıktı-alma)
- [x] [webpack çıktı alınacak klasörü temizleme](#webpack-çıktı-alınacak-klasörü-temizleme)
- [x] [webpack dev server kurma](#webpack-dev-server-kurma)
- [x] [webpack dev server SSL](#webpack-dev-server-SSL)
- [x] [webpack dev server Headers](#webpack-dev-server-Headers)
- [x] [webpack dev server Compress](#webpack-dev-server-Compress)
- [x] [webpack dev server Servis Edilen Dosyayı Açma](#webpack-dev-server-servis-edilen-dosyayı-açma)
- [x] [HTML Webpack Plugin Kurma](#HTML-Webpack-Plugin-Kurma)
- [x] [webpack HTML taslağı kullanma](#webpack-HTML-taslağı-kullanma)
- [x] [webpack birden fazla HTML dosyası üretme](#webpack-birden-fazla-HTML-dosyası-üretme)
- [x] [webpack HTML taslağına plugin parametreleri gönderme](#webpack-HTML-taslağına-plugin-parametreleri-gönderme)
- [x] [webpack HTML taslağına harici parametre gönderme](#webpack-HTML-taslağına-harici-parametre-gönderme)
- [ ] [webpack çıktısını minimize etme](#webpack-çıktısını-minimize-etme)
- [ ] [webpack çıktıdan console komutlarını temizleme](#webpack-çıktıdan-console-komutlarını-temizleme)
- [ ] [webpack watch Files](#webpack-watch-Files)
- [ ] [webpack cache](#webpack-cache)

- Listeden çıkarılanlar
  - [ ] [webpack çıktısını parçalara bölme](#webpack-çıktısını-parçalara-bölme)
  - [ ] [webpack dev server proxy](#webpack-dev-server-proxy)
  - [ ] webpack mode seçeneğini argümanla alma

## Konfigürasyon Açıklamaları

<br/>

### webpack konfigürasyon dosyası belirleme

- [Config File](./config/selectConfigFile.config.js);

`package.json`

```
"scripts": {
	"selectConfigFile": "webpack -c config/selectConfigFile.config.js"
},
```

`terminal`

```
npm run-script selectConfigFile
```

[Webpack Flags](https://webpack.js.org/api/cli/#flags)
| Flag / Alias | Type | Description |
| -------------- | -------- | ----------- |
| `--config, -c` | string[] | webpack konfigürasyon dosyasının adresini belirtmek için kullanılır |

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack CLI ile mode belirleme

- [Config File](./config/selectModeCLI.config.js);

`mode` seçeneği `production`, `development` veya `none` değeri alabilir. `mode` özelliğini webpack-cli ile belirlemek mümkündür.

`package.json`

```
"scripts": {
	"selectModeCLI": "webpack --mode=development -c config/selectModeCLI.config.js"
},
```

`terminal`

```
npm run-script selectModeCLI
```

[Webpack Flags](https://webpack.js.org/api/cli/#flags)
| Flag / Alias | Type | Description |
| -------------- | -------- | ----------- |
| `--mode` | string[] | Paketlemenin hangi ortamda kullanılacağını belirtir. |

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack Konfigürasyon ile mode belirleme

- [Config File](./config/selectModeConfig.config.js);

`mode` seçeneği `production`, `development` veya `none` değeri alabilir. `mode` özelliğini konfigürasyon dosyasında `mode` anahtar kelimesiyle string değeri olarak belirleyebiliriz.

`package.json`

```
"scripts": {
	"selectModeConfig": -c config/selectModeConfig.config.js"
},
```

`terminal`

```
npm run-script selectModeConfig
```

[Webpack Flags](https://webpack.js.org/api/cli/#flags)
| Flag / Alias | Type | Description |
| -------------- | -------- | ----------- |
| `--mode` | string[] | Paketlemenin hangi ortamda kullanılacağını belirtir. |

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack mode seçimine göre farklı klasörlere çıktı alma

- [Config File](./config/diffOutputWithArg.config.js);

`package.json`

```
"scripts": {
	"diffOutputWithArg": "webpack mode=development -c config/diffOutputWithArg.config.js"
},
```

`terminal`

```
npm run-script diffOutputWithArg
```

[Webpack Flags](https://webpack.js.org/api/cli/#flags)
| Flag / Alias | Type | Description |
| -------------- | -------- | ----------- |
| `--mode` | string[] | Paketlemenin hangi ortamda kullanılacağını belirtir. |

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack birden fazla entry noktasından tek çıktı alma

- [Config File](./config/multipleEntryOneOutput.config.js);

`entry` özelliğine array halinde dosya adresleri vererek bunları tek bir çıktıda birleştirmek mümkündür.

`package.json`

```
"scripts": {
	"multipleEntryOneOutput": "webpack  -c config/multipleEntryOneOutput.config.js"
},
```

`terminal`

```
npm run-script multipleEntryOneOutput
```

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack çıktısının adını belirleme

- [Config File](./config/selectOutputName.config.js);

`output` özelliğinin `filename` özelliğine değer atayarak dosya çıktı dosyasının ismini değiştirmemiz mümkündür.

`package.json`

```
"scripts": {
	"selectOutputName": "webpack -c config/selectOutputName.config.js"
},
```

`terminal`

```
npm run-script selectOutputName
```

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack birden fazla entry noktasından birden fazla çıktı alma

- [Config File](./config/multipleEntryMultipleOutput.config.js);

Giriş noktalarını `entry` parametresine obje halinde verdiğimizde ve `output` parametresinide '[name].js' olarak girersek, objedeki anahtar kelimeler dosya adı, değerleri de derlenecek dosyaları ifade eder.

`package.json`

```
"scripts": {
  "multipleEntryMultipleOutput": "webpack -c config/multipleEntryMultipleOutput.config.js"
},
```

`terminal`

```
npm run-script multipleEntryMultipleOutput
```

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack çıktı isimlerini hash'leme

- [Config File](./config/hashOutput.config.js);

Konfigürasyonda `output` özelliğinin filename özelliğine '[hash]' ekleyerek dosyaları hash'lemek mümkündür. Dosyalarda bir değişiklik olursa farklı hash üreteceği için tarayıcıda dosyanın güncellenmemesi durumu oluşmayacaktır. Derlediğiniz dosyada değişiklik yapıp tekrar derlerseniz farklı bir dosyanın üretildiğini görebilirsiniz.

`package.json`

```
"scripts": {
  "hashOutput": "webpack -c config/hashOutput.config.js"
},
```

`terminal`

```
npm run-script hashOutput
```

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack dependOn kullanma

- [Config File](./config/libraryDepend.config.js);

HTML dosyasına sırasıyla ekleyerek kullanabiliriz.

```
  <script src="./lodashVendor.js"></script>
  <script src="./app.js"></script>
```

`package.json`

```
"scripts": {
  "libraryDepend": "webpack -c config/libraryDepend.config.js"
},
```

`terminal`

```
npm run-script libraryDepend
```

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack ortak kütüphaneyi konfigürasyonda ekleme

- [Config File](./config/libraryShared.config.js);

HTML dosyasına sırasıyla ekleyerek kullanabiliriz.

```
  <script src="./lodashVendor.js"></script>
  <script src="./app.js"></script>
  <script src="./appTwo.js"></script>
```

`package.json`

```
"scripts": {
  "libraryShared": "webpack -c config/libraryShared.config.js"
},
```

`terminal`

```
npm run-script libraryShared
```

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack runtime belirleme

- [Config File](./config/entryRuntime.config.js);

HTML dosyasına sırasıyla ekleyerek kullanabiliriz.

```
  <script src="./vendor.js"></script>
  <script src="./lodashVendor.js"></script>
  <script src="./app.js"></script>
```

`package.json`

```
"scripts": {
  "entryRuntime": "webpack -c config/entryRuntime.config.js"
},
```

`terminal`

```
npm run-script entryRuntime
```

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack CSS dosyası yükleme

- [Config File](./config/loadCSS.config.js);

`terminal`

```
npm install --save-dev style-loader css-loader
```

`package.json`

```
"scripts": {
	"loadCSS": "webpack -c config/loadCSS.config.js"
},
```

`terminal`

```
npm run-script loadCSS
```

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack sass dosyası yükleme

- [Config File](./config/loadSass.config.js);

`terminal`

```
npm install --save-dev style-loader css-loader
```

`package.json`

```
"scripts": {
	"loadSass": "webpack -c config/loadSass.config.js"
},
```

`terminal`

```
npm run-script loadCSS
```

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack resim dosyası yükleme

- [Config File](./config/loadFile.config.js);

`package.json`

```
"scripts": {
	"loadFile": "webpack -c config/loadFile.config.js"
},
```

`terminal`

```
npm run-script loadFile
```

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack resim dosyalarını JavaScript çıktı dosyasında kullanma

- [Config File](./config/loadFileInlineJS.config.js);

`package.json`

```
"scripts": {
	"loadFileInlineJS": "webpack -c config/loadFileInlineJS.config.js"
},
```

`terminal`

```
npm run-script loadFileInlineJS
```

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack resim dosyalarını dışa aktarma

- [Config File](./config/loadFileResource.config.js);

`package.json`

```
"scripts": {
	"loadFileResource": "webpack -c config/loadFileResource.config.js"
},
```

`terminal`

```
npm run-script loadFileResource
```

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack resim çıktısını klasöre aktarma

- [Config File](./config/exportedFilePath.config.js);

`terminal`

`package.json`

```
"scripts": {
	"exportedFilePath": "webpack -c config/exportedFilePath.config.js"
},
```

`terminal`

```
npm run-script exportedFilePath
```

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack resim dosyalarını dosya tipine göre farklı yerlere çıktı alma

- [Config File](./config/exportDiffAssettoDiffPlace.config.js);

`terminal`

`package.json`

```
"scripts": {
	"exportedFilePath": "webpack -c config/exportDiffAssettoDiffPlace.config.js"
},
```

`terminal`

```
npm run-script exportDiffAssettoDiffPlace
```

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack çıktı alınacak klasörü temizleme

- [Config File](./config/cleanOutput.config.js);

`terminal`

`package.json`

```
"scripts": {
	"cleanOutput": "webpack -c config/cleanOutput.config.js"
},
```

`terminal`

```
npm run-script cleanOutput
```

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack dev server kurma

- [Config File](./config/setupWebpackDevServer.config.js);

`terminal`

```
npm i webpack-dev-server --save-dev
```

`package.json`

```
"scripts": {
	"setupWebpackDevServer": "webpack serve -c config/setupWebpackDevServer.config.js"
},
```

`terminal`

```
npm run-script setupWebpackDevServer
```

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack dev server SSL

- [Config File](./config/webpackDevServerSSL.config.js);

`package.json`

```
"scripts": {
	"webpackDevServerSSL": "webpack serve -c config/webpackDevServerSSL.config.js"
},
```

`terminal`

```
npm run-script webpackDevServerSSL
```

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack dev server Headers

- [Config File](./config/webpackDevServerHeaders.config.js);

`package.json`

```
"scripts": {
	"webpackDevServerHeaders": "webpack serve -c config/webpackDevServerHeaders.config.js"
},
```

`terminal`

```
npm run-script webpackDevServerHeaders
```

[link](https://webpack.js.org/configuration/dev-server/#devserverheaders)

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack dev server Compress

- [Config File](./config/webpackDevServerCompress.config.js);

`package.json`

```
"scripts": {
	"webpackDevServerCompress": "webpack serve -c config/webpackDevServerCompress.config.js"
},
```

`terminal`

```
npm run-script webpackDevServerCompress
```

[link](https://betterexplained.com/articles/how-to-optimize-your-site-with-gzip-compression/)

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack dev server Servis Edilen Dosyayı Açma

- [Config File](./config/webpackDevServerOpenPage.config.js);

`package.json`

```
"scripts": {
	"webpackDevServerOpenPage": "webpack serve -c config/webpackDevServerOpenPage.config.js"
},
```

`terminal`

```
npm run-script webpackDevServerOpenPage
```

[link](https://webpack.js.org/configuration/dev-server/#devserveropen)

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### HTML Webpack Plugin Kurma

- [Config File](./config/HTMLWebpackPluginSetup.config.js);

`terminal`

```
npm i html-webpack-plugin --save-dev
```

`package.json`

```
"scripts": {
	"HTMLWebpackPluginSetup": "webpack -c config/HTMLWebpackPluginSetup.config.js"
},
```

`terminal`

```
npm run-script HTMLWebpackPluginSetup
```

[link](https://webpack.js.org/plugins/html-webpack-plugin/)

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack HTML taslağı kullanma

- [Config File](./config/HTMLWebpackPluginTemplate.config.js);

`package.json`

```
"scripts": {
	"HTMLWebpackPluginTemplate": "webpack -c config/HTMLWebpackPluginTemplate.config.js"
},
```

`terminal`

```
npm run-script HTMLWebpackPluginTemplate
```

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack birden fazla HTML dosyası üretme

- [Config File](./config/HTMLWebpackPluginMultipleFileCreation.config.js);

`package.json`

```
"scripts": {
	"HTMLWebpackPluginMultipleFileCreation": "webpack -c config/HTMLWebpackPluginMultipleFileCreation.config.js"
},
```

`terminal`

```
npm run-script HTMLWebpackPluginMultipleFileCreation
```

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack HTML taslağına plugin parametreleri gönderme

- [Config File](./config/HTMLWebpackPluginOptionParameters.config.js);

`package.json`

```
"scripts": {
	"HTMLWebpackPluginOptionParameters": "webpack -c config/HTMLWebpackPluginOptionParameters.config.js"
},
```

`terminal`

```
npm run-script HTMLWebpackPluginOptionParameters
```

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack HTML taslağına harici parametre gönderme

- [Config File](./config/HTMLWebpackPluginAdditionalParameters.config.js);

`package.json`

```
"scripts": {
	"HTMLWebpackPluginAdditionalParameters": "webpack -c config/HTMLWebpackPluginAdditionalParameters.config.js"
},
```

`terminal`

```
npm run-script HTMLWebpackPluginAdditionalParameters
```

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack çıktısını minimize etme

- [Config File](./config/minimizeOutput.config.js);

package.json`

```
"scripts": {
	"minimizeOutput": "webpack -c config/minimizeOutput.config.js"
},
```

`terminal`

```
npm run-script minimizeOutput
```

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack çıktıdan console komutlarını temizleme

- [Config File](./config/clearConsole.config.js);

`package.json`

```
"scripts": {
	"clearConsole": "webpack -c config/clearConsole.config.js"
},
```

`terminal`

```
npm run-script clearConsole
```

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack watch Files

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack dev server hot reload

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack dev server proxy

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack cache

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack çıktısını parçalara bölme

- [Config File](./config/splitChunks.config.js);

`package.json`

```
"scripts": {
	"splitChunks": "webpack -c config/splitChunks.config.js"
},
```

`terminal`

```
npm run-script splitChunks
```

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>
