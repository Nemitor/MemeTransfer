import { Address, toNano } from '@ton/core';
import { Mem } from '../wrappers/Mem';
import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const mem = provider.open(Mem.fromAddress(Address.parse("EQBC11NOWq0YYCq2L2lPm1WR5DLWBHA_na0cFcGxl-Wu4sOU")));

    await mem.send(
        provider.sender(),
        {
            value: toNano('0.5'),
        },
        {
            $$type: "Bomj",
            bomj_query_id: 1233n,
            bomj_amount: 1000000000n
        }
    );
    await provider.waitForDeploy(mem.address);
}
