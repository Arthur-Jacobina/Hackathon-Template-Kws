import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"
import verify from "../utils/verify"

const deployBuyMeACoffee: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment
) {
  // @ts-ignore
  const { getNamedAccounts, deployments, network } = hre
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()
  const chainId: number = 11155111;

  log("----------------------------------------------------")
  log("Deploying BuyMeACoffee and waiting for confirmations...")
  const buyMeACoffeeMe = await deploy("BuyMeACoffee", {
    from: deployer,
    log: true,
  })
  log(`BuyMeACoffee deployed at ${buyMeACoffeeMe.address}`)
  if (
    process.env.ETHERSCAN_API_KEY
  ) {
    await verify(buyMeACoffeeMe.address,)
  }
}
export default deployBuyMeACoffee
deployBuyMeACoffee.tags = ["all", "buyMeACoffee"]