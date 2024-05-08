import { toNano } from '@ton/core';
import { Mem } from '../wrappers/Mem';
import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const mem = provider.open(await Mem.fromInit(BigInt(Math.floor(Math.random() * 10000))));

    await mem.send(
        provider.sender(),
        {
            value: toNano('0.1'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    await provider.waitForDeploy(mem.address,20);

    console.log('ID', await mem.getId());
}
