import { Address, toNano } from '@ton/core';
import { Mem } from '../wrappers/Mem';
import { NetworkProvider, sleep } from '@ton/blueprint';

export async function run(provider: NetworkProvider, args: string[]) {
    const ui = provider.ui();

    const address = Address.parse("EQCVzC2xMPOt--uM_swQb_TAS5y3fHGkCzsxr0dotueGXmD-");

    const mem = provider.open(Mem.fromAddress(address));
    let memAddres;
    memAddres = await mem.getRetAddres();

    console.log("Addres: " +  memAddres.toString());
}
