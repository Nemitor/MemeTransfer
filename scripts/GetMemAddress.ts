import { Address, toNano } from '@ton/core';
import { Mem } from '../wrappers/Mem';
import { NetworkProvider, sleep } from '@ton/blueprint';

export async function run(provider: NetworkProvider, args: string[]) {
    const ui = provider.ui();

    const address = Address.parse("EQBC11NOWq0YYCq2L2lPm1WR5DLWBHA_na0cFcGxl-Wu4sOU");

    const mem = provider.open(Mem.fromAddress(address));
    let memAddres;
    memAddres = await mem.getRetAddres();

    console.log("Addres: " +  memAddres.toString());
}
