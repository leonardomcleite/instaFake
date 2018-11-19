# Instagram Fake (Aprendizado)

## Sobre o projeto
  Este projeto é para aprendizado do framework multiplataforma [Reac Native](https://facebook.github.io/react-native/docs/getting-started).
  Abaixo segue os `requirements` para instalação e usabilidade do app em um emulador. Não tenho como ensinar os passos para IOS pois não tenho um PC IOS.
  Portanto só ensinarei a rodar o projeto via Windows e Android. SORRY!.

## Node

Instale o servidor [Node](http://nodejs.org/) juntamente com o gerenciador de dependencias [NPM](https://npmjs.org/).
Abaixo estão as versões instaladas que funcionam:

    $ node --version
    v9.6.1

    $ npm --version
    5.6.0

### React Native

Instale o framework [Reac Native](https://facebook.github.io/react-native/docs/getting-started) conforme abaixo:

    $ npm install -g react-native-cli

### Windows e Android Studio

Para conseguir emular a aplicação no Windows, siga os passos abaixo:

- Instale o [Hardware Accelerated Execution Manager HAXM](https://software.intel.com/en-us/articles/intel-hardware-accelerated-execution-manager-intel-haxm)
- Reinicie sua máquina e entre na BIOS, encotre a opção `Intel Virtualization Technology` se estiver desabilitada [Disabled] e Habilite-a [Enable]. Esta é que permite a emulação no Windows
- Instale o [Android Studio](https://developer.android.com/studio/).
- Configure uma nova variavel de ambiente (Não esqueca de alterar `SEU_USUÁRIO`)

    Nome da Variavel: ANDROID_HOME
    Valor da Variavel: C:\Users\SEU_USUÁRIO\AppData\Local\Android\Sdk
*Para mais informações [Getting Started Android React Native](https://facebook.github.io/react-native/docs/getting-started). Va na aba `Building Projects with Native Code`
    
- Crie um emulador AVD conforme o [link](https://developer.android.com/studio/run/managing-avds?hl=pt-br)
- Para abrir o emulador sem ter que abrir o Android Studio (Que honera bastante o processamento). Siga os passos abaixo:
      
Digite o comando abaixo no cmd (Não esqueca de alterar `SEU_USUÁRIO`)

      $ C:\Users\SEU_USUÁRIO\AppData\Local\Android\sdk\tools\emulator.exe -list-avds
      Nexus_5_API_23
      Nexus_5_API_28
      
Ele vai listar os emuladores que você ja criou escolha um e execute o comando abaixo com o escolhido.

      $ C:\Users\SEU_USUÁRIO\AppData\Local\Android\sdk\tools\emulator.exe -avd Nexus_5_API_28
      
Pronto o emulador está aberto. Para facilitar as proximas vezes, crie um `.bat` com o ultimo comando e pronto é so dar dois cliques que ele irá executar.
    
- Com o emulador aberto agora é só executar `react-native run-android`. Este processo demora da primeira vez, então vá tomar um café... Quando estiver finalizado o app estará aberto no emulador.

