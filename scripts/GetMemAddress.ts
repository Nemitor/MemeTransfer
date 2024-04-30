import { Address, toNano } from '@ton/core';
import { Mem } from '../wrappers/Mem';
import { NetworkProvider, sleep } from '@ton/blueprint';

export async function run(provider: NetworkProvider, args: string[]) {
    const ui = provider.ui();

    const address = Address.parse("kQD3cCvOGEZa5cEOemP92VNBOUvV-lfnX4HorA9jnDY5VQYE");

    const mem = provider.open(Mem.fromAddress(address));
    let memAddres;
    memAddres = await mem.getMemWalletAddress();

    console.log("Addres: " +  memAddres.toString());
    console.log("---------------------------------");
    console.log("Taken: " +  await mem.getAddressTaken());
}
