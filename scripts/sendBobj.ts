import { Address, toNano } from '@ton/core';
import { Mem } from '../wrappers/Mem';
import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const mem = provider.open(Mem.fromAddress(Address.parse("EQADI20e2GyGwacUurQ-d7mHY3jd4WMDyMsBoUpVoHvbnai8")));

    await mem.send(
        provider.sender(),
        {
            value: toNano('0.16'),
        },
        {
            $$type: "Bomj",
            bomj_query_id: 1233n
        }
    );
    await provider.waitForDeploy(mem.address);
}
