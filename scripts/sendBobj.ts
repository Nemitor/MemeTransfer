import { Address, toNano } from '@ton/core';
import { Mem } from '../wrappers/Mem';
import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const mem = provider.open(Mem.fromAddress(Address.parse("EQDquwFLiSkD1_QeDWKDFtNrTAuwsUqER8RQauqO36JHPII-")));

    await mem.send(
        provider.sender(),
        {
            value: toNano('1'),
        },
        {
            $$type: "Bomj",
            MyMemAddress: Address.parse("kQBAO6z8DPA9xbm7BQuiKmG1WUgT43GgBBhPHDfVC39sOpY3"),
            bomj_query_id: 1233n,
            bomj_amount: 1000000000n
        }
    );
}
