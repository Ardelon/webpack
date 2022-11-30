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
- [ ] [webpack çıktısını parçalara bölme](#webpack-çıktısını-parçalara-bölme)
- [ ] [webpack çıktıdan console komutlarını temizleme](#webpack-çıktıdan-console-komutlarını-temizleme)
- [ ] [webpack çıktısını minimize etme](#webpack-çıktısını-minimize-etme)
- [ ] [webpack CSS dosyası yükleme](#webpack-CSS-dosyası-yükleme)
- [ ] [webpack sass dosyası yükleme](#webpack-sass-dosyası-yükleme)
- [ ] [webpack resim dosyası yükleme](#webpack-resim-dosyası-yükleme)
- [ ] [webpack resim dosyalarını ayrı dosyalara aktarma](#webpack-resim-dosyalarını-ayrı-dosyalara-aktarma)
- [ ] [webpack çıktı alınacak klasörü temizleme](#webpack-çıktı-alınacak-klasörü-temizleme)
- [ ] [webpack HTML taslağı kullanma](#webpack-HTML-taslağı-kullanma)
- [ ] [webpack HTML taslağına parametre gönderme](#webpack-HTML-taslağına-parametre-gönderme)
- [ ] [webpack birden fazla HTML dosyası üretme](#webpack-birden-fazla-HTML-dosyası-üretme)
- [ ] [webpack dev server kullanma](#webpack-dev-server-kullanma)
- [ ] [webpack watch Files](#webpack-watch-Files)
- [ ] [webpack dev server hot reload](#webpack-dev-server-hot-reload)
- [ ] [webpack dev server SSL](#webpack-dev-server-SSL)
- [ ] [webpack dev server proxy](#webpack-dev-server-proxy)
- [ ] [webpack dev server static serve](#webpack-dev-server-static-serve)
- [ ] [webpack cache](#webpack-cache)

- Listeden çıkarılanlar
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



### webpack çıktısını parçalara bölme

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack çıktıdan console komutlarını temizleme

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack çıktısını minimize etme

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack CSS dosyası yükleme

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack sass dosyası yükleme

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack resim dosyası yükleme

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack resim dosyalarını ayrı dosyalara aktarma

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack çıktı alınacak klasörü temizleme

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack HTML taslağı kullanma

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack HTML taslağına parametre gönderme

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack birden fazla HTML dosyası üretme

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack dev server kullanma

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack watch Files

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack dev server hot reload

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack dev server SSL

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack dev server proxy

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack dev server static serve

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>

### webpack cache

[Konfigürasyon Listesine Geri Dön](#konfigürasyon-listesi)

<br/>
