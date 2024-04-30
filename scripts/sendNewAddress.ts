//EQBCj7PhOhgpJvyvDsmUFcWVqLKUICy7374y9r3FcdYY3n3K

import { Address, toNano } from '@ton/core';
import { Mem } from '../wrappers/Mem';
import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const mem = provider.open(Mem.fromAddress(Address.parse("kQD3cCvOGEZa5cEOemP92VNBOUvV-lfnX4HorA9jnDY5VQYE")));

    await mem.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: "SetAddress",
            newAddres: Address.parse("kQCdV-Qqx0gr6tO8WaDpRBP9IQVHwRRN0Brr9TtBe6MyCTz5"),
        }
    );

    let memAddres;
    memAddres = await mem.getMemWalletAddress();

    console.log("Addres: " +  memAddres.toString());
    console.log("---------------------------------");
    console.log("Taken: " +  await mem.getAddressTaken());

    console.log('ID', await mem.getId());
}
