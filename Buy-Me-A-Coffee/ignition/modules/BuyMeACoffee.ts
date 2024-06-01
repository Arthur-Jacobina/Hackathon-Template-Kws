import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const BuyMeACoffeeModule = buildModule("BuyMeACoffee", (m) => {
    const buyMeACoffee = m.contract("BuyMeACoffee");

    return { buyMeACoffee };
});

export default BuyMeACoffeeModule;