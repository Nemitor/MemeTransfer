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
            $$type: "Bomj",
            int: 1n
        }
    );

}
