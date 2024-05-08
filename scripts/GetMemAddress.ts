import { Address, toNano } from '@ton/core';
import { Mem } from '../wrappers/Mem';
import { NetworkProvider, sleep } from '@ton/blueprint';

export async function run(provider: NetworkProvider, args: string[]) {
    const ui = provider.ui();

    const address = Address.parse("kQB5e1qltghaLqWhDhCnmUCUq5jJtm9SMU81Uc7FbRhff45L");

    const mem = provider.open(Mem.fromAddress(address));
    let memAddres;
    memAddres = await mem.getRetAddres();

    console.log("Addres: " +  memAddres.toString());
}
