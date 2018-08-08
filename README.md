# Waves Node in Docker

## About Waves
Waves is a decentralized platform that allows any user to issue, transfer, swap and trade custom blockchain tokens on an integrated peer-to-peer exchange. You can find more information about Waves at [wavesplatform.com](https://wavesplatform.com) and in the official [documentation]((https://docs.wavesplatform.com)).


## About the image
This Docker image contains scripts and configs to run Waves Node from version 0.13.0 for TESTNET, MAINNET or CUSTOM networks.
The image is focused on fast and convenient deployment of Waves Node.

Container downloads `.jar` file and configuration files from the [releases section](https://github.com/wavesplatform/Waves/releases) and runs it.  
 

## Running the image

It is highly recommended to read more about [Waves Node configuration](https://docs.wavesplatform.com/en/waves-full-node/how-to-configure-a-node.html) before running the container.

The simplest way to run a container:
```
docker run -it wavesplatform/waves-node
```

**Note: We recommend to start a container like below:**
```
docker run -e WAVES_LOG_LEVEL=DEBUG -e WAVES_HEAP_SIZE=2g -v /var/waves:/waves wavesplatform/waves-node    
``` 

**You can run container with predefined environment variables:**

|Env variable                 |Description   |
|-----------------------------|--------------|
|`WAVES_WALLET_SEED`          |Plain text seed for node wallet. Container converts it to base58.   |
|`WAVES_WALLET_SEED_BASE58`   |Base58 encoded seed.   |
|`WAVES_WALLET_PASSWORD`      |Password for wallet file.    |
|`WAVES_VERSION`              |Node version. You can find the list of available versions here.   |
|`WAVES_NETWORK`              |Available values are `MAINNET`, `TESTNET` and `DEVNET`.   |
|`WAVES_LOG_LEVEL`            |Node logging level, available values: `OFF`, `ERROR`, `WARN`, `INFO`, `DEBUG`, `TRACE`. More details about logging are available [here](https://docs.wavesplatform.com/en/waves-full-node/logging.html).   |
|`WAVES_HEAP_SIZE`            |Java Heap Size limit in -X Command-line Options notation (`-Xms=[your value]`). More details [here](https://docs.oracle.com/cd/E13150_01/jrockit_jvm/jrockit/jrdocs/refman/optionX.html)   |
|`WAVES_CONFIG_FILE`          |Path to your Waves Configuration file.   |

**Note: All variables are optional.**  

###Configuration
The image supports config customization with env variables. 
Depending on env values the image generates `local.conf` file and stores it in `/waves/configs` directory.
The simple rule of how to set a value in the configuration file:
0. Determine the path to variable in configuration file ([complete configuration file](https://docs.wavesplatform.com/en/waves-full-node/how-to-configure-a-node.html))
1. Join all section names with two underscores(`__`).
2. Replace all dashes with one underscore (`_`).
3. Capitalize the final string.

For instance, if you want to set the value of `waves.rest-api.enable`, pass an environment variable `WAVES__REST_API__ENABLE=no`;